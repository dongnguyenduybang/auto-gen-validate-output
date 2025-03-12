
    import { validateMarkAllChannelAsRead } from '../validates/mark-all-channel-as-read/validate-mark-all-channel-as-read';
    import fs from 'fs';
    import path from 'path';
    import { summarizeErrors, summaryFields, getTime } from '../helps/utils';
    import { executeBeforeAllSteps, executeDelete } from '../functions';
    import { resolveJsonVariables } from '../helps/get-resolve-variables';
    import { plainToClass } from 'class-transformer';
    import { MarkAllChannelAsReadResponse } from '../response/mark-all-channel-as-read.response';
    import { validateAfterLogic } from '../validates/send-location/validate-send-location-after';

    describe('Testcase for mark-all-channel-as-read', () => {
        let totalTests = 0;
        let passedLogic = 0;
        let failedTests = [];
        let logicTests = [];
        let passedTests = 0
        let passed200 = 0
        let headerRequest
        let testNumber
        let resolvedData

        beforeAll( async () => {

          await executeBeforeAllSteps(["mockUser('duybang12345',1, 0)","createChannel({{token}}, 'channel 1')","sendMessage({{token}}, 0, {{channelId}}, 'test123', 'ref')"])

          headerRequest = {"Content-Type":"application/json","x-session-token":"{{token}}","x-country-code":"VN"}
         
        })
        beforeEach( async () => {

          await executeBeforeAllSteps(undefined)
          
         
        })

        afterEach(async () => {

          const messageId = globalThis.globalVar.get("messageId");
          if (messageId) {
            const result = await executeBeforeAllSteps([
              `getMessage({{token}}, {{channelId}}, ${messageId})`,
            ]);
            const validateAfter = await validateAfterLogic(result, resolvedData)
            if (validateAfter.length === 0) {
              passedLogic++;
            } else {
              logicTests.push({ 
                testcase: testNumber,
                errorLogic: validateAfter
              });
            }
          }
        })

        
           
            it('Test case # 1 with expect errors ["workspaceId should not be empty","channelId should not be empty","messageId should not be empty"] ', async () => {
             testNumber = 1;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","messageId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId should not be empty","messageId should not be empty"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 2 with expect errors ["workspaceId should not be empty","channelId should not be empty","messageId must be a string"] ', async () => {
             testNumber = 2;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","messageId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId should not be empty","messageId must be a string"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 3 with expect errors ["workspaceId should not be empty","channelId should not be empty"] ', async () => {
             testNumber = 3;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","messageId":"{{messageId}}"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 4 with expect errors ["workspaceId should not be empty","channelId must be a string","messageId should not be empty"] ', async () => {
             testNumber = 4;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"messageId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId must be a string","messageId should not be empty"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 5 with expect errors ["workspaceId should not be empty","channelId must be a string","messageId must be a string"] ', async () => {
             testNumber = 5;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"messageId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","channelId must be a string","messageId must be a string"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 6 with expect errors ["workspaceId should not be empty","channelId must be a string"] ', async () => {
             testNumber = 6;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"messageId":"{{messageId}}"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 7 with expect errors ["workspaceId should not be empty","messageId should not be empty"] ', async () => {
             testNumber = 7;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","messageId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","messageId should not be empty"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 8 with expect errors ["workspaceId should not be empty","messageId must be a string"] ', async () => {
             testNumber = 8;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","messageId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["workspaceId should not be empty","messageId must be a string"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 9 with expect errors ["workspaceId should not be empty"] ', async () => {
             testNumber = 9;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","messageId":"{{messageId}}"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 10 with expect errors ["workspaceId must be a string","channelId should not be empty","messageId should not be empty"] ', async () => {
             testNumber = 10;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","messageId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId should not be empty","messageId should not be empty"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 11 with expect errors ["workspaceId must be a string","channelId should not be empty","messageId must be a string"] ', async () => {
             testNumber = 11;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","messageId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId should not be empty","messageId must be a string"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 12 with expect errors ["workspaceId must be a string","channelId should not be empty"] ', async () => {
             testNumber = 12;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","messageId":"{{messageId}}"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 13 with expect errors ["workspaceId must be a string","channelId must be a string","messageId should not be empty"] ', async () => {
             testNumber = 13;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"messageId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId must be a string","messageId should not be empty"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 14 with expect errors ["workspaceId must be a string","channelId must be a string","messageId must be a string"] ', async () => {
             testNumber = 14;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"messageId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","channelId must be a string","messageId must be a string"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 15 with expect errors ["workspaceId must be a string","channelId must be a string"] ', async () => {
             testNumber = 15;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"messageId":"{{messageId}}"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 16 with expect errors ["workspaceId must be a string","messageId should not be empty"] ', async () => {
             testNumber = 16;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","messageId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","messageId should not be empty"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 17 with expect errors ["workspaceId must be a string","messageId must be a string"] ', async () => {
             testNumber = 17;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","messageId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["workspaceId must be a string","messageId must be a string"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 18 with expect errors ["workspaceId must be a string"] ', async () => {
             testNumber = 18;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","messageId":"{{messageId}}"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 19 with expect errors ["channelId should not be empty","messageId should not be empty"] ', async () => {
             testNumber = 19;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","messageId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["channelId should not be empty","messageId should not be empty"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 20 with expect errors ["channelId should not be empty","messageId must be a string"] ', async () => {
             testNumber = 20;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","messageId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["channelId should not be empty","messageId must be a string"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 21 with expect errors ["channelId should not be empty"] ', async () => {
             testNumber = 21;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","messageId":"{{messageId}}"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 22 with expect errors ["channelId must be a string","messageId should not be empty"] ', async () => {
             testNumber = 22;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"messageId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["channelId must be a string","messageId should not be empty"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 23 with expect errors ["channelId must be a string","messageId must be a string"] ', async () => {
             testNumber = 23;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"messageId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["channelId must be a string","messageId must be a string"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 24 with expect errors ["channelId must be a string"] ', async () => {
             testNumber = 24;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"messageId":"{{messageId}}"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 25 with expect errors ["messageId should not be empty"] ', async () => {
             testNumber = 25;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["messageId should not be empty"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 26 with expect errors ["messageId must be a string"] ', async () => {
             testNumber = 26;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
              }else if(response.status === 400){
                const expectJson =  ["messageId must be a string"].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

           
            it('Test case # 27 with expect errors [] ', async () => {
             testNumber = 27;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":"{{messageId}}"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/MarkAllChannelsAsRead`;
            
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
                  const dtoInstance = plainToClass(MarkAllChannelAsReadResponse, data);
                  const validateLogic = await validateMarkAllChannelAsRead(dtoInstance, resolvedData);
                  if (validateLogic.length === 0) {
                    passedLogic++
                    passedTests++
                  } else {
                    logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }
              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                passed200++
              
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
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
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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

        const folderPathLogic = path.join(__dirname, '../reports/mark-all-channel-as-read');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        if (!fs.existsSync(folderPathLogic)) {
          fs.mkdirSync(folderPathLogic, { recursive: true });
        }
        const summary = summarizeErrors(failedTests, totalTests, passedLogic, passed200);
        const resultContent = `
=== Test Reports for DTO "mark-all-channel-as-read" ===
Host: ${globalThis.url}
Endpoint: /Message/MarkAllChannelsAsRead
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
    === Test Reports Logic for DTO "mark-all-channel-as-read" ===
    Host: ${globalThis.url}
    Endpoint: /Message/MarkAllChannelsAsRead
    Error: 
    ${logicTests.map((logicCaseFail) => `
    - Testcase #${logicCaseFail.testcase}
      Logic Errors: ${logicCaseFail.errorLogic ? JSON.stringify(logicCaseFail.errorLogic) : "''"}
  ` ).join('')}`


const resultFilePath = path.join(folderPath, 'mark-all-channel-as-read.txt');
const resultFilePathLogic = path.join(folderPathLogic, `mark-all-channel-as-read.${getTime()}.txt`);
fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
fs.writeFileSync(resultFilePathLogic, resultLogicError, 'utf-8');
console.log(`Success: ${resultFilePath}`);
await executeDelete(undefined, headerRequest)    
});
                          
                    });

                