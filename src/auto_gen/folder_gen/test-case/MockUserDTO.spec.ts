
    import axios from 'axios';
    import { plainToInstance } from 'class-transformer';
    import { MockUserDTOResponse } from '../../dto_response/MockUserDTO.response.dto';
    import { validate } from 'class-validator';
    import { validationRulesMockUser } from '../../validates/mock-user/validate-mock-user';
    import { validateLogicData } from '../../validates/validate-logic';

    describe('Testcase for MockUserDTO', () => {
        
          it('Test case #1 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #2 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #3 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #4 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #5 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #6 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #7 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #8 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #9 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #10 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #11 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #12 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"quantity":null,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #13 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #14 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":null,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #15 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #16 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":"","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #17 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":"","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #18 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":"","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #19 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"quantity":"","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #20 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":"","badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #21 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":"","badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #22 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #23 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":"random_string","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #24 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":"random_string","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #25 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":"random_string","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #26 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints"] ', async () => {
            const payload = {"quantity":"random_string","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #27 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":"random_string","badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #28 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":"random_string","badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #29 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #30 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":1,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #31 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":1,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #32 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":1,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #33 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters"] ', async () => {
            const payload = {"quantity":1,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #34 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":1,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #35 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":1,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #36 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #37 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":0,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":0,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #38 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":0,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":0,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #39 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":0,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":0,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #40 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"] ', async () => {
            const payload = {"quantity":0,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":0,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #41 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":0,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":0,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #42 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":0,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":0,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #43 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":101};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":101}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #44 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":101,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":101,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #45 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":101,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":101,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #46 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":101,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":101,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #47 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"] ', async () => {
            const payload = {"quantity":101,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":101,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #48 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":101,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":101,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #49 with expect errors ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"quantity":101,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":101,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #50 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #51 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #52 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #53 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #54 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":null,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #55 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #56 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #57 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #58 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":null,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #59 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":null,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #60 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":null,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #61 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":null,"quantity":null,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #62 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":null,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #63 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":null,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #64 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #65 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":"","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #66 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":"","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #67 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":"","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #68 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":null,"quantity":"","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #69 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":"","badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #70 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":"","badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #71 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #72 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":"random_string","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #73 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":"random_string","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #74 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":"random_string","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #75 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints"] ', async () => {
            const payload = {"prefix":null,"quantity":"random_string","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #76 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":"random_string","badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #77 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":"random_string","badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #78 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #79 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":1,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #80 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":1,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #81 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":1,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #82 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters"] ', async () => {
            const payload = {"prefix":null,"quantity":1,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #83 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":1,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #84 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":1,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #85 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #86 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":0,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":0,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #87 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":0,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":0,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #88 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":0,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":0,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #89 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"] ', async () => {
            const payload = {"prefix":null,"quantity":0,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":0,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #90 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":0,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":0,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #91 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":0,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":0,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #92 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":101};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":101}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #93 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":101,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":101,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #94 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":101,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":101,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #95 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":101,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":101,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #96 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":null,"quantity":101,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":101,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #97 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":101,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":101,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #98 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":null,"quantity":101,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":101,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #99 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #100 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #101 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #102 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #103 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":"","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #104 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #105 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #106 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #107 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":null,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #108 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":null,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #109 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":null,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #110 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":"","quantity":null,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #111 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":null,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #112 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":null,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #113 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #114 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":"","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #115 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":"","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #116 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":"","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #117 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":"","quantity":"","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #118 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":"","badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #119 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":"","badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #120 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #121 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":"random_string","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #122 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":"random_string","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #123 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":"random_string","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #124 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints"] ', async () => {
            const payload = {"prefix":"","quantity":"random_string","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #125 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":"random_string","badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #126 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":"random_string","badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #127 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #128 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":1,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #129 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":1,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #130 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":1,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #131 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters"] ', async () => {
            const payload = {"prefix":"","quantity":1,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #132 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":1,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #133 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":1,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #134 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #135 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":0,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":0,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #136 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":0,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":0,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #137 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":0,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":0,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #138 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"] ', async () => {
            const payload = {"prefix":"","quantity":0,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":0,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #139 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":0,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":0,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #140 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":0,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":0,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #141 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":101};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":101}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #142 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":101,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":101,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #143 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":101,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":101,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #144 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":101,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":101,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #145 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":"","quantity":101,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":101,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #146 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":101,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":101,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #147 with expect errors ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"","quantity":101,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":101,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix should not be empty","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #148 with expect errors ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #149 with expect errors ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #150 with expect errors ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #151 with expect errors ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #152 with expect errors ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":12345,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #153 with expect errors ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #154 with expect errors ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #155 with expect errors ["prefix must be a string","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #156 with expect errors ["prefix must be a string","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":null,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":null,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #157 with expect errors ["prefix must be a string","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":null,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":null,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #158 with expect errors ["prefix must be a string","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":null,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":null,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #159 with expect errors ["prefix must be a string","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":12345,"quantity":null,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":null,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #160 with expect errors ["prefix must be a string","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":null,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":null,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #161 with expect errors ["prefix must be a string","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":null,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":null,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #162 with expect errors ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #163 with expect errors ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":"","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #164 with expect errors ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":"","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #165 with expect errors ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":"","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #166 with expect errors ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":12345,"quantity":"","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #167 with expect errors ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":"","badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"","badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #168 with expect errors ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":"","badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"","badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #169 with expect errors ["prefix must be a string","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #170 with expect errors ["prefix must be a string","quantity must be a number conforming to the specified constraints","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":"random_string","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"random_string","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must be a number conforming to the specified constraints","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #171 with expect errors ["prefix must be a string","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":"random_string","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"random_string","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #172 with expect errors ["prefix must be a string","quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":"random_string","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"random_string","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #173 with expect errors ["prefix must be a string","quantity must be a number conforming to the specified constraints"] ', async () => {
            const payload = {"prefix":12345,"quantity":"random_string","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"random_string","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must be a number conforming to the specified constraints"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #174 with expect errors ["prefix must be a string","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":"random_string","badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"random_string","badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #175 with expect errors ["prefix must be a string","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":"random_string","badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"random_string","badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #176 with expect errors ["prefix must be a string","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #177 with expect errors ["prefix must be a string","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":1,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":1,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #178 with expect errors ["prefix must be a string","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":1,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":1,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #179 with expect errors ["prefix must be a string","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":1,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":1,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #180 with expect errors ["prefix must be a string"] ', async () => {
            const payload = {"prefix":12345,"quantity":1,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":1,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #181 with expect errors ["prefix must be a string","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":1,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":1,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #182 with expect errors ["prefix must be a string","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":1,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":1,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #183 with expect errors ["prefix must be a string","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #184 with expect errors ["prefix must be a string","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":0,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":0,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #185 with expect errors ["prefix must be a string","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":0,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":0,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #186 with expect errors ["prefix must be a string","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":0,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":0,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #187 with expect errors ["prefix must be a string","quantity must not be less than 1"] ', async () => {
            const payload = {"prefix":12345,"quantity":0,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":0,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must not be less than 1"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #188 with expect errors ["prefix must be a string","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":0,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":0,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #189 with expect errors ["prefix must be a string","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":0,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":0,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #190 with expect errors ["prefix must be a string","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":101};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":101}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #191 with expect errors ["prefix must be a string","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":101,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":101,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #192 with expect errors ["prefix must be a string","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":101,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":101,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #193 with expect errors ["prefix must be a string","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":101,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":101,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #194 with expect errors ["prefix must be a string","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":12345,"quantity":101,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":101,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #195 with expect errors ["prefix must be a string","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":101,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":101,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #196 with expect errors ["prefix must be a string","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":12345,"quantity":101,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":101,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #197 with expect errors ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #198 with expect errors ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #199 with expect errors ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #200 with expect errors ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #201 with expect errors ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":"duy12345","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #202 with expect errors ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #203 with expect errors ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #204 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #205 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":null,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #206 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":null,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #207 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":null,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #208 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":null,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #209 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":null,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #210 with expect errors ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":null,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #211 with expect errors ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #212 with expect errors ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":"","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #213 with expect errors ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":"","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #214 with expect errors ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":"","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #215 with expect errors ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":"","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #216 with expect errors ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":"","badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #217 with expect errors ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":"","badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #218 with expect errors ["quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #219 with expect errors ["quantity must be a number conforming to the specified constraints","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":"random_string","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #220 with expect errors ["quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":"random_string","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #221 with expect errors ["quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":"random_string","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #222 with expect errors ["quantity must be a number conforming to the specified constraints"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":"random_string","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #223 with expect errors ["quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":"random_string","badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #224 with expect errors ["quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":"random_string","badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #225 with expect errors ["badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #226 with expect errors ["badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":1,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #227 with expect errors ["badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":1,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #228 with expect errors ["badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":1,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #229 with expect errors [] ', async () => {
            const payload = {"prefix":"duy12345","quantity":1,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = [];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #230 with expect errors ["badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":1,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #231 with expect errors ["badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":1,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #232 with expect errors ["quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #233 with expect errors ["quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":0,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":0,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #234 with expect errors ["quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":0,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":0,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #235 with expect errors ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":0,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":0,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #236 with expect errors ["quantity must not be less than 1"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":0,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":0,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must not be less than 1"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #237 with expect errors ["quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":0,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":0,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #238 with expect errors ["quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":0,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":0,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #239 with expect errors ["quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":101};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":101}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #240 with expect errors ["quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":101,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":101,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #241 with expect errors ["quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":101,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":101,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #242 with expect errors ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":101,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":101,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #243 with expect errors ["quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":101,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":101,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #244 with expect errors ["quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":101,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":101,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #245 with expect errors ["quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"duy12345","quantity":101,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":101,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #246 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #247 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #248 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #249 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #250 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":"aaaa","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #251 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #252 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #253 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #254 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":null,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":null,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #255 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":null,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":null,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #256 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":null,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":null,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #257 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":null,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":null,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #258 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":null,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":null,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #259 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":null,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":null,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #260 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #261 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":"","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #262 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":"","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #263 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":"","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #264 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":"","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #265 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":"","badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"","badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #266 with expect errors ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":"","badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"","badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity should not be empty","quantity should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #267 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #268 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":"random_string","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"random_string","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #269 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":"random_string","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"random_string","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #270 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":"random_string","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"random_string","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #271 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":"random_string","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"random_string","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #272 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":"random_string","badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"random_string","badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #273 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":"random_string","badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"random_string","badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #274 with expect errors ["prefix must be longer than or equal to 5 characters","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #275 with expect errors ["prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":1,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":1,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #276 with expect errors ["prefix must be longer than or equal to 5 characters","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":1,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":1,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #277 with expect errors ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":1,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":1,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #278 with expect errors ["prefix must be longer than or equal to 5 characters"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":1,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":1,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #279 with expect errors ["prefix must be longer than or equal to 5 characters","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":1,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":1,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #280 with expect errors ["prefix must be longer than or equal to 5 characters","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":1,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":1,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #281 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #282 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":0,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":0,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #283 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":0,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":0,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #284 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":0,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":0,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #285 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":0,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":0,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #286 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":0,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":0,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #287 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":0,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":0,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #288 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":101};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":101}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #289 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":101,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":101,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #290 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":101,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":101,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge should not be empty","badge should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #291 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":101,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":101,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #292 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":101,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":101,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #293 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":101,"badge":-1};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":101,"badge":-1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });

          it('Test case #294 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            const payload = {"prefix":"aaaa","quantity":101,"badge":4};
            try {
              const response = await axios({
                method: 'post',
                url: 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":101,"badge":4}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be one of the following values: 0, 1, 2, 3"];

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });
      });
  