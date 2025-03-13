
    import { validateSendStickerMessage } from '../validates/send-sticker-message/validate-send-sticker-message';
    import fs from 'fs';
    import path from 'path';
    import { summarizeErrors, summaryFields, getTime } from '../helps/utils';
    import { executeBeforeAllSteps, executeDelete } from '../functions';
    import { resolveJsonVariables,resolveVariables } from '../helps/get-resolve-variables';
    import { plainToClass } from 'class-transformer';
    import { SendStickerMessageResponse } from '../response/send-sticker-message.response';
    import { validateAfterLogic } from '../validates/send-sticker-message/validate-send-sticker-message-after';

    describe('Testcase for send-sticker-message', () => {
        let totalTests = 0;
        let passedLogic = 0;
        let failedTests = [];
        let logicTests = [];
        let passedTests = 0
        let passed200 = 0
        let headerRequest
        let testNumber
        let resolvedData
        let nextStep = false

        beforeAll( async () => {

          await executeBeforeAllSteps(["mockUser('duybang12345',1, 0)","createChannel({{token}}, 'channel 1')"])

          headerRequest = {"Content-Type":"application/json","x-session-token":"{{token}}","x-country-code":"VN"}
         
        })
        afterEach(async () => {

        if(nextStep === true){
          if (!resolveVariables("{{messageId}}")) {
              return; 
           }
            const result = await executeBeforeAllSteps(["getMessage({{token}}, {{channelId}}, {{messageId}})"])
            const validateAfter = await validateAfterLogic(result, resolvedData)
            if (validateAfter.length === 0) {
              passedLogic++;
              passedTests++;
            
              logicTests.push({ 
                testcase: testNumber,
              });
            
            } else {
              logicTests.push({ 
                testcase: testNumber,
                errorLogic: validateAfter
              });
            }
          }
         
        })

        
           
            it('Test case # 1 with expect errors ["workspaceId should not be empty","channelId should not be empty","stickerId should not be empty"] ', async () => {
             testNumber = 1;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","stickerId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId should not be empty","stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 2 with expect errors ["workspaceId should not be empty","channelId should not be empty","stickerId should not be empty","ref should not be empty"] ', async () => {
             testNumber = 2;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","stickerId":"","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId should not be empty","stickerId should not be empty","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 3 with expect errors ["workspaceId should not be empty","channelId should not be empty","stickerId should not be empty","ref must be a string"] ', async () => {
             testNumber = 3;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","stickerId":"","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId should not be empty","stickerId should not be empty","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 4 with expect errors ["workspaceId should not be empty","channelId should not be empty","stickerId should not be empty"] ', async () => {
             testNumber = 4;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","stickerId":"","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId should not be empty","stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 5 with expect errors ["workspaceId should not be empty","channelId should not be empty","stickerId must be a string"] ', async () => {
             testNumber = 5;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","stickerId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId should not be empty","stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 6 with expect errors ["workspaceId should not be empty","channelId should not be empty","stickerId must be a string","ref should not be empty"] ', async () => {
             testNumber = 6;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","stickerId":12345,"ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId should not be empty","stickerId must be a string","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 7 with expect errors ["workspaceId should not be empty","channelId should not be empty","stickerId must be a string","ref must be a string"] ', async () => {
             testNumber = 7;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","stickerId":12345,"ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId should not be empty","stickerId must be a string","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 8 with expect errors ["workspaceId should not be empty","channelId should not be empty","stickerId must be a string"] ', async () => {
             testNumber = 8;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","stickerId":12345,"ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId should not be empty","stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 9 with expect errors ["workspaceId should not be empty","channelId should not be empty"] ', async () => {
             testNumber = 9;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 10 with expect errors ["workspaceId should not be empty","channelId should not be empty","ref should not be empty"] ', async () => {
             testNumber = 10;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId should not be empty","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 11 with expect errors ["workspaceId should not be empty","channelId should not be empty","ref must be a string"] ', async () => {
             testNumber = 11;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId should not be empty","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 12 with expect errors ["workspaceId should not be empty","channelId should not be empty"] ', async () => {
             testNumber = 12;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 13 with expect errors ["workspaceId should not be empty","channelId must be a string","stickerId should not be empty"] ', async () => {
             testNumber = 13;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"stickerId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId must be a string","stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 14 with expect errors ["workspaceId should not be empty","channelId must be a string","stickerId should not be empty","ref should not be empty"] ', async () => {
             testNumber = 14;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"stickerId":"","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId must be a string","stickerId should not be empty","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 15 with expect errors ["workspaceId should not be empty","channelId must be a string","stickerId should not be empty","ref must be a string"] ', async () => {
             testNumber = 15;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"stickerId":"","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId must be a string","stickerId should not be empty","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 16 with expect errors ["workspaceId should not be empty","channelId must be a string","stickerId should not be empty"] ', async () => {
             testNumber = 16;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"stickerId":"","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId must be a string","stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 17 with expect errors ["workspaceId should not be empty","channelId must be a string","stickerId must be a string"] ', async () => {
             testNumber = 17;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"stickerId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId must be a string","stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 18 with expect errors ["workspaceId should not be empty","channelId must be a string","stickerId must be a string","ref should not be empty"] ', async () => {
             testNumber = 18;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"stickerId":12345,"ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId must be a string","stickerId must be a string","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 19 with expect errors ["workspaceId should not be empty","channelId must be a string","stickerId must be a string","ref must be a string"] ', async () => {
             testNumber = 19;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"stickerId":12345,"ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId must be a string","stickerId must be a string","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 20 with expect errors ["workspaceId should not be empty","channelId must be a string","stickerId must be a string"] ', async () => {
             testNumber = 20;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"stickerId":12345,"ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId must be a string","stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 21 with expect errors ["workspaceId should not be empty","channelId must be a string"] ', async () => {
             testNumber = 21;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 22 with expect errors ["workspaceId should not be empty","channelId must be a string","ref should not be empty"] ', async () => {
             testNumber = 22;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId must be a string","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 23 with expect errors ["workspaceId should not be empty","channelId must be a string","ref must be a string"] ', async () => {
             testNumber = 23;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId must be a string","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 24 with expect errors ["workspaceId should not be empty","channelId must be a string"] ', async () => {
             testNumber = 24;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 25 with expect errors ["workspaceId should not be empty","stickerId should not be empty"] ', async () => {
             testNumber = 25;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","stickerId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 26 with expect errors ["workspaceId should not be empty","stickerId should not be empty","ref should not be empty"] ', async () => {
             testNumber = 26;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","stickerId":"","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","stickerId should not be empty","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 27 with expect errors ["workspaceId should not be empty","stickerId should not be empty","ref must be a string"] ', async () => {
             testNumber = 27;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","stickerId":"","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","stickerId should not be empty","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 28 with expect errors ["workspaceId should not be empty","stickerId should not be empty"] ', async () => {
             testNumber = 28;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","stickerId":"","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 29 with expect errors ["workspaceId should not be empty","stickerId must be a string"] ', async () => {
             testNumber = 29;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","stickerId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 30 with expect errors ["workspaceId should not be empty","stickerId must be a string","ref should not be empty"] ', async () => {
             testNumber = 30;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","stickerId":12345,"ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","stickerId must be a string","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 31 with expect errors ["workspaceId should not be empty","stickerId must be a string","ref must be a string"] ', async () => {
             testNumber = 31;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","stickerId":12345,"ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","stickerId must be a string","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 32 with expect errors ["workspaceId should not be empty","stickerId must be a string"] ', async () => {
             testNumber = 32;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","stickerId":12345,"ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 33 with expect errors ["workspaceId should not be empty"] ', async () => {
             testNumber = 33;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 34 with expect errors ["workspaceId should not be empty","ref should not be empty"] ', async () => {
             testNumber = 34;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 35 with expect errors ["workspaceId should not be empty","ref must be a string"] ', async () => {
             testNumber = 35;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 36 with expect errors ["workspaceId should not be empty"] ', async () => {
             testNumber = 36;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 37 with expect errors ["workspaceId must be a string","channelId should not be empty","stickerId should not be empty"] ', async () => {
             testNumber = 37;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","stickerId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId should not be empty","stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 38 with expect errors ["workspaceId must be a string","channelId should not be empty","stickerId should not be empty","ref should not be empty"] ', async () => {
             testNumber = 38;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","stickerId":"","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId should not be empty","stickerId should not be empty","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 39 with expect errors ["workspaceId must be a string","channelId should not be empty","stickerId should not be empty","ref must be a string"] ', async () => {
             testNumber = 39;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","stickerId":"","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId should not be empty","stickerId should not be empty","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 40 with expect errors ["workspaceId must be a string","channelId should not be empty","stickerId should not be empty"] ', async () => {
             testNumber = 40;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","stickerId":"","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId should not be empty","stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 41 with expect errors ["workspaceId must be a string","channelId should not be empty","stickerId must be a string"] ', async () => {
             testNumber = 41;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","stickerId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId should not be empty","stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 42 with expect errors ["workspaceId must be a string","channelId should not be empty","stickerId must be a string","ref should not be empty"] ', async () => {
             testNumber = 42;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","stickerId":12345,"ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId should not be empty","stickerId must be a string","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 43 with expect errors ["workspaceId must be a string","channelId should not be empty","stickerId must be a string","ref must be a string"] ', async () => {
             testNumber = 43;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","stickerId":12345,"ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId should not be empty","stickerId must be a string","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 44 with expect errors ["workspaceId must be a string","channelId should not be empty","stickerId must be a string"] ', async () => {
             testNumber = 44;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","stickerId":12345,"ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId should not be empty","stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 45 with expect errors ["workspaceId must be a string","channelId should not be empty"] ', async () => {
             testNumber = 45;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 46 with expect errors ["workspaceId must be a string","channelId should not be empty","ref should not be empty"] ', async () => {
             testNumber = 46;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId should not be empty","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 47 with expect errors ["workspaceId must be a string","channelId should not be empty","ref must be a string"] ', async () => {
             testNumber = 47;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId should not be empty","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 48 with expect errors ["workspaceId must be a string","channelId should not be empty"] ', async () => {
             testNumber = 48;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 49 with expect errors ["workspaceId must be a string","channelId must be a string","stickerId should not be empty"] ', async () => {
             testNumber = 49;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"stickerId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId must be a string","stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 50 with expect errors ["workspaceId must be a string","channelId must be a string","stickerId should not be empty","ref should not be empty"] ', async () => {
             testNumber = 50;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"stickerId":"","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId must be a string","stickerId should not be empty","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 51 with expect errors ["workspaceId must be a string","channelId must be a string","stickerId should not be empty","ref must be a string"] ', async () => {
             testNumber = 51;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"stickerId":"","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId must be a string","stickerId should not be empty","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 52 with expect errors ["workspaceId must be a string","channelId must be a string","stickerId should not be empty"] ', async () => {
             testNumber = 52;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"stickerId":"","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId must be a string","stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 53 with expect errors ["workspaceId must be a string","channelId must be a string","stickerId must be a string"] ', async () => {
             testNumber = 53;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"stickerId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId must be a string","stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 54 with expect errors ["workspaceId must be a string","channelId must be a string","stickerId must be a string","ref should not be empty"] ', async () => {
             testNumber = 54;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"stickerId":12345,"ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId must be a string","stickerId must be a string","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 55 with expect errors ["workspaceId must be a string","channelId must be a string","stickerId must be a string","ref must be a string"] ', async () => {
             testNumber = 55;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"stickerId":12345,"ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId must be a string","stickerId must be a string","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 56 with expect errors ["workspaceId must be a string","channelId must be a string","stickerId must be a string"] ', async () => {
             testNumber = 56;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"stickerId":12345,"ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId must be a string","stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 57 with expect errors ["workspaceId must be a string","channelId must be a string"] ', async () => {
             testNumber = 57;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 58 with expect errors ["workspaceId must be a string","channelId must be a string","ref should not be empty"] ', async () => {
             testNumber = 58;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId must be a string","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 59 with expect errors ["workspaceId must be a string","channelId must be a string","ref must be a string"] ', async () => {
             testNumber = 59;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId must be a string","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 60 with expect errors ["workspaceId must be a string","channelId must be a string"] ', async () => {
             testNumber = 60;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 61 with expect errors ["workspaceId must be a string","stickerId should not be empty"] ', async () => {
             testNumber = 61;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","stickerId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 62 with expect errors ["workspaceId must be a string","stickerId should not be empty","ref should not be empty"] ', async () => {
             testNumber = 62;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","stickerId":"","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","stickerId should not be empty","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 63 with expect errors ["workspaceId must be a string","stickerId should not be empty","ref must be a string"] ', async () => {
             testNumber = 63;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","stickerId":"","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","stickerId should not be empty","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 64 with expect errors ["workspaceId must be a string","stickerId should not be empty"] ', async () => {
             testNumber = 64;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","stickerId":"","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 65 with expect errors ["workspaceId must be a string","stickerId must be a string"] ', async () => {
             testNumber = 65;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","stickerId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 66 with expect errors ["workspaceId must be a string","stickerId must be a string","ref should not be empty"] ', async () => {
             testNumber = 66;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","stickerId":12345,"ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","stickerId must be a string","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 67 with expect errors ["workspaceId must be a string","stickerId must be a string","ref must be a string"] ', async () => {
             testNumber = 67;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","stickerId":12345,"ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","stickerId must be a string","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 68 with expect errors ["workspaceId must be a string","stickerId must be a string"] ', async () => {
             testNumber = 68;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","stickerId":12345,"ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 69 with expect errors ["workspaceId must be a string"] ', async () => {
             testNumber = 69;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 70 with expect errors ["workspaceId must be a string","ref should not be empty"] ', async () => {
             testNumber = 70;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 71 with expect errors ["workspaceId must be a string","ref must be a string"] ', async () => {
             testNumber = 71;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 72 with expect errors ["workspaceId must be a string"] ', async () => {
             testNumber = 72;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 73 with expect errors ["channelId should not be empty","stickerId should not be empty"] ', async () => {
             testNumber = 73;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","stickerId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId should not be empty","stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 74 with expect errors ["channelId should not be empty","stickerId should not be empty","ref should not be empty"] ', async () => {
             testNumber = 74;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","stickerId":"","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId should not be empty","stickerId should not be empty","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 75 with expect errors ["channelId should not be empty","stickerId should not be empty","ref must be a string"] ', async () => {
             testNumber = 75;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","stickerId":"","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId should not be empty","stickerId should not be empty","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 76 with expect errors ["channelId should not be empty","stickerId should not be empty"] ', async () => {
             testNumber = 76;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","stickerId":"","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId should not be empty","stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 77 with expect errors ["channelId should not be empty","stickerId must be a string"] ', async () => {
             testNumber = 77;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","stickerId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId should not be empty","stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 78 with expect errors ["channelId should not be empty","stickerId must be a string","ref should not be empty"] ', async () => {
             testNumber = 78;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","stickerId":12345,"ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId should not be empty","stickerId must be a string","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 79 with expect errors ["channelId should not be empty","stickerId must be a string","ref must be a string"] ', async () => {
             testNumber = 79;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","stickerId":12345,"ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId should not be empty","stickerId must be a string","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 80 with expect errors ["channelId should not be empty","stickerId must be a string"] ', async () => {
             testNumber = 80;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","stickerId":12345,"ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId should not be empty","stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 81 with expect errors ["channelId should not be empty"] ', async () => {
             testNumber = 81;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 82 with expect errors ["channelId should not be empty","ref should not be empty"] ', async () => {
             testNumber = 82;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId should not be empty","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 83 with expect errors ["channelId should not be empty","ref must be a string"] ', async () => {
             testNumber = 83;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId should not be empty","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 84 with expect errors ["channelId should not be empty"] ', async () => {
             testNumber = 84;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 85 with expect errors ["channelId must be a string","stickerId should not be empty"] ', async () => {
             testNumber = 85;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"stickerId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId must be a string","stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 86 with expect errors ["channelId must be a string","stickerId should not be empty","ref should not be empty"] ', async () => {
             testNumber = 86;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"stickerId":"","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId must be a string","stickerId should not be empty","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 87 with expect errors ["channelId must be a string","stickerId should not be empty","ref must be a string"] ', async () => {
             testNumber = 87;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"stickerId":"","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId must be a string","stickerId should not be empty","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 88 with expect errors ["channelId must be a string","stickerId should not be empty"] ', async () => {
             testNumber = 88;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"stickerId":"","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId must be a string","stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 89 with expect errors ["channelId must be a string","stickerId must be a string"] ', async () => {
             testNumber = 89;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"stickerId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId must be a string","stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 90 with expect errors ["channelId must be a string","stickerId must be a string","ref should not be empty"] ', async () => {
             testNumber = 90;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"stickerId":12345,"ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId must be a string","stickerId must be a string","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 91 with expect errors ["channelId must be a string","stickerId must be a string","ref must be a string"] ', async () => {
             testNumber = 91;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"stickerId":12345,"ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId must be a string","stickerId must be a string","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 92 with expect errors ["channelId must be a string","stickerId must be a string"] ', async () => {
             testNumber = 92;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"stickerId":12345,"ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId must be a string","stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 93 with expect errors ["channelId must be a string"] ', async () => {
             testNumber = 93;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 94 with expect errors ["channelId must be a string","ref should not be empty"] ', async () => {
             testNumber = 94;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId must be a string","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 95 with expect errors ["channelId must be a string","ref must be a string"] ', async () => {
             testNumber = 95;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId must be a string","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 96 with expect errors ["channelId must be a string"] ', async () => {
             testNumber = 96;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["channelId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 97 with expect errors ["stickerId should not be empty"] ', async () => {
             testNumber = 97;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","stickerId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 98 with expect errors ["stickerId should not be empty","ref should not be empty"] ', async () => {
             testNumber = 98;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","stickerId":"","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["stickerId should not be empty","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 99 with expect errors ["stickerId should not be empty","ref must be a string"] ', async () => {
             testNumber = 99;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","stickerId":"","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["stickerId should not be empty","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 100 with expect errors ["stickerId should not be empty"] ', async () => {
             testNumber = 100;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","stickerId":"","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["stickerId should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 101 with expect errors ["stickerId must be a string"] ', async () => {
             testNumber = 101;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","stickerId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 102 with expect errors ["stickerId must be a string","ref should not be empty"] ', async () => {
             testNumber = 102;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","stickerId":12345,"ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["stickerId must be a string","ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 103 with expect errors ["stickerId must be a string","ref must be a string"] ', async () => {
             testNumber = 103;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","stickerId":12345,"ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["stickerId must be a string","ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 104 with expect errors ["stickerId must be a string"] ', async () => {
             testNumber = 104;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","stickerId":12345,"ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["stickerId must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 105 with expect errors [] ', async () => {
             testNumber = 105;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  [].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 106 with expect errors ["ref should not be empty"] ', async () => {
             testNumber = 106;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["ref should not be empty"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 107 with expect errors ["ref must be a string"] ', async () => {
             testNumber = 107;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  ["ref must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

           
            it('Test case # 108 with expect errors [] ', async () => {
             testNumber = 108;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","stickerId":"01JEQ2DG91SQX0P3VCEH4DZVA9","ref":"ref"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessageSticker`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    nextStep = true
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendStickerMessageResponse, data);
                  const validateLogic = await validateSendStickerMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
                }
               
              }else if(response.status === 400){
                const expectJson =  [].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });

      afterAll(async () => {
        const folderPath = path.join(__dirname, '../reports');

        const folderPathLogic = path.join(__dirname, '../reports/send-sticker-message');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        if (!fs.existsSync(folderPathLogic)) {
          fs.mkdirSync(folderPathLogic, { recursive: true });
        }
        const summary = summarizeErrors(failedTests, totalTests, passedLogic, passed200);
        const resultContent = `
=== Test Reports for DTO "send-sticker-message" ===
Host: ${globalThis.url}
Endpoint: /Message/SendMessageSticker
Summary: 
Total Tests: ${totalTests}
Passed Tests: ${passedTests}
Failed Tests: ${failedTests.length}
Status Code:
  200: ${summary.statusCodes[200] || 0}
  201: ${summary.statusCodes[201] || 0}
  400: ${summary.statusCodes[400] || 0}
  403: ${summary.statusCodes[403] || 0}
  404: ${summary.statusCodes[404] || 0}
  500: ${summary.statusCodes[500] || 0}
Uniques Error:
  ${Array.from(summary.uniqueErrors.entries())
          .map(([error, count]) => `${error}: ${count} 
 `)
      .join('')
  }
Failed Test Details:
${failedTests.map((failCase) => `
  - Testcase #${failCase.testcase}
    Missing Errors: ${failCase.missing ? JSON.stringify(failCase.missing) : "''"}
    Status Code: ${failCase.code ? JSON.stringify(failCase.code) : "''"}
    Extra Errors: ${failCase.extra ? JSON.stringify(failCase.extra) : "''"}
    Detail Errors: ${failCase.errorDetails ? JSON.stringify(failCase.errorDetails) : "''"}`).join('')}`;


    const resultLogicError = `
    === Test Reports Logic for DTO "send-sticker-message" ===
    Host: ${globalThis.url}
    Endpoint: /Message/SendMessageSticker
    Error: 
    ${logicTests.map((logicCaseFail) => `
    - Testcase #${logicCaseFail.testcase}
      Logic Errors: ${logicCaseFail.errorLogic ? JSON.stringify(logicCaseFail.errorLogic) : "''"}
  ` ).join('')}`


const resultFilePath = path.join(folderPath, 'send-sticker-message.txt');
const resultFilePathLogic = path.join(folderPathLogic, `send-sticker-message.${getTime()}.txt`);
fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
fs.writeFileSync(resultFilePathLogic, resultLogicError, 'utf-8');
console.log(`Success: ${resultFilePath}`);
await executeDelete(undefined, headerRequest)    
});
                          
                    });

                