
    import { validateSendMessage } from '../validates/send-message/validate-send-message';
    import fs from 'fs';
    import path from 'path';
    import { summarizeErrors, summaryFields, getTime } from '../helps/utils';
    import { executeBeforeAllSteps, executeDelete } from '../functions';
    import { resolveJsonVariables,resolveVariables } from '../helps/get-resolve-variables';
    import { plainToClass } from 'class-transformer';
    import { SendMessageResponse } from '../response/send-message.response';


    describe('Testcase for send-message', () => {
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
        let messageIdArray;

        beforeAll( async () => {

          await executeBeforeAllSteps(["mockUser('duybang12345',1, 0)","createChannel({{token}}, 'channel 1')"])

          headerRequest = {"Content-Type":"application/json","x-session-token":"{{token}}","x-country-code":"VN"}
         
        })
        afterEach(async () => {

        if(nextStep === true){
         
          }
         
        })

            it('Test case # 1 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 1;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 2 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 2;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","content":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 3 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 3;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","content":"test123123"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 4 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 4;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 5 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 5;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 6 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 6;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 7 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 7;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"content":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 8 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 8;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"content":"test123123"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 9 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 9;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 10 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 10;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 11 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 11;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 12 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 12;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 13 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 13;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":"test123123"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 14 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 14;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 15 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 15;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 16 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 16;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 17 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 17;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","content":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 18 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 18;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","content":"test123123"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 19 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 19;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 20 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 20;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 21 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 21;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 22 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 22;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"content":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 23 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 23;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"content":"test123123"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 24 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 24;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 25 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 25;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 26 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 26;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 27 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 27;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 28 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 28;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":"test123123"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 29 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 29;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 30 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 30;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 31 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 31;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 32 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 32;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","content":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 33 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 33;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","content":"test123123"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 34 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 34;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 35 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 35;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 36 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 36;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 37 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 37;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"content":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 38 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 38;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"content":"test123123"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 39 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 39;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 40 with expect errors ["Could not resolve permission type"]', async () => {
             testNumber = 40;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 41 with expect errors ["content should not be empty","content byte length must fall into (1, 6000) range"]', async () => {
             testNumber = 41;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 42 with expect errors ["content must be a string"]', async () => {
             testNumber = 42;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":12345};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 43 with expect errors []', async () => {
             testNumber = 43;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":"test123123"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 44 with expect errors ["content should not be empty","content byte length must fall into (1, 6000) range"]', async () => {
             testNumber = 44;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":""};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

           
            it('Test case # 45 with expect errors ["content byte length must fall into (1, 6000) range"]', async () => {
             testNumber = 45;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateLogic = await validateSendMessage(dtoInstance, resolvedData);
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
              }
            }catch (error){
              console.log(error.message)
            }
            });

      afterAll(async () => {
        const folderPath = path.join(__dirname, '../reports');

        const folderPathLogic = path.join(__dirname, '../reports/send-message');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        if (!fs.existsSync(folderPathLogic)) {
          fs.mkdirSync(folderPathLogic, { recursive: true });
        }
        const summary = summarizeErrors(failedTests, totalTests, passedLogic, passed200);
        const resultContent = `
=== Test Reports for DTO "send-message" ===
Host: ${globalThis.url}
Endpoint: /Message/SendMessage
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
    === Test Reports Logic for DTO "send-message" ===
    Host: ${globalThis.url}
    Endpoint: /Message/SendMessage
    Error: 
    ${logicTests.map((logicCaseFail) => `
    - Testcase #${logicCaseFail.testcase}
      Logic Errors: ${logicCaseFail.errorLogic ? JSON.stringify(logicCaseFail.errorLogic) : "''"}
  ` ).join('')}`


const resultFilePath = path.join(folderPath, 'send-message.txt');
const resultFilePathLogic = path.join(folderPathLogic, `send-message.${getTime()}.txt`);
fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
fs.writeFileSync(resultFilePathLogic, resultLogicError, 'utf-8');
console.log(`Success: ${resultFilePath}`);
await executeDelete(["deleteMessageForEveryone('0', {{channelId}}, {{messageId}})"], headerRequest)    
});
                          
                    });

                