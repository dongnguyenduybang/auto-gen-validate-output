
    import axios from 'axios';
    import { plainToInstance } from 'class-transformer';
    import { MockUserDTOResponse } from '../dto-response/mock-user.response.dto';
    import { validate } from 'class-validator';
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
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 1,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #2 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 2,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #3 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 3,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #4 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 4,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #5 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 5,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #6 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"","badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 6,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #7 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"","badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 7,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #8 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"quantity":"","badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 8,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #9 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 9,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #10 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string","badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 10,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #11 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string","badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 11,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #12 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string","badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 12,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #13 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":1};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 13,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #14 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":1,"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 14,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #15 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":1,"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 15,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #16 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters"] ', async () => {
            totalTests++;
            const payload = {"quantity":1,"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 16,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #17 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 17,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #18 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":0,"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 18,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #19 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":0,"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 19,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #20 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"quantity":0,"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 20,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #21 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":101};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 21,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #22 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":101,"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 22,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #23 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":101,"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 23,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #24 with expect errors ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"quantity":101,"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix should not be null or undefined","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 24,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #25 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 25,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #26 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 26,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #27 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 27,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #28 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 28,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #29 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 29,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #30 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"","badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 30,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #31 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"","badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 31,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #32 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"","badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 32,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #33 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"random_string"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 33,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #34 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"random_string","badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 34,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #35 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"random_string","badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 35,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #36 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"random_string","badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 36,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #37 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":1};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 37,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #38 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":1,"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 38,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #39 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":1,"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 39,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #40 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":1,"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 40,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #41 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 41,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #42 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":0,"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 42,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #43 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":0,"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 43,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #44 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":0,"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 44,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #45 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":101};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 45,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #46 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":101,"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 46,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #47 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":101,"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 47,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #48 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":101,"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 48,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #49 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 49,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #50 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 50,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #51 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 51,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #52 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 52,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #53 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 53,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #54 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"","badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 54,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #55 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"","badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 55,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #56 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"","badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 56,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #57 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"random_string"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 57,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #58 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"random_string","badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 58,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #59 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"random_string","badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 59,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #60 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"random_string","badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 60,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #61 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":1};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 61,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #62 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":1,"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 62,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #63 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":1,"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 63,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #64 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":1,"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 64,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #65 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 65,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #66 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":0,"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 66,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #67 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":0,"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 67,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #68 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":0,"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 68,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #69 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":101};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 69,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #70 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":101,"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 70,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #71 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":101,"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 71,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #72 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":101,"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 72,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #73 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 73,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #74 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 74,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #75 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 75,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #76 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 76,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #77 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 77,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #78 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"","badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 78,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #79 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"","badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 79,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #80 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"","badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 80,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #81 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"random_string"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 81,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #82 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"random_string","badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 82,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #83 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"random_string","badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 83,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #84 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"random_string","badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 84,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #85 with expect errors ["badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":1};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 85,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #86 with expect errors ["badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":1,"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 86,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #87 with expect errors ["badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":1,"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 87,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #88 with expect errors [] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":1,"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = [].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 88,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #89 with expect errors ["quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 89,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #90 with expect errors ["quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":0,"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 90,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #91 with expect errors ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":0,"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 91,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #92 with expect errors ["quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":0,"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity must not be less than 1"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 92,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #93 with expect errors ["quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":101};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 93,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #94 with expect errors ["quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":101,"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 94,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #95 with expect errors ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":101,"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 95,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #96 with expect errors ["quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":101,"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 96,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #97 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 97,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #98 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 98,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #99 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 99,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #100 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 100,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #101 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 101,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #102 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"","badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 102,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #103 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"","badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 103,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #104 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"","badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 104,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #105 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"random_string"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 105,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #106 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"random_string","badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 106,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #107 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"random_string","badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 107,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #108 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"random_string","badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 108,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #109 with expect errors ["prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":1};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 109,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #110 with expect errors ["prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":1,"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 110,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #111 with expect errors ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":1,"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 111,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #112 with expect errors ["prefix must be longer than or equal to 5 characters"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":1,"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 112,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #113 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 113,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #114 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":0,"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 114,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #115 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":0,"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 115,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #116 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":0,"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 116,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #117 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":101};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 117,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #118 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":101,"badge":""};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 118,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #119 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":101,"badge":"invalid_value"};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 119,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

          it('Test case #120 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":101,"badge":0};
           
            const response = await fetch(`${globalThis.url}/InternalFaker/MockUsers`, 
            {
              method: 'post',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"].sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: 120,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
            }

          });

      afterAll(() => {
          const folderPath = path.join(__dirname, '../reports');

          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
          }

          const resultContent = `
              === Test Reports for DTO "mock-user" ===
              Host: ${globalThis.url}              Endpoint: /InternalFaker/MockUsers
              Total Tests: ${totalTests}
              Passed Tests: ${passedTests}
              Failed Tests: ${failedTests.length}

              Failed Test Details:
             ${failedTests
                .map(
                  (failCase) => `
              - Testcase #${failCase.testcase}
                Missing Errors: ${JSON.stringify(failCase.missing)}
                Extra Errors: ${JSON.stringify(failCase.extra)}
              `
                )
                .join('')}
              `;

               const resultFilePath = path.join(folderPath, 'mock-user.txt');

                        fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
                        console.log(`Success: ${resultFilePath}`);
                      });
                    });
                