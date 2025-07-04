// ai-service.ts
import * as tf from '@tensorflow/tfjs';
let isModelLoaded = false;

export const loadAIModel = async () => {
  if (!isModelLoaded) {
    console.log('🤖 Đang khởi tạo TensorFlow...');
    await tf.ready();
    console.log('✅ TensorFlow đã sẵn sàng');
    isModelLoaded = true;
  }
  return tf;
};

export const getAIModel = () => {
  if (!isModelLoaded) {
    throw new Error('Model chưa được khởi tạo');
  }
  return tf;
};