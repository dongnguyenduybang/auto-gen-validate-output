import * as tf from '@tensorflow/tfjs';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import { TrainingData } from './declarations';

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const exists = promisify(fs.exists);
const mkdir = promisify(fs.mkdir);

const modelSavePath = path.join(__dirname, 'saved_model');
const modelPath = path.join(modelSavePath, 'model.json');
const weightsPath = path.join(modelSavePath, 'weights.bin');
const weightSpecsPath = path.join(modelSavePath, 'weight_specs.json');
const vocabSavePath = path.join(modelSavePath, 'vocabulary.json');

let modelPromise: Promise<typeof tf> | null = null;
let loadedModel: tf.LayersModel | null = null;
let vocabulary: Map<string, number> | null = null;

export const loadAIModel = async (): Promise<typeof tf> => {
  if (!modelPromise) {
    console.log('🤖 Khởi tạo TensorFlow...');
    modelPromise = tf
      .ready()
      .then(() => {
        console.log('✅ TensorFlow đã sẵn sàng');
        return tf;
      })
      .catch((error) => {
        console.error('❌ Lỗi khởi tạo TensorFlow:', error);
        throw error;
      });
  }
  return modelPromise;
};

export const getOrCreateTrainedModel = async (
  trainingData: TrainingData[],
): Promise<tf.LayersModel> => {
  await loadAIModel();

  if (loadedModel) {
    console.log('📦 Sử dụng model đã load');
    return loadedModel;
  }

  try {
    if (
      (await exists(modelPath)) &&
      (await exists(weightsPath)) &&
      (await exists(weightSpecsPath))
    ) {
      const modelTopology = JSON.parse(await readFile(modelPath, 'utf-8'));
      const weightSpecs = JSON.parse(await readFile(weightSpecsPath, 'utf-8'));
      const weightsBuffer = await readFile(weightsPath);
      const weightData = new Uint8Array(weightsBuffer).buffer;
      loadedModel = await tf.loadLayersModel(
        tf.io.fromMemory({
          modelTopology,
          weightSpecs,
          weightData,
        }),
      );
      console.log('📦 Đã load model từ local storage');
      return loadedModel;
    }
  } catch (e) {
    console.log('🚧 Không tìm thấy model hoặc lỗi load, đang train mới...', e);
  }

  if (trainingData.length === 0) {
    throw new Error('Không có dữ liệu training');
  }

  const vocab = await getOrCreateVocabulary(trainingData);
  const trainX: number[][] = [];
  const trainY: number[] = [];
  const labelMap: Record<string, number> = { sender: 0, receiver: 1 };

  trainingData.forEach((data) => {
    if (
      !data.action ||
      !data.swaggerDesc ||
      !data.apiEndpoint ||
      !data.httpMethod ||
      !data.userIdMeaning
    ) {
      console.warn(`⚠️ Dữ liệu huấn luyện không hợp lệ:`, data);
      return;
    }
    const features = createFeatureVector(
      data.action,
      data.swaggerDesc,
      data.apiEndpoint,
      data.httpMethod,
      vocab,
    );
    trainX.push(features);
    trainY.push(labelMap[data.userIdMeaning]);
  });

  if (trainX.length === 0 || trainY.length === 0) {
    throw new Error('Không có dữ liệu huấn luyện hợp lệ sau khi lọc');
  }

  const model = tf.sequential();
  model.add(
    tf.layers.dense({
      units: 64,
      inputShape: [trainX[0].length],
      activation: 'relu',
      kernelRegularizer: tf.regularizers.l2({ l2: 0.01 }),
    }),
  );
  model.add(tf.layers.batchNormalization());
  model.add(tf.layers.dropout({ rate: 0.5 }));
  model.add(
    tf.layers.dense({
      units: 32,
      activation: 'relu',
      kernelRegularizer: tf.regularizers.l2({ l2: 0.01 }),
    }),
  );
  model.add(tf.layers.batchNormalization());
  model.add(tf.layers.dropout({ rate: 0.3 }));
  model.add(
    tf.layers.dense({
      units: 2,
      activation: 'softmax',
    }),
  );

  model.compile({
    optimizer: tf.train.adam(0.001),
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy'],
  });

  const xs = tf.tensor2d(trainX);
  const ys = tf.tensor1d(trainY, 'int32');
  const ysCategorical = tf.oneHot(ys, 2);

  await model.fit(xs, ysCategorical, {
    epochs: 50,
    batchSize: Math.max(2, Math.floor(trainX.length / 4)),
    validationSplit: 0.2,
    verbose: 1,
    shuffle: true,
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        if (epoch % 10 === 0) {
          console.log(
            `Epoch ${epoch}: loss=${logs?.loss?.toFixed(4)}, accuracy=${logs?.acc?.toFixed(4)}`,
          );
        }
      },
    },
  });

  xs.dispose();
  ys.dispose();
  ysCategorical.dispose();

  if (!(await exists(modelSavePath))) {
    await mkdir(modelSavePath, { recursive: true });
  }
  try {
    await model.save(
      tf.io.withSaveHandler(async (artifacts) => {
        await writeFile(modelPath, JSON.stringify(artifacts.modelTopology));
        if (artifacts.weightData) {
          await writeFile(
            weightsPath,
            Buffer.from(artifacts.weightData as ArrayBuffer),
          );
        }
        await writeFile(weightSpecsPath, JSON.stringify(artifacts.weightSpecs));
        return {
          modelArtifactsInfo: {
            dateSaved: new Date(),
            modelTopologyType: 'JSON',
            modelTopologyBytes: JSON.stringify(artifacts.modelTopology).length,
            weightSpecsBytes: JSON.stringify(artifacts.weightSpecs).length,
            weightDataBytes: artifacts.weightData
              ? (artifacts.weightData as ArrayBuffer).byteLength
              : 0,
          },
        };
      }),
    );
    console.log('✅ TensorFlow mới đã được tạo và lưu!');
  } catch (e) {
    console.error('❌ Lỗi khi lưu model:', e);
    throw e;
  }

  loadedModel = model;
  return loadedModel;
};

export const getOrCreateVocabulary = async (
  trainingData: TrainingData[],
): Promise<Map<string, number>> => {
  if (vocabulary) {
    console.log('📚 Sử dụng vocabulary đã load');
    return vocabulary;
  }

  try {
    if (await exists(vocabSavePath)) {
      const vocabData = await readFile(vocabSavePath, 'utf-8');
      vocabulary = new Map(Object.entries(JSON.parse(vocabData)));
      console.log('📚 Đã load vocabulary từ local storage');
      return vocabulary;
    }
  } catch (e) {
    console.log('🚧 Không tìm thấy vocabulary hoặc lỗi load, đang tạo mới...', e);
  }

  vocabulary = new Map();
  const allWords = new Set<string>();
  trainingData.forEach((data) => {
    if (!data.action || !data.swaggerDesc || !data.contextClues) {
      console.warn(`⚠️ Dữ liệu huấn luyện không hợp lệ:`, data);
      return;
    }
    data.action
      .toLowerCase()
      .split('_')
      .forEach((word) => allWords.add(word));
    data.swaggerDesc
      .toLowerCase()
      .split(/\s+/)
      .forEach((word) => {
        const cleanWord = word.replace(/[^\w]/g, '');
        if (cleanWord.length > 2) allWords.add(cleanWord);
      });
    data.contextClues.forEach((clue) => allWords.add(clue));
  });
  Array.from(allWords).forEach((word, index) => {
    vocabulary!.set(word, index + 1);
  });

  if (!(await exists(modelSavePath))) {
    await mkdir(modelSavePath, { recursive: true });
  }
  try {
    await writeFile(
      vocabSavePath,
      JSON.stringify(Object.fromEntries(vocabulary)),
    );
    console.log('💾 Đã lưu vocabulary thành công');
  } catch (e) {
    console.error('❌ Lỗi khi lưu vocabulary:', e);
    throw e;
  }

  return vocabulary;
};

export function createFeatureVector(
  actionName: string,
  swaggerDesc: string = '',
  endpoint: string = '',
  method: string = 'POST',
  vocabulary: Map<string, number>,
): number[] {
  if (!vocabulary) {
    throw new Error('Vocabulary chưa được khởi tạo');
  }

  function textToVector(text: string, maxLength: number = 20): number[] {
    const words = text
      .toLowerCase()
      .replace(/([A-Z])/g, '_$1')
      .replace(/[^\w\s]/g, ' ')
      .split(/[\s_]+/)
      .filter((word) => word.length > 0);
    const vector = new Array(maxLength).fill(0);
    words.forEach((word, index) => {
      if (index < maxLength && vocabulary.has(word)) {
        vector[index] = vocabulary.get(word)!;
      }
    });
    return vector;
  }

  const features: number[] = [];
  const actionVector = textToVector(actionName, 12);
  features.push(...actionVector);
  const descVector = textToVector(swaggerDesc, 20);
  features.push(...descVector);
  const normalizedMethod = method.toLowerCase();
  const methodEncoding: Record<string, number[]> = {
    get: [1, 0, 0, 0],
    post: [0, 1, 0, 0],
    put: [0, 0, 1, 0],
    delete: [0, 0, 0, 1],
  };
  features.push(...(methodEncoding[normalizedMethod] || [0, 0, 0, 0]));
  const endpointFeatures = [
    endpoint.includes('accept') ? 1 : 0,
    endpoint.includes('send') ? 1 : 0,
    endpoint.includes('block') ? 1 : 0,
    endpoint.includes('reaction') ? 1 : 0,
    endpoint.includes('message') ? 1 : 0,
    endpoint.includes('request') ? 1 : 0,
    endpoint.includes('follow') ? 1 : 0,
    endpoint.includes('profile') ? 1 : 0,
    endpoint.includes('forward') ? 1 : 0,
    endpoint.includes('add') ? 1 : 0,
    endpoint.includes('mark') ? 1 : 0,
    endpoint.includes('invitation') ? 1 : 0, // Thêm feature cho invitation
  ];
  features.push(...endpointFeatures);
  const fullText = `${actionName} ${swaggerDesc} ${endpoint}`.toLowerCase();
  const semanticFeatures = [
    /send.*to|recipient|receive|destination|message.*to|dm.*to|direct.*to|add.*friend|cancel.*request|unfriend|assign.*admin|dismiss.*admin|ban.*channel|unban.*channel|report.*user|block.*user|unblock.*user|poke.*message|pin.*message|quote.*message|forward.*message|mark.*read|update.*message|add.*reaction|revoke.*reaction|whom/i.test(
      fullText,
    )
      ? 1
      : 0,
    /whom.*receive|who.*will.*receive|for.*user|to.*user/i.test(fullText)
      ? 1
      : 0,
    /accept.*from|request.*from|reject.*from|reject.*request|sender.*request|accept.*request|delete.*request|report.*message/i.test(
      fullText,
    )
      ? 1
      : 0,
    /who.*sent|sender/i.test(fullText) ? 1 : 0,
    /accept.*invitation|join.*group|join.*channel/i.test(fullText) ? 1 : 0, // Thêm feature cho accept invitation
    /^send|^message|^add.*friend|^cancel.*request|^unfriend|^assign.*admin|^dismiss.*admin|^ban.*channel|^unban.*channel|^report.*user|^block.*user|^unblock.*user|^poke.*message|^pin.*message|^quote.*message|^forward.*message|^mark.*read|^update.*message|^add.*reaction|^revoke.*reaction/i.test(
      actionName.toLowerCase(),
    )
      ? 1
      : 0,
    /^accept|^reject|^delete.*request|^report.*message/i.test(
      actionName.toLowerCase(),
    )
      ? 1
      : 0,
    /^get|^fetch/i.test(actionName.toLowerCase()) ? 1 : 0,
    /^mark/i.test(actionName.toLowerCase()) ? 1 : 0,
  ];
  features.push(...semanticFeatures);
  return features;
}

export function guessUserIdMeaning(
  actionName: string,
  description: string,
): 'sender' | 'receiver' {
  const fullText = `${actionName} ${description}`.toLowerCase();
  const receiverPatterns = [
    /send.*to|recipient|receive|destination|message.*to|dm.*to|direct.*to/i,
    /add.*friend|cancel.*request|unfriend|assign.*admin|dismiss.*admin/i,
    /ban.*channel|unban.*channel|report.*user|block.*user|unblock.*user/i,
    /poke.*message|pin.*message|quote.*message|forward.*message/i,
    /mark.*read|update.*message|add.*reaction|revoke.*reaction/i,
    /whom|for.*user|to.*user|identifies.*recipient/i,
    /accept.*invitation|join.*group|join.*channel/i, // Thêm pattern cho accept invitation
  ];
  const senderPatterns = [
    /accept.*from|request.*from|reject.*from|reject.*request/i,
    /sender.*request|accept.*request|delete.*request|report.*message/i,
    /who.*sent|sender|person.*who.*sent|user.*sent.*request/i,
  ];
  for (const pattern of receiverPatterns) {
    if (pattern.test(fullText)) return 'receiver';
  }
  for (const pattern of senderPatterns) {
    if (pattern.test(fullText)) return 'sender';
  }
  const actionLower = actionName.toLowerCase();
  if (
    /^send|^message|^add.*friend|^cancel.*request|^unfriend|^assign.*admin|^dismiss.*admin|^ban.*channel|^unban.*channel|^report.*user|^block.*user|^unblock.*user|^poke.*message|^pin.*message|^quote.*message|^forward.*message|^mark.*read|^update.*message|^add.*reaction|^revoke.*reaction|^accept|^join/i.test(
      actionLower,
    )
  ) {
    return 'receiver';
  }
  if (
    /^accept.*request|^approve|^reject|^report.*message|^delete.*request/i.test(
      actionLower,
    )
  ) {
    return 'sender';
  }
  return 'sender';
}