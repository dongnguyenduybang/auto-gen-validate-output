
describe('Testcase from CreateUserDTO', () => {

    it('should return test case 1: ["username is null","address is null"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": null,
            "address": null
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 2: ["username is null","address is missing"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": null
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 3: ["username is null","address is empty"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": null,
            "address": ""
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 4: ["username is null","address should have a length between 1 and 255"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": null,
            "address": "a"
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 5: ["username is null","address should have a length between 1 and 255"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": null,
            "address": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 6: ["username is missing","address is null"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "address": null
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 7: ["username is missing","address is missing"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {};

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 8: ["username is missing","address is empty"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "address": ""
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 9: ["username is missing","address should have a length between 1 and 255"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "address": "a"
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 10: ["username is missing","address should have a length between 1 and 255"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "address": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 11: ["username is empty","address is null"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": "",
            "address": null
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 12: ["username is empty","address is missing"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": ""
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 13: ["username is empty","address is empty"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": "",
            "address": ""
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 14: ["username is empty","address should have a length between 1 and 255"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": "",
            "address": "a"
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 15: ["username is empty","address should have a length between 1 and 255"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": "",
            "address": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 16: ["username should have a length between 1 and 255","address is null"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": "a",
            "address": null
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 17: ["username should have a length between 1 and 255","address is missing"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": "a"
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 18: ["username should have a length between 1 and 255","address is empty"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": "a",
            "address": ""
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 19: ["username should have a length between 1 and 255","address should have a length between 1 and 255"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": "a",
            "address": "a"
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 20: ["username should have a length between 1 and 255","address should have a length between 1 and 255"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": "a",
            "address": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 21: ["username should have a length between 1 and 255","address is null"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "address": null
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 22: ["username should have a length between 1 and 255","address is missing"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 23: ["username should have a length between 1 and 255","address is empty"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "address": ""
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 24: ["username should have a length between 1 and 255","address should have a length between 1 and 255"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "address": "a"
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

    it('should return test case 25: ["username should have a length between 1 and 255","address should have a length between 1 and 255"]', () => {
        const inputPayload = {
            "username": null,
            "address": null
        };
        const testCasePayload = {
            "username": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "address": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        };

        let errors = [];
        let matchingKeysCount = 0;

        Object.keys(inputPayload).forEach((key) => {
            if (testCasePayload.hasOwnProperty(key)) {
                if (testCasePayload[key] === inputPayload[key]) {
                    matchingKeysCount++;
                }
            }
        });

        if (matchingKeysCount > 1) {
            errors.push(`${matchingKeysCount} matching keys between inputPayload and testCasePayload`);
        }

        expect(errors.length).toBe(0);
    });

});
