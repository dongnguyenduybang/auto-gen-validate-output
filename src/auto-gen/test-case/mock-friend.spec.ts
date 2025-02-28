
    import { validateMockFriendResponse } from '../validates/mock-friend/validate-mock-friend';
    import fs from 'fs';
    import path from 'path';
    import { summarizeErrors, summaryFields } from '../helps/utils';
    import { executeBeforeAllSteps, executeDelete } from '../functions';
    import { resolveJsonVariables } from '../helps/get-resolve-variables';
    import { plainToClass } from 'class-transformer';
    import { MockFriendDTOResponse } from '../dto-response/mock-friend.response.dto';

    describe('Testcase for mock-friend', () => {
        let totalTests = 0;
        let passedLogic = 0;
        let failedTests = [];
        let passedTests = 0
        let headerRequest

        beforeAll( async () => {

          await executeBeforeAllSteps(["mockUser('duy_test',1, 0)"])

          headerRequest = {"Content-Type":"application/json","x-user-id":"{{userId}}","x-country-code":"VN"}
         
        })

        
          it('Test case #1 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #2 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"type":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #3 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"type":"random_string"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #4 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200"] ', async () => {
            totalTests++;
            const payloadObj = {"type":1};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200"].sort()
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

          it('Test case #5 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must not be less than 0"] ', async () => {
            totalTests++;
            const payloadObj = {"type":-1};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must not be less than 0"].sort()
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

          it('Test case #6 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"type":3};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must not be greater than 2"].sort()
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

          it('Test case #7 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #8 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":"","type":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #9 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":"","type":"random_string"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #10 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":"","type":1};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200"].sort()
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

          it('Test case #11 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must not be less than 0"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":"","type":-1};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must not be less than 0"].sort()
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

          it('Test case #12 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":"","type":3};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must not be greater than 2"].sort()
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

          it('Test case #13 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":"random_string"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #14 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":"random_string","type":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #15 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":"random_string","type":"random_string"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #16 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":"random_string","type":1};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200"].sort()
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

          it('Test case #17 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must not be less than 0"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":"random_string","type":-1};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must not be less than 0"].sort()
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

          it('Test case #18 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":"random_string","type":3};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must not be greater than 2"].sort()
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

          it('Test case #19 with expect errors ["\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":1};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #20 with expect errors ["\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":1,"type":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #21 with expect errors ["type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":1,"type":"random_string"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #22 with expect errors [] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":1,"type":1};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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

          it('Test case #23 with expect errors ["type must not be less than 0"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":1,"type":-1};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["type must not be less than 0"].sort()
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

          it('Test case #24 with expect errors ["type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":1,"type":3};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["type must not be greater than 2"].sort()
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

          it('Test case #25 with expect errors ["quantity must not be less than 1","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":0};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must not be less than 1","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #26 with expect errors ["quantity must not be less than 1","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":0,"type":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must not be less than 1","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #27 with expect errors ["quantity must not be less than 1","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":0,"type":"random_string"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must not be less than 1","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #28 with expect errors ["quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":0,"type":1};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must not be less than 1"].sort()
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

          it('Test case #29 with expect errors ["quantity must not be less than 1","type must not be less than 0"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":0,"type":-1};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must not be less than 1","type must not be less than 0"].sort()
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

          it('Test case #30 with expect errors ["quantity must not be less than 1","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":0,"type":3};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must not be less than 1","type must not be greater than 2"].sort()
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

          it('Test case #31 with expect errors ["quantity must not be greater than 200","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":201};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must not be greater than 200","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #32 with expect errors ["quantity must not be greater than 200","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":201,"type":""};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must not be greater than 200","\n   0: Fake friend request\n   1: Fake friend require\n   2: Fake friend","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #33 with expect errors ["quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":201,"type":"random_string"};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must not be less than 0","type must not be greater than 2"].sort()
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

          it('Test case #34 with expect errors ["quantity must not be greater than 200"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":201,"type":1};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must not be greater than 200"].sort()
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

          it('Test case #35 with expect errors ["quantity must not be greater than 200","type must not be less than 0"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":201,"type":-1};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must not be greater than 200","type must not be less than 0"].sort()
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

          it('Test case #36 with expect errors ["quantity must not be greater than 200","type must not be greater than 2"] ', async () => {
            totalTests++;
            const payloadObj = {"quantity":201,"type":3};
            const payload = resolveJsonVariables(payloadObj)
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockFriends`, 
            {
              method: 'post',
              headers:  resolveJsonVariables(headerRequest),
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                const dtoInstance = plainToClass(MockFriendDTOResponse, data);
                const validateLogic = validateMockFriendResponse(dtoInstance, payload)
                
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
              const expectJson =  ["quantity must not be greater than 200","type must not be greater than 2"].sort()
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

      afterAll(async () => {
          const folderPath = path.join(__dirname, '../reports');

          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
          }
          const summary = summarizeErrors(failedTests, totalTests, passedLogic);
          const resultContent = `
=== Test Reports for DTO "mock-friend" ===
Host: ${globalThis.url}
Endpoint: /InternalFaker/MockFriends
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

               const resultFilePath = path.join(folderPath, 'mock-friend.txt');

                        fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
                        console.log(`Success: ${resultFilePath}`);
                        await executeDelete(undefined, headerRequest)    
                      });
                          
                    });

                