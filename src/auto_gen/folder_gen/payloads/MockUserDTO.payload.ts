[
    {
        "body": {},
        "expects": [
            "prefix should not be undefined",
            "quantity should not be undefined",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "badge": null
        },
        "expects": [
            "prefix should not be undefined",
            "quantity should not be undefined",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "badge": ""
        },
        "expects": [
            "prefix should not be undefined",
            "quantity should not be undefined",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be undefined",
            "quantity should not be undefined",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "badge": 0
        },
        "expects": [
            "prefix should not be undefined",
            "quantity should not be undefined"
        ]
    },
    {
        "body": {
            "quantity": null
        },
        "expects": [
            "prefix should not be undefined",
            "quantity should not be null",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "quantity": null,
            "badge": null
        },
        "expects": [
            "prefix should not be undefined",
            "quantity should not be null",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "quantity": null,
            "badge": ""
        },
        "expects": [
            "prefix should not be undefined",
            "quantity should not be null",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "quantity": null,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be undefined",
            "quantity should not be null",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "quantity": null,
            "badge": 0
        },
        "expects": [
            "prefix should not be undefined",
            "quantity should not be null"
        ]
    },
    {
        "body": {
            "quantity": ""
        },
        "expects": [
            "prefix should not be undefined",
            "quantity should not be empty",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "quantity": "",
            "badge": null
        },
        "expects": [
            "prefix should not be undefined",
            "quantity should not be empty",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "quantity": "",
            "badge": ""
        },
        "expects": [
            "prefix should not be undefined",
            "quantity should not be empty",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "quantity": "",
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be undefined",
            "quantity should not be empty",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "quantity": "",
            "badge": 0
        },
        "expects": [
            "prefix should not be undefined",
            "quantity should not be empty"
        ]
    },
    {
        "body": {
            "quantity": "random_string"
        },
        "expects": [
            "prefix should not be undefined",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "quantity": "random_string",
            "badge": null
        },
        "expects": [
            "prefix should not be undefined",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "quantity": "random_string",
            "badge": ""
        },
        "expects": [
            "prefix should not be undefined",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "quantity": "random_string",
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be undefined",
            "quantity must be a number conforming to the specified constraints",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "quantity": "random_string",
            "badge": 0
        },
        "expects": [
            "prefix should not be undefined",
            "quantity must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "quantity": 1
        },
        "expects": [
            "prefix should not be undefined",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "quantity": 1,
            "badge": null
        },
        "expects": [
            "prefix should not be undefined",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "quantity": 1,
            "badge": ""
        },
        "expects": [
            "prefix should not be undefined",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "quantity": 1,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be undefined",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "quantity": 1,
            "badge": 0
        },
        "expects": [
            "prefix should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": null
        },
        "expects": [
            "prefix should not be null",
            "quantity should not be undefined",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": null,
            "badge": null
        },
        "expects": [
            "prefix should not be null",
            "quantity should not be undefined",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": null,
            "badge": ""
        },
        "expects": [
            "prefix should not be null",
            "quantity should not be undefined",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": null,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null",
            "quantity should not be undefined",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": null,
            "badge": 0
        },
        "expects": [
            "prefix should not be null",
            "quantity should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": null
        },
        "expects": [
            "prefix should not be null",
            "quantity should not be null",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": null,
            "badge": null
        },
        "expects": [
            "prefix should not be null",
            "quantity should not be null",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": null,
            "badge": ""
        },
        "expects": [
            "prefix should not be null",
            "quantity should not be null",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": null,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null",
            "quantity should not be null",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": null,
            "badge": 0
        },
        "expects": [
            "prefix should not be null",
            "quantity should not be null"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": ""
        },
        "expects": [
            "prefix should not be null",
            "quantity should not be empty",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "",
            "badge": null
        },
        "expects": [
            "prefix should not be null",
            "quantity should not be empty",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "",
            "badge": ""
        },
        "expects": [
            "prefix should not be null",
            "quantity should not be empty",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "",
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null",
            "quantity should not be empty",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "",
            "badge": 0
        },
        "expects": [
            "prefix should not be null",
            "quantity should not be empty"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "random_string"
        },
        "expects": [
            "prefix should not be null",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "random_string",
            "badge": null
        },
        "expects": [
            "prefix should not be null",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "random_string",
            "badge": ""
        },
        "expects": [
            "prefix should not be null",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "random_string",
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null",
            "quantity must be a number conforming to the specified constraints",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "random_string",
            "badge": 0
        },
        "expects": [
            "prefix should not be null",
            "quantity must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 1
        },
        "expects": [
            "prefix should not be null",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 1,
            "badge": null
        },
        "expects": [
            "prefix should not be null",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 1,
            "badge": ""
        },
        "expects": [
            "prefix should not be null",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 1,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 1,
            "badge": 0
        },
        "expects": [
            "prefix should not be null"
        ]
    },
    {
        "body": {
            "prefix": ""
        },
        "expects": [
            "prefix should not be empty",
            "quantity should not be undefined",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": "",
            "badge": null
        },
        "expects": [
            "prefix should not be empty",
            "quantity should not be undefined",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": "",
            "badge": ""
        },
        "expects": [
            "prefix should not be empty",
            "quantity should not be undefined",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": "",
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be empty",
            "quantity should not be undefined",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "",
            "badge": 0
        },
        "expects": [
            "prefix should not be empty",
            "quantity should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": null
        },
        "expects": [
            "prefix should not be empty",
            "quantity should not be null",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": null,
            "badge": null
        },
        "expects": [
            "prefix should not be empty",
            "quantity should not be null",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": null,
            "badge": ""
        },
        "expects": [
            "prefix should not be empty",
            "quantity should not be null",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": null,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be empty",
            "quantity should not be null",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": null,
            "badge": 0
        },
        "expects": [
            "prefix should not be empty",
            "quantity should not be null"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": ""
        },
        "expects": [
            "prefix should not be empty",
            "quantity should not be empty",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": "",
            "badge": null
        },
        "expects": [
            "prefix should not be empty",
            "quantity should not be empty",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": "",
            "badge": ""
        },
        "expects": [
            "prefix should not be empty",
            "quantity should not be empty",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": "",
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be empty",
            "quantity should not be empty",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": "",
            "badge": 0
        },
        "expects": [
            "prefix should not be empty",
            "quantity should not be empty"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": "random_string"
        },
        "expects": [
            "prefix should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": "random_string",
            "badge": null
        },
        "expects": [
            "prefix should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": "random_string",
            "badge": ""
        },
        "expects": [
            "prefix should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": "random_string",
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": "random_string",
            "badge": 0
        },
        "expects": [
            "prefix should not be empty",
            "quantity must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 1
        },
        "expects": [
            "prefix should not be empty",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 1,
            "badge": null
        },
        "expects": [
            "prefix should not be empty",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 1,
            "badge": ""
        },
        "expects": [
            "prefix should not be empty",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 1,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be empty",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 1,
            "badge": 0
        },
        "expects": [
            "prefix should not be empty"
        ]
    },
    {
        "body": {
            "prefix": 123456789
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be undefined",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "badge": null
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be undefined",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "badge": ""
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be undefined",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "badge": "random_string"
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be undefined",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "badge": 0
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": null
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": null,
            "badge": null
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": null,
            "badge": ""
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": null,
            "badge": "random_string"
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": null,
            "badge": 0
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": ""
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be empty",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": "",
            "badge": null
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be empty",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": "",
            "badge": ""
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be empty",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": "",
            "badge": "random_string"
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be empty",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": "",
            "badge": 0
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be empty"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": "random_string"
        },
        "expects": [
            "prefix must be a string",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": "random_string",
            "badge": null
        },
        "expects": [
            "prefix must be a string",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": "random_string",
            "badge": ""
        },
        "expects": [
            "prefix must be a string",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": "random_string",
            "badge": "random_string"
        },
        "expects": [
            "prefix must be a string",
            "quantity must be a number conforming to the specified constraints",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": "random_string",
            "badge": 0
        },
        "expects": [
            "prefix must be a string",
            "quantity must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": 1
        },
        "expects": [
            "prefix must be a string",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": 1,
            "badge": null
        },
        "expects": [
            "prefix must be a string",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": 1,
            "badge": ""
        },
        "expects": [
            "prefix must be a string",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": 1,
            "badge": "random_string"
        },
        "expects": [
            "prefix must be a string",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": 123456789,
            "quantity": 1,
            "badge": 0
        },
        "expects": [
            "prefix must be a string"
        ]
    },
    {
        "body": {
            "prefix": "duy12345"
        },
        "expects": [
            "quantity should not be undefined",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "badge": null
        },
        "expects": [
            "quantity should not be undefined",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "badge": ""
        },
        "expects": [
            "quantity should not be undefined",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "badge": "random_string"
        },
        "expects": [
            "quantity should not be undefined",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "badge": 0
        },
        "expects": [
            "quantity should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": null
        },
        "expects": [
            "quantity should not be null",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": null,
            "badge": null
        },
        "expects": [
            "quantity should not be null",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": null,
            "badge": ""
        },
        "expects": [
            "quantity should not be null",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": null,
            "badge": "random_string"
        },
        "expects": [
            "quantity should not be null",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": null,
            "badge": 0
        },
        "expects": [
            "quantity should not be null"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": ""
        },
        "expects": [
            "quantity should not be empty",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": "",
            "badge": null
        },
        "expects": [
            "quantity should not be empty",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": "",
            "badge": ""
        },
        "expects": [
            "quantity should not be empty",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": "",
            "badge": "random_string"
        },
        "expects": [
            "quantity should not be empty",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": "",
            "badge": 0
        },
        "expects": [
            "quantity should not be empty"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": "random_string"
        },
        "expects": [
            "quantity must be a number conforming to the specified constraints",
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": "random_string",
            "badge": null
        },
        "expects": [
            "quantity must be a number conforming to the specified constraints",
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": "random_string",
            "badge": ""
        },
        "expects": [
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": "random_string",
            "badge": "random_string"
        },
        "expects": [
            "quantity must be a number conforming to the specified constraints",
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": "random_string",
            "badge": 0
        },
        "expects": [
            "quantity must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 1
        },
        "expects": [
            "badge should not be undefined"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 1,
            "badge": null
        },
        "expects": [
            "badge should not be null"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 1,
            "badge": ""
        },
        "expects": [
            "badge should not be empty"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 1,
            "badge": "random_string"
        },
        "expects": [
            "badge must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 1,
            "badge": 0
        },
        "expects": []
    }
];