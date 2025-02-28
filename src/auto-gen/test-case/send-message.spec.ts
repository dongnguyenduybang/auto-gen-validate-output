
    import { validateSendMessageResponse } from '../validates/send-message/validate-send-message';
    import fs from 'fs';
    import path from 'path';
    import { summarizeErrors, summaryFields } from '../helps/utils';
    import { executeBeforeAllSteps, executeDelete } from '../functions';
    import { resolveJsonVariables } from '../helps/get-resolve-variables';
    import { plainToClass } from 'class-transformer';
    import { SendMessageDTOResponse } from '../dto-response/send-message.response.dto';

    describe('Testcase for send-message', () => {
        let totalTests = 0;
        let passedLogic = 0;
        let failedTests = [];
        let passedTests = 0
        let headerRequest

        beforeAll( async () => {

          await executeBeforeAllSteps(["mockUser('duy123456',1, 0)","createChannel({{token}}, 'channel 1')"])

          headerRequest = {"Content-Type":"application/json","x-session-token":"{{token}}","x-country-code":"VN"}
         
        })

        
          it('Test case #1 with expect errors ["workspaceId should not be empty","channelId should not be empty","content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"","content":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:1,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","channelId should not be empty","content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 1,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 1,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 1,
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
              failedTests.push({
                testcase: 1,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 1,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #2 with expect errors ["workspaceId should not be empty","channelId should not be empty","content should not be empty","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"","content":"","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:2,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","channelId should not be empty","content should not be empty","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 2,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 2,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 2,
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
              failedTests.push({
                testcase: 2,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 2,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #3 with expect errors ["workspaceId should not be empty","channelId should not be empty","content should not be empty","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"","content":"","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:3,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","channelId should not be empty","content should not be empty","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 3,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 3,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 3,
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
              failedTests.push({
                testcase: 3,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 3,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #4 with expect errors ["workspaceId should not be empty","channelId should not be empty","content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"","content":"","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:4,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","channelId should not be empty","content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 4,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 4,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 4,
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
              failedTests.push({
                testcase: 4,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 4,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #5 with expect errors ["workspaceId should not be empty","channelId should not be empty","content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"","content":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:5,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","channelId should not be empty","content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 5,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 5,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 5,
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
              failedTests.push({
                testcase: 5,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 5,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #6 with expect errors ["workspaceId should not be empty","channelId should not be empty","content must be a string","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"","content":12345,"ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:6,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","channelId should not be empty","content must be a string","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 6,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 6,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 6,
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
              failedTests.push({
                testcase: 6,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 6,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #7 with expect errors ["workspaceId should not be empty","channelId should not be empty","content must be a string","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"","content":12345,"ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:7,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","channelId should not be empty","content must be a string","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 7,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 7,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 7,
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
              failedTests.push({
                testcase: 7,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 7,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #8 with expect errors ["workspaceId should not be empty","channelId should not be empty","content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"","content":12345,"ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:8,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","channelId should not be empty","content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 8,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 8,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 8,
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
              failedTests.push({
                testcase: 8,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 8,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #9 with expect errors ["workspaceId should not be empty","channelId should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"","content":"test123123"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:9,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 9,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 9,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 9,
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
              failedTests.push({
                testcase: 9,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 9,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #10 with expect errors ["workspaceId should not be empty","channelId should not be empty","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"","content":"test123123","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:10,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 10,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 10,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 10,
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
              failedTests.push({
                testcase: 10,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 10,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #11 with expect errors ["workspaceId should not be empty","channelId should not be empty","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"","content":"test123123","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:11,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 11,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 11,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 11,
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
              failedTests.push({
                testcase: 11,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 11,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #12 with expect errors ["workspaceId should not be empty","channelId should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"","content":"test123123","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:12,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 12,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 12,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 12,
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
              failedTests.push({
                testcase: 12,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 12,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #13 with expect errors ["workspaceId should not be empty","channelId must be a string","content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":12345,"content":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:13,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","channelId must be a string","content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 13,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 13,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 13,
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
              failedTests.push({
                testcase: 13,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 13,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #14 with expect errors ["workspaceId should not be empty","channelId must be a string","content should not be empty","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":12345,"content":"","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:14,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","channelId must be a string","content should not be empty","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 14,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 14,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 14,
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
              failedTests.push({
                testcase: 14,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 14,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #15 with expect errors ["workspaceId should not be empty","channelId must be a string","content should not be empty","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":12345,"content":"","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:15,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","channelId must be a string","content should not be empty","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 15,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 15,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 15,
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
              failedTests.push({
                testcase: 15,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 15,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #16 with expect errors ["workspaceId should not be empty","channelId must be a string","content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":12345,"content":"","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:16,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","channelId must be a string","content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 16,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 16,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 16,
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
              failedTests.push({
                testcase: 16,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 16,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #17 with expect errors ["workspaceId should not be empty","channelId must be a string","content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":12345,"content":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:17,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","channelId must be a string","content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 17,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 17,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 17,
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
              failedTests.push({
                testcase: 17,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 17,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #18 with expect errors ["workspaceId should not be empty","channelId must be a string","content must be a string","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":12345,"content":12345,"ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:18,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","channelId must be a string","content must be a string","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 18,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 18,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 18,
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
              failedTests.push({
                testcase: 18,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 18,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #19 with expect errors ["workspaceId should not be empty","channelId must be a string","content must be a string","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":12345,"content":12345,"ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:19,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","channelId must be a string","content must be a string","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 19,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 19,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 19,
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
              failedTests.push({
                testcase: 19,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 19,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #20 with expect errors ["workspaceId should not be empty","channelId must be a string","content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":12345,"content":12345,"ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:20,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","channelId must be a string","content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 20,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 20,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 20,
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
              failedTests.push({
                testcase: 20,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 20,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #21 with expect errors ["workspaceId should not be empty","channelId must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":12345,"content":"test123123"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:21,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 21,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 21,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 21,
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
              failedTests.push({
                testcase: 21,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 21,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #22 with expect errors ["workspaceId should not be empty","channelId must be a string","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":12345,"content":"test123123","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:22,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 22,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 22,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 22,
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
              failedTests.push({
                testcase: 22,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 22,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #23 with expect errors ["workspaceId should not be empty","channelId must be a string","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":12345,"content":"test123123","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:23,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 23,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 23,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 23,
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
              failedTests.push({
                testcase: 23,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 23,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #24 with expect errors ["workspaceId should not be empty","channelId must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":12345,"content":"test123123","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:24,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 24,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 24,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 24,
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
              failedTests.push({
                testcase: 24,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 24,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #25 with expect errors ["workspaceId should not be empty","content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:25,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 25,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 25,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 25,
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
              failedTests.push({
                testcase: 25,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 25,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #26 with expect errors ["workspaceId should not be empty","content should not be empty","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":"","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:26,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","content should not be empty","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 26,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 26,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 26,
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
              failedTests.push({
                testcase: 26,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 26,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #27 with expect errors ["workspaceId should not be empty","content should not be empty","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":"","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:27,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","content should not be empty","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 27,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 27,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 27,
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
              failedTests.push({
                testcase: 27,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 27,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #28 with expect errors ["workspaceId should not be empty","content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":"","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:28,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 28,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 28,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 28,
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
              failedTests.push({
                testcase: 28,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 28,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #29 with expect errors ["workspaceId should not be empty","content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:29,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 29,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 29,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 29,
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
              failedTests.push({
                testcase: 29,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 29,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #30 with expect errors ["workspaceId should not be empty","content must be a string","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":12345,"ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:30,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","content must be a string","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 30,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 30,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 30,
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
              failedTests.push({
                testcase: 30,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 30,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #31 with expect errors ["workspaceId should not be empty","content must be a string","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":12345,"ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:31,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","content must be a string","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 31,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 31,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 31,
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
              failedTests.push({
                testcase: 31,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 31,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #32 with expect errors ["workspaceId should not be empty","content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":12345,"ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:32,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId should not be empty","content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 32,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 32,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 32,
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
              failedTests.push({
                testcase: 32,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 32,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #33 with expect errors ["workspaceId should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":"test123123"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:33,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 33,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 33,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 33,
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
              failedTests.push({
                testcase: 33,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 33,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #34 with expect errors ["workspaceId should not be empty","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":"test123123","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:34,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 34,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 34,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 34,
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
              failedTests.push({
                testcase: 34,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 34,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #35 with expect errors ["workspaceId should not be empty","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":"test123123","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:35,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 35,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 35,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 35,
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
              failedTests.push({
                testcase: 35,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 35,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #36 with expect errors ["workspaceId should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":"test123123","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:36,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 36,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 36,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 36,
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
              failedTests.push({
                testcase: 36,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 36,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #37 with expect errors ["workspaceId must be a string","channelId should not be empty","content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"","content":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:37,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","channelId should not be empty","content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 37,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 37,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 37,
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
              failedTests.push({
                testcase: 37,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 37,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #38 with expect errors ["workspaceId must be a string","channelId should not be empty","content should not be empty","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"","content":"","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:38,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","channelId should not be empty","content should not be empty","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 38,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 38,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 38,
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
              failedTests.push({
                testcase: 38,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 38,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #39 with expect errors ["workspaceId must be a string","channelId should not be empty","content should not be empty","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"","content":"","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:39,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","channelId should not be empty","content should not be empty","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 39,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 39,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 39,
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
              failedTests.push({
                testcase: 39,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 39,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #40 with expect errors ["workspaceId must be a string","channelId should not be empty","content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"","content":"","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:40,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","channelId should not be empty","content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 40,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 40,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 40,
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
              failedTests.push({
                testcase: 40,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 40,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #41 with expect errors ["workspaceId must be a string","channelId should not be empty","content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"","content":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:41,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","channelId should not be empty","content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 41,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 41,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 41,
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
              failedTests.push({
                testcase: 41,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 41,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #42 with expect errors ["workspaceId must be a string","channelId should not be empty","content must be a string","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"","content":12345,"ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:42,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","channelId should not be empty","content must be a string","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 42,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 42,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 42,
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
              failedTests.push({
                testcase: 42,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 42,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #43 with expect errors ["workspaceId must be a string","channelId should not be empty","content must be a string","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"","content":12345,"ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:43,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","channelId should not be empty","content must be a string","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 43,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 43,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 43,
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
              failedTests.push({
                testcase: 43,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 43,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #44 with expect errors ["workspaceId must be a string","channelId should not be empty","content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"","content":12345,"ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:44,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","channelId should not be empty","content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 44,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 44,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 44,
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
              failedTests.push({
                testcase: 44,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 44,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #45 with expect errors ["workspaceId must be a string","channelId should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"","content":"test123123"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:45,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 45,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 45,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 45,
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
              failedTests.push({
                testcase: 45,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 45,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #46 with expect errors ["workspaceId must be a string","channelId should not be empty","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"","content":"test123123","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:46,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 46,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 46,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 46,
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
              failedTests.push({
                testcase: 46,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 46,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #47 with expect errors ["workspaceId must be a string","channelId should not be empty","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"","content":"test123123","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:47,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 47,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 47,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 47,
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
              failedTests.push({
                testcase: 47,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 47,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #48 with expect errors ["workspaceId must be a string","channelId should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"","content":"test123123","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:48,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 48,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 48,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 48,
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
              failedTests.push({
                testcase: 48,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 48,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #49 with expect errors ["workspaceId must be a string","channelId must be a string","content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":12345,"content":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:49,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","channelId must be a string","content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 49,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 49,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 49,
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
              failedTests.push({
                testcase: 49,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 49,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #50 with expect errors ["workspaceId must be a string","channelId must be a string","content should not be empty","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":12345,"content":"","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:50,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","channelId must be a string","content should not be empty","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 50,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 50,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 50,
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
              failedTests.push({
                testcase: 50,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 50,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #51 with expect errors ["workspaceId must be a string","channelId must be a string","content should not be empty","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":12345,"content":"","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:51,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","channelId must be a string","content should not be empty","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 51,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 51,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 51,
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
              failedTests.push({
                testcase: 51,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 51,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #52 with expect errors ["workspaceId must be a string","channelId must be a string","content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":12345,"content":"","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:52,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","channelId must be a string","content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 52,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 52,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 52,
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
              failedTests.push({
                testcase: 52,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 52,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #53 with expect errors ["workspaceId must be a string","channelId must be a string","content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":12345,"content":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:53,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","channelId must be a string","content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 53,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 53,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 53,
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
              failedTests.push({
                testcase: 53,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 53,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #54 with expect errors ["workspaceId must be a string","channelId must be a string","content must be a string","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":12345,"content":12345,"ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:54,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","channelId must be a string","content must be a string","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 54,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 54,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 54,
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
              failedTests.push({
                testcase: 54,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 54,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #55 with expect errors ["workspaceId must be a string","channelId must be a string","content must be a string","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":12345,"content":12345,"ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:55,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","channelId must be a string","content must be a string","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 55,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 55,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 55,
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
              failedTests.push({
                testcase: 55,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 55,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #56 with expect errors ["workspaceId must be a string","channelId must be a string","content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":12345,"content":12345,"ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:56,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","channelId must be a string","content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 56,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 56,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 56,
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
              failedTests.push({
                testcase: 56,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 56,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #57 with expect errors ["workspaceId must be a string","channelId must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":12345,"content":"test123123"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:57,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 57,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 57,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 57,
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
              failedTests.push({
                testcase: 57,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 57,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #58 with expect errors ["workspaceId must be a string","channelId must be a string","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":12345,"content":"test123123","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:58,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 58,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 58,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 58,
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
              failedTests.push({
                testcase: 58,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 58,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #59 with expect errors ["workspaceId must be a string","channelId must be a string","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":12345,"content":"test123123","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:59,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 59,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 59,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 59,
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
              failedTests.push({
                testcase: 59,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 59,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #60 with expect errors ["workspaceId must be a string","channelId must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":12345,"content":"test123123","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:60,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 60,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 60,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 60,
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
              failedTests.push({
                testcase: 60,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 60,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #61 with expect errors ["workspaceId must be a string","content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:61,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 61,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 61,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 61,
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
              failedTests.push({
                testcase: 61,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 61,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #62 with expect errors ["workspaceId must be a string","content should not be empty","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":"","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:62,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","content should not be empty","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 62,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 62,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 62,
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
              failedTests.push({
                testcase: 62,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 62,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #63 with expect errors ["workspaceId must be a string","content should not be empty","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":"","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:63,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","content should not be empty","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 63,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 63,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 63,
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
              failedTests.push({
                testcase: 63,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 63,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #64 with expect errors ["workspaceId must be a string","content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":"","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:64,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 64,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 64,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 64,
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
              failedTests.push({
                testcase: 64,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 64,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #65 with expect errors ["workspaceId must be a string","content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:65,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 65,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 65,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 65,
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
              failedTests.push({
                testcase: 65,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 65,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #66 with expect errors ["workspaceId must be a string","content must be a string","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":12345,"ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:66,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","content must be a string","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 66,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 66,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 66,
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
              failedTests.push({
                testcase: 66,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 66,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #67 with expect errors ["workspaceId must be a string","content must be a string","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":12345,"ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:67,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","content must be a string","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 67,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 67,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 67,
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
              failedTests.push({
                testcase: 67,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 67,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #68 with expect errors ["workspaceId must be a string","content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":12345,"ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:68,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["workspaceId must be a string","content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 68,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 68,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 68,
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
              failedTests.push({
                testcase: 68,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 68,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #69 with expect errors ["workspaceId must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":"test123123"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:69,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 69,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 69,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 69,
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
              failedTests.push({
                testcase: 69,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 69,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #70 with expect errors ["workspaceId must be a string","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":"test123123","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:70,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 70,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 70,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 70,
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
              failedTests.push({
                testcase: 70,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 70,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #71 with expect errors ["workspaceId must be a string","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":"test123123","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:71,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 71,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 71,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 71,
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
              failedTests.push({
                testcase: 71,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 71,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #72 with expect errors ["workspaceId must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":"test123123","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:72,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 72,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 72,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 72,
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
              failedTests.push({
                testcase: 72,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 72,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #73 with expect errors ["channelId should not be empty","content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"","content":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:73,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["channelId should not be empty","content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 73,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 73,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 73,
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
              failedTests.push({
                testcase: 73,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 73,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #74 with expect errors ["channelId should not be empty","content should not be empty","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"","content":"","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:74,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["channelId should not be empty","content should not be empty","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 74,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 74,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 74,
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
              failedTests.push({
                testcase: 74,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 74,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #75 with expect errors ["channelId should not be empty","content should not be empty","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"","content":"","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:75,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["channelId should not be empty","content should not be empty","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 75,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 75,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 75,
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
              failedTests.push({
                testcase: 75,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 75,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #76 with expect errors ["channelId should not be empty","content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"","content":"","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:76,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["channelId should not be empty","content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 76,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 76,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 76,
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
              failedTests.push({
                testcase: 76,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 76,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #77 with expect errors ["channelId should not be empty","content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"","content":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:77,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["channelId should not be empty","content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 77,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 77,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 77,
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
              failedTests.push({
                testcase: 77,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 77,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #78 with expect errors ["channelId should not be empty","content must be a string","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"","content":12345,"ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:78,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["channelId should not be empty","content must be a string","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 78,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 78,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 78,
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
              failedTests.push({
                testcase: 78,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 78,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #79 with expect errors ["channelId should not be empty","content must be a string","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"","content":12345,"ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:79,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["channelId should not be empty","content must be a string","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 79,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 79,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 79,
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
              failedTests.push({
                testcase: 79,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 79,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #80 with expect errors ["channelId should not be empty","content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"","content":12345,"ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:80,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["channelId should not be empty","content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 80,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 80,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 80,
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
              failedTests.push({
                testcase: 80,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 80,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #81 with expect errors ["channelId should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"","content":"test123123"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:81,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 81,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 81,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 81,
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
              failedTests.push({
                testcase: 81,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 81,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #82 with expect errors ["channelId should not be empty","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"","content":"test123123","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:82,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 82,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 82,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 82,
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
              failedTests.push({
                testcase: 82,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 82,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #83 with expect errors ["channelId should not be empty","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"","content":"test123123","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:83,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 83,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 83,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 83,
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
              failedTests.push({
                testcase: 83,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 83,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #84 with expect errors ["channelId should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"","content":"test123123","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:84,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 84,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 84,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 84,
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
              failedTests.push({
                testcase: 84,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 84,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #85 with expect errors ["channelId must be a string","content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":12345,"content":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:85,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["channelId must be a string","content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 85,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 85,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 85,
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
              failedTests.push({
                testcase: 85,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 85,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #86 with expect errors ["channelId must be a string","content should not be empty","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":12345,"content":"","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:86,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["channelId must be a string","content should not be empty","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 86,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 86,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 86,
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
              failedTests.push({
                testcase: 86,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 86,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #87 with expect errors ["channelId must be a string","content should not be empty","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":12345,"content":"","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:87,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["channelId must be a string","content should not be empty","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 87,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 87,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 87,
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
              failedTests.push({
                testcase: 87,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 87,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #88 with expect errors ["channelId must be a string","content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":12345,"content":"","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:88,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["channelId must be a string","content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 88,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 88,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 88,
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
              failedTests.push({
                testcase: 88,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 88,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #89 with expect errors ["channelId must be a string","content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":12345,"content":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:89,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["channelId must be a string","content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 89,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 89,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 89,
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
              failedTests.push({
                testcase: 89,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 89,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #90 with expect errors ["channelId must be a string","content must be a string","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":12345,"content":12345,"ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:90,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["channelId must be a string","content must be a string","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 90,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 90,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 90,
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
              failedTests.push({
                testcase: 90,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 90,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #91 with expect errors ["channelId must be a string","content must be a string","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":12345,"content":12345,"ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:91,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["channelId must be a string","content must be a string","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 91,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 91,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 91,
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
              failedTests.push({
                testcase: 91,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 91,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #92 with expect errors ["channelId must be a string","content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":12345,"content":12345,"ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:92,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["channelId must be a string","content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 92,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 92,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 92,
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
              failedTests.push({
                testcase: 92,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 92,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #93 with expect errors ["channelId must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":12345,"content":"test123123"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:93,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 93,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 93,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 93,
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
              failedTests.push({
                testcase: 93,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 93,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #94 with expect errors ["channelId must be a string","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":12345,"content":"test123123","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:94,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 94,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 94,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 94,
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
              failedTests.push({
                testcase: 94,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 94,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #95 with expect errors ["channelId must be a string","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":12345,"content":"test123123","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:95,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 95,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 95,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 95,
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
              failedTests.push({
                testcase: 95,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 95,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #96 with expect errors ["channelId must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":12345,"content":"test123123","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:96,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 96,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 96,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 96,
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
              failedTests.push({
                testcase: 96,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 96,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #97 with expect errors ["content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:97,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 97,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 97,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 97,
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
              failedTests.push({
                testcase: 97,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 97,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #98 with expect errors ["content should not be empty","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":"","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:98,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["content should not be empty","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 98,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 98,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 98,
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
              failedTests.push({
                testcase: 98,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 98,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #99 with expect errors ["content should not be empty","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":"","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:99,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["content should not be empty","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 99,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 99,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 99,
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
              failedTests.push({
                testcase: 99,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 99,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #100 with expect errors ["content should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":"","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:100,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["content should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 100,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 100,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 100,
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
              failedTests.push({
                testcase: 100,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 100,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #101 with expect errors ["content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:101,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 101,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 101,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 101,
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
              failedTests.push({
                testcase: 101,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 101,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #102 with expect errors ["content must be a string","ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":12345,"ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:102,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["content must be a string","ref should not be empty"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 102,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 102,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 102,
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
              failedTests.push({
                testcase: 102,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 102,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #103 with expect errors ["content must be a string","ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":12345,"ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:103,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["content must be a string","ref must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 103,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 103,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 103,
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
              failedTests.push({
                testcase: 103,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 103,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #104 with expect errors ["content must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":12345,"ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:104,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["content must be a string"].sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 104,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 104,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 104,
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
              failedTests.push({
                testcase: 104,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 104,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #105 with expect errors [] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":"test123123"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:105,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 105,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 105,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 105,
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
              failedTests.push({
                testcase: 105,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 105,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #106 with expect errors ["ref should not be empty"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":"test123123","ref":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:106,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 106,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 106,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 106,
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
              failedTests.push({
                testcase: 106,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 106,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #107 with expect errors ["ref must be a string"] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":"test123123","ref":12345};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:107,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 107,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 107,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 107,
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
              failedTests.push({
                testcase: 107,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 107,
                  code: 403,
                  errorDetails: 'Could not resolve permission type',
                });
              throw new Error(error.message || 'unknown error');
            }else {
              throw new Error(error.message || 'unknown error');
            }
          }
          });

          it('Test case #108 with expect errors [] ', async () => {
            totalTests++;
            const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":"test123123","ref":"ref"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/Message/SendMessage`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(SendMessageDTOResponse, data);
                const validateLogic = validateSendMessageResponse(dtoInstance, payload)
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedLogic++
                  passedTests++
                  console.log('validate successfully')
                }else {
                  failedTests.push({
                    testcase:108,
                    errorDetails: validateLogic.errors || []
                  })
                  throw new Error('Validate logic failed')
              
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
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: 108,
                  code: 400,
                  missing: missing || [],
                  extra: extra || []
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 108,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else if (response.status === 404){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 108,
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
              failedTests.push({
                testcase: 108,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else if (error.message.includes('Unexpected token')) {
              console.error('Could not resolve permission type', error.message);
                failedTests.push({
                  testcase: 108,
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

          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
          }
          const summary = summarizeErrors(failedTests, totalTests, passedLogic);
          const resultContent = `
=== Test Reports for DTO "send-message" ===
Host: ${globalThis.url}
Endpoint: /Message/SendMessage
Summary: 
Total Tests: ${totalTests}
Passed Tests: ${passedTests}
Failed Tests: ${failedTests.length}
Status Code:
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
${failedTests
  .map(
    (failCase) => `
- Testcase #${failCase.testcase}
  Missing Errors: ${failCase.missing ? JSON.stringify(failCase.missing) : "''"}
  Status Code: ${failCase.code ? JSON.stringify(failCase.code) : "''"}
  Extra Errors: ${failCase.extra ? JSON.stringify(failCase.extra) : "''"}
  Detail Errors: ${failCase.errorDetails ? JSON.stringify(failCase.errorDetails) : "''"}
                  `
                    )
                    .join('')}
                  `;

               const resultFilePath = path.join(folderPath, 'send-message.txt');

                        fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
                        console.log(`Success: ${resultFilePath}`);
                        await executeDelete(["deleteMessageForEveryone('0', {{channelId}}, {{messageId}})"], headerRequest)    
                      });
                          
                    });

                