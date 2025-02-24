
    import { validationRulesMockUser } from '../validates/mock-user/validate-mock-user';
    import { validateLogicData } from '../validates/validate-logic';
    import fs from 'fs';
    import path from 'path';
    import { summaryFields } from '../helps/ultil';

    describe('Testcase for mock-user', () => {
        let totalTests = 0;
        let passedTests = 0;
        let failedTests = [];

        
          it('Test case #1 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:1,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #2 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:2,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #3 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:3,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #4 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:4,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #5 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:5,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #6 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"","badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:6,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #7 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"","badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:7,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #8 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"quantity":"","badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:8,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #9 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:9,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #10 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string","badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:10,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #11 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string","badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUserssssssssssss`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:11,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #12 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string","badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:12,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #13 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":1};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:13,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #14 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":1,"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:14,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #15 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":1,"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:15,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #16 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters"] ', async () => {
            totalTests++;
            const payload = {"quantity":1,"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:16,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #17 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:17,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #18 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":0,"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:18,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #19 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":0,"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:19,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #20 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"quantity":0,"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:20,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #21 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":101};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:21,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #22 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":101,"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:22,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #23 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":101,"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:23,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #24 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"quantity":101,"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:24,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #25 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:25,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #26 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:26,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #27 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:27,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #28 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:28,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #29 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:29,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #30 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"","badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:30,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #31 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"","badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:31,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #32 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"","badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:32,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #33 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"random_string"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:33,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #34 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"random_string","badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:34,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #35 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"random_string","badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:35,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #36 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"random_string","badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:36,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #37 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":1};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:37,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #38 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":1,"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:38,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #39 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":1,"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:39,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #40 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":1,"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:40,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #41 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:41,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #42 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":0,"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:42,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #43 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":0,"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:43,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #44 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":0,"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:44,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #45 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":101};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:45,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #46 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":101,"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:46,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #47 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":101,"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:47,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #48 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":101,"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:48,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #49 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:49,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #50 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:50,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #51 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:51,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #52 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:52,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #53 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:53,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #54 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"","badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:54,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #55 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"","badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:55,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #56 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"","badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:56,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #57 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"random_string"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:57,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #58 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"random_string","badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:58,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #59 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"random_string","badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:59,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #60 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"random_string","badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:60,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #61 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":1};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:61,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #62 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":1,"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:62,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #63 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":1,"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:63,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #64 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":1,"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:64,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #65 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:65,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #66 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":0,"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:66,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #67 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":0,"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:67,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #68 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":0,"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:68,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #69 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":101};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:69,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #70 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":101,"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:70,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #71 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":101,"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:71,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #72 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":101,"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:72,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #73 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:73,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #74 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:74,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #75 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:75,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #76 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:76,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #77 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:77,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #78 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"","badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:78,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #79 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"","badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:79,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #80 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"","badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:80,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #81 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"random_string"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:81,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #82 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"random_string","badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:82,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #83 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"random_string","badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:83,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #84 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"random_string","badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:84,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #85 with expect errors ["badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":1};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:85,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #86 with expect errors ["badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":1,"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:86,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #87 with expect errors ["badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":1,"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:87,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #88 with expect errors [] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":1,"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:88,
                    errorDetails: validateLogic.errors
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
                  testcase: 88,
                  code: 400,
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #89 with expect errors ["quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:89,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #90 with expect errors ["quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":0,"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:90,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #91 with expect errors ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":0,"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:91,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #92 with expect errors ["quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":0,"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:92,
                    errorDetails: validateLogic.errors
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
                  testcase: 92,
                  code: 400,
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #93 with expect errors ["quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":101};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:93,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #94 with expect errors ["quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":101,"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:94,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #95 with expect errors ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":101,"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:95,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #96 with expect errors ["quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":101,"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:96,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #97 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:97,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #98 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:98,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #99 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:99,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #100 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:100,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #101 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:101,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #102 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"","badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:102,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #103 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"","badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:103,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #104 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"","badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:104,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #105 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"random_string"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:105,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #106 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"random_string","badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:106,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #107 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"random_string","badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:107,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #108 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"random_string","badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:108,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
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
                  missing: missing,
                  extra: extra
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
            }else {
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
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #109 with expect errors ["prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":1};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:109,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  testcase: 109,
                  code: 400,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 109,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else {
              console.log('unexpected:', data);
              throw new Error(data);
            }
          }catch (error){

            if (error.message.includes('fetch failed')) {
             console.error('Network or server error:', error.message);
              failedTests.push({
                testcase: 109,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #110 with expect errors ["prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":1,"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:110,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  testcase: 110,
                  code: 400,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 110,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else {
              console.log('unexpected:', data);
              throw new Error(data);
            }
          }catch (error){

            if (error.message.includes('fetch failed')) {
             console.error('Network or server error:', error.message);
              failedTests.push({
                testcase: 110,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #111 with expect errors ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":1,"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:111,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  testcase: 111,
                  code: 400,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 111,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else {
              console.log('unexpected:', data);
              throw new Error(data);
            }
          }catch (error){

            if (error.message.includes('fetch failed')) {
             console.error('Network or server error:', error.message);
              failedTests.push({
                testcase: 111,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #112 with expect errors ["prefix must be longer than or equal to 5 characters"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":1,"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:112,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters"].sort()
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
                  testcase: 112,
                  code: 400,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 112,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else {
              console.log('unexpected:', data);
              throw new Error(data);
            }
          }catch (error){

            if (error.message.includes('fetch failed')) {
             console.error('Network or server error:', error.message);
              failedTests.push({
                testcase: 112,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #113 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:113,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  testcase: 113,
                  code: 400,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 113,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else {
              console.log('unexpected:', data);
              throw new Error(data);
            }
          }catch (error){

            if (error.message.includes('fetch failed')) {
             console.error('Network or server error:', error.message);
              failedTests.push({
                testcase: 113,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #114 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":0,"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:114,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  testcase: 114,
                  code: 400,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 114,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else {
              console.log('unexpected:', data);
              throw new Error(data);
            }
          }catch (error){

            if (error.message.includes('fetch failed')) {
             console.error('Network or server error:', error.message);
              failedTests.push({
                testcase: 114,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #115 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":0,"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:115,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  testcase: 115,
                  code: 400,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 115,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else {
              console.log('unexpected:', data);
              throw new Error(data);
            }
          }catch (error){

            if (error.message.includes('fetch failed')) {
             console.error('Network or server error:', error.message);
              failedTests.push({
                testcase: 115,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #116 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":0,"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:116,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1"].sort()
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
                  testcase: 116,
                  code: 400,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 116,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else {
              console.log('unexpected:', data);
              throw new Error(data);
            }
          }catch (error){

            if (error.message.includes('fetch failed')) {
             console.error('Network or server error:', error.message);
              failedTests.push({
                testcase: 116,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #117 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":101};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:117,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  testcase: 117,
                  code: 400,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 117,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else {
              console.log('unexpected:', data);
              throw new Error(data);
            }
          }catch (error){

            if (error.message.includes('fetch failed')) {
             console.error('Network or server error:', error.message);
              failedTests.push({
                testcase: 117,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #118 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":101,"badge":""};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:118,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  testcase: 118,
                  code: 400,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 118,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else {
              console.log('unexpected:', data);
              throw new Error(data);
            }
          }catch (error){

            if (error.message.includes('fetch failed')) {
             console.error('Network or server error:', error.message);
              failedTests.push({
                testcase: 118,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #119 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":101,"badge":"invalid_value"};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:119,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
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
                  testcase: 119,
                  code: 400,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 119,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else {
              console.log('unexpected:', data);
              throw new Error(data);
            }
          }catch (error){

            if (error.message.includes('fetch failed')) {
             console.error('Network or server error:', error.message);
              failedTests.push({
                testcase: 119,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else {
             
            throw new Error(error.message);
            }
          }
          });

          it('Test case #120 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":101,"badge":0};
           try {
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRulesMockUser,payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:120,
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"].sort()
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
                  testcase: 120,
                  code: 400,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: 120,
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else {
              console.log('unexpected:', data);
              throw new Error(data);
            }
          }catch (error){

            if (error.message.includes('fetch failed')) {
             console.error('Network or server error:', error.message);
              failedTests.push({
                testcase: 120,
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else {
             
            throw new Error(error.message);
            }
          }
          });

      afterAll(() => {
          const folderPath = path.join(__dirname, '../reports');

          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
          }
          const resultContent = `
                  === Test Reports for DTO "mock-user" ===
                  Host: ${globalThis.url}
                  Endpoint: /InternalFaker/MockUsers
                  Total Tests: ${totalTests}
                  Passed Tests: ${passedTests}
                  Failed Tests: ${failedTests.length}
                  Failed Test Details:
                  ${failedTests
                    .map(
                      (failCase) => `
                  - Testcase #${failCase.testcase}
                    Missing Errors: ${failCase.missing ? JSON.stringify(failCase.missing) : "''"}
                    Code Errors: ${failCase.code ? JSON.stringify(failCase.code) : "''"}
                    Extra Errors: ${failCase.extra ? JSON.stringify(failCase.extra) : "''"}
                    Detail Errors: ${failCase.errorDetails ? JSON.stringify(failCase.errorDetails) : "''"}
                  `
                    )
                    .join('')}
                  `;

               const resultFilePath = path.join(folderPath, 'mock-user.txt');

                        fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
                        console.log(`Success: ${resultFilePath}`);
                      });
                    });
                