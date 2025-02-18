
    import axios from 'axios';
    import { plainToInstance } from 'class-transformer';
    import { MockChannelDTOResponse } from '../../dto_response/MockChannelDTO.response.dto';
    import { validate } from 'class-validator';
    import { validationRulesMockChannel } from '../../validates/mock-channel/validate-mock-channel';
    import { validateLogicData } from '../../validates/validate-logic';

    describe('Testcase for MockChannelDTO', () => {
        
          it('Test case #1 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #2 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"typeChannel":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"typeChannel":null}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #3 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"typeChannel":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"typeChannel":""}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #4 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"typeChannel":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"typeChannel":"random_string"}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #5 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000"] ', async () => {
            const payload = {"typeChannel":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"typeChannel":0}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #6 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"typeChannel":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"typeChannel":-1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #7 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"typeChannel":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"typeChannel":4}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #8 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":null}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #9 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":null,"typeChannel":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":null,"typeChannel":null}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #10 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":null,"typeChannel":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":null,"typeChannel":""}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #11 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":null,"typeChannel":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":null,"typeChannel":"random_string"}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #12 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000"] ', async () => {
            const payload = {"totalMessages":null,"typeChannel":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":null,"typeChannel":0}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #13 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":null,"typeChannel":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":null,"typeChannel":-1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #14 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":null,"typeChannel":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":null,"typeChannel":4}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #15 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":""}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #16 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":"","typeChannel":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":"","typeChannel":null}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #17 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":"","typeChannel":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":"","typeChannel":""}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #18 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":"","typeChannel":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":"","typeChannel":"random_string"}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #19 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000"] ', async () => {
            const payload = {"totalMessages":"","typeChannel":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":"","typeChannel":0}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #20 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":"","typeChannel":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":"","typeChannel":-1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #21 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":"","typeChannel":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":"","typeChannel":4}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #22 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":"random_string"}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #23 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":"random_string","typeChannel":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":"random_string","typeChannel":null}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #24 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":"random_string","typeChannel":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":"random_string","typeChannel":""}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #25 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":"random_string","typeChannel":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":"random_string","typeChannel":"random_string"}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #26 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints"] ', async () => {
            const payload = {"totalMessages":"random_string","typeChannel":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":"random_string","typeChannel":0}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #27 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":"random_string","typeChannel":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":"random_string","typeChannel":-1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #28 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":"random_string","typeChannel":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":"random_string","typeChannel":4}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #29 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #30 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":1,"typeChannel":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":1,"typeChannel":null}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #31 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":1,"typeChannel":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":1,"typeChannel":""}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #32 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":1,"typeChannel":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":1,"typeChannel":"random_string"}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #33 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"totalMessages":1,"typeChannel":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":1,"typeChannel":0}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #34 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":1,"typeChannel":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":1,"typeChannel":-1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #35 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":1,"typeChannel":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":1,"typeChannel":4}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #36 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":-1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #37 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":-1,"typeChannel":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":-1,"typeChannel":null}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #38 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":-1,"typeChannel":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":-1,"typeChannel":""}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #39 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":-1,"typeChannel":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":-1,"typeChannel":"random_string"}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #40 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0"] ', async () => {
            const payload = {"totalMessages":-1,"typeChannel":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":-1,"typeChannel":0}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #41 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":-1,"typeChannel":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":-1,"typeChannel":-1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #42 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":-1,"typeChannel":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":-1,"typeChannel":4}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #43 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":1001};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":1001}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #44 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":1001,"typeChannel":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":1001,"typeChannel":null}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #45 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":1001,"typeChannel":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":1001,"typeChannel":""}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #46 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":1001,"typeChannel":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":1001,"typeChannel":"random_string"}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #47 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be greater than 1000"] ', async () => {
            const payload = {"totalMessages":1001,"typeChannel":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":1001,"typeChannel":0}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be greater than 1000"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #48 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":1001,"typeChannel":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":1001,"typeChannel":-1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #49 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"totalMessages":1001,"typeChannel":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"totalMessages":1001,"typeChannel":4}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #50 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #51 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"typeChannel":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"typeChannel":null}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #52 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"typeChannel":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"typeChannel":""}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #53 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"typeChannel":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"typeChannel":"random_string"}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #54 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000"] ', async () => {
            const payload = {"quantity":null,"typeChannel":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"typeChannel":0}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #55 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"typeChannel":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"typeChannel":-1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #56 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"typeChannel":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"typeChannel":4}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #57 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":null}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #58 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":null,"typeChannel":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":null,"typeChannel":null}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #59 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":null,"typeChannel":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":null,"typeChannel":""}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #60 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":null,"typeChannel":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":null,"typeChannel":"random_string"}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #61 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000"] ', async () => {
            const payload = {"quantity":null,"totalMessages":null,"typeChannel":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":null,"typeChannel":0}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #62 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":null,"typeChannel":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":null,"typeChannel":-1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #63 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":null,"typeChannel":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":null,"typeChannel":4}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #64 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":""}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #65 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":"","typeChannel":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":"","typeChannel":null}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #66 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":"","typeChannel":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":"","typeChannel":""}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #67 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":"","typeChannel":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":"","typeChannel":"random_string"}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #68 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000"] ', async () => {
            const payload = {"quantity":null,"totalMessages":"","typeChannel":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":"","typeChannel":0}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #69 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":"","typeChannel":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":"","typeChannel":-1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #70 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":"","typeChannel":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":"","typeChannel":4}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","totalMessages should not be empty","totalMessages must not be less than 0","totalMessages must not be greater than 1000","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #71 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":"random_string"}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #72 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":"random_string","typeChannel":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":"random_string","typeChannel":null}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #73 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":"random_string","typeChannel":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":"random_string","typeChannel":""}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #74 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":"random_string","typeChannel":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":"random_string","typeChannel":"random_string"}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #75 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints"] ', async () => {
            const payload = {"quantity":null,"totalMessages":"random_string","typeChannel":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":"random_string","typeChannel":0}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #76 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":"random_string","typeChannel":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":"random_string","typeChannel":-1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #77 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":"random_string","typeChannel":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":"random_string","typeChannel":4}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #78 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #79 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":1,"typeChannel":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":1,"typeChannel":null}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #80 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":1,"typeChannel":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":1,"typeChannel":""}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #81 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":1,"typeChannel":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":1,"typeChannel":"random_string"}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #82 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"quantity":null,"totalMessages":1,"typeChannel":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":1,"typeChannel":0}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #83 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":1,"typeChannel":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":1,"typeChannel":-1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #84 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":1,"typeChannel":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":1,"typeChannel":4}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #85 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":-1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #86 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":-1,"typeChannel":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":-1,"typeChannel":null}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #87 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":-1,"typeChannel":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":-1,"typeChannel":""}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be a number conforming to the specified constraints","typeChannel should not be empty","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #88 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":-1,"typeChannel":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":-1,"typeChannel":"random_string"}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be a number conforming to the specified constraints","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #89 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0"] ', async () => {
            const payload = {"quantity":null,"totalMessages":-1,"typeChannel":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":-1,"typeChannel":0}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #90 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"totalMessages":-1,"typeChannel":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockChannels',
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"totalMessages":-1,"typeChannel":-1}
              });
              const dataResponse = plainToInstance(MockChannelDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockChannel, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","totalMessages must not be less than 0","typeChannel must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

      });
  