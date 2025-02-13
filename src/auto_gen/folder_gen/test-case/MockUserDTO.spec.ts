
      import axios from 'axios';
      describe('Testcase', () => {
      
        describe('Testcase POST method', () => {
      
          it('Test case #1', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","quantity should not be undefined","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #2', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","quantity should not be undefined","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #3', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","quantity should not be undefined","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #4', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","quantity should not be undefined"]
              console.log(error)
            }
          });

          it('Test case #5', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","quantity should not be null","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #6', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","quantity should not be null","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #7', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","quantity should not be null","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #8', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","quantity should not be null"]
              console.log(error)
            }
          });

          it('Test case #9', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","quantity should not be empty","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #10', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","quantity should not be empty","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #11', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","quantity should not be empty","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #12', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","quantity should not be empty"]
              console.log(error)
            }
          });

          it('Test case #13', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","quantity must be a number conforming to the specified constraints ","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #14', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","quantity must be a number conforming to the specified constraints ","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #15', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","quantity must be a number conforming to the specified constraints ","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #16', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","quantity must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #17', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #18', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #19', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #20', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be undefined"]
              console.log(error)
            }
          });

          it('Test case #21', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","quantity should not be undefined","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #22', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","quantity should not be undefined","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #23', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","quantity should not be undefined","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #24', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","quantity should not be undefined"]
              console.log(error)
            }
          });

          it('Test case #25', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","quantity should not be null","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #26', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","quantity should not be null","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #27', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","quantity should not be null","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #28', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","quantity should not be null"]
              console.log(error)
            }
          });

          it('Test case #29', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","quantity should not be empty","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #30', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","quantity should not be empty","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #31', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","quantity should not be empty","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #32', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","quantity should not be empty"]
              console.log(error)
            }
          });

          it('Test case #33', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","quantity must be a number conforming to the specified constraints ","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #34', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","quantity must be a number conforming to the specified constraints ","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #35', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","quantity must be a number conforming to the specified constraints ","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #36', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","quantity must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #37', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #38', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #39', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #40', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be null"]
              console.log(error)
            }
          });

          it('Test case #41', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","quantity should not be undefined","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #42', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","quantity should not be undefined","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #43', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","quantity should not be undefined","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #44', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","quantity should not be undefined"]
              console.log(error)
            }
          });

          it('Test case #45', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","quantity should not be null","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #46', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","quantity should not be null","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #47', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","quantity should not be null","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #48', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","quantity should not be null"]
              console.log(error)
            }
          });

          it('Test case #49', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","quantity should not be empty","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #50', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","quantity should not be empty","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #51', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","quantity should not be empty","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #52', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","quantity should not be empty"]
              console.log(error)
            }
          });

          it('Test case #53', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","quantity must be a number conforming to the specified constraints ","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #54', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","quantity must be a number conforming to the specified constraints ","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #55', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","quantity must be a number conforming to the specified constraints ","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #56', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","quantity must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #57', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #58', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #59', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #60', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix should not be empty"]
              console.log(error)
            }
          });

          it('Test case #61', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","quantity should not be undefined","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #62', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","quantity should not be undefined","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #63', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","quantity should not be undefined","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #64', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","quantity should not be undefined"]
              console.log(error)
            }
          });

          it('Test case #65', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":null,"badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","quantity should not be null","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #66', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":null,"badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","quantity should not be null","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #67', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":null,"badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","quantity should not be null","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #68', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":null,"badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","quantity should not be null"]
              console.log(error)
            }
          });

          it('Test case #69', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"","badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","quantity should not be empty","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #70', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"","badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","quantity should not be empty","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #71', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"","badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","quantity should not be empty","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #72', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"","badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","quantity should not be empty"]
              console.log(error)
            }
          });

          it('Test case #73', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"random_string","badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","quantity must be a number conforming to the specified constraints ","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #74', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"random_string","badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","quantity must be a number conforming to the specified constraints ","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #75', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"random_string","badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","quantity must be a number conforming to the specified constraints ","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #76', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"random_string","badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","quantity must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #77', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":1,"badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #78', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":1,"badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #79', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":1,"badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #80', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":1,"badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["prefix must be a string"]
              console.log(error)
            }
          });

          it('Test case #81', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["quantity should not be undefined","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #82', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["quantity should not be undefined","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #83', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["quantity should not be undefined","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #84', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["quantity should not be undefined"]
              console.log(error)
            }
          });

          it('Test case #85', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["quantity should not be null","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #86', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["quantity should not be null","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #87', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["quantity should not be null","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #88', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["quantity should not be null"]
              console.log(error)
            }
          });

          it('Test case #89', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["quantity should not be empty","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #90', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["quantity should not be empty","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #91', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["quantity should not be empty","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #92', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["quantity should not be empty"]
              console.log(error)
            }
          });

          it('Test case #93', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["quantity must be a number conforming to the specified constraints ","badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #94', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["quantity must be a number conforming to the specified constraints ","badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #95', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["quantity must be a number conforming to the specified constraints ","badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #96', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["quantity must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #97', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":null}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["badge should not be null"]
              console.log(error)
            }
          });

          it('Test case #98', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":""}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["badge should not be empty"]
              console.log(error)
            }
          });

          it('Test case #99', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":"random_string"}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ["badge must be a number conforming to the specified constraints "]
              console.log(error)
            }
          });

          it('Test case #100', async () => {
            try {
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":0}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = []
              console.log(error)
            }
          });
        });
      });
    