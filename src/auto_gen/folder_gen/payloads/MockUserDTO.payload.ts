[
    {
        "body": {},
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "badge": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "badge": ""
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "badge": 0
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "badge": -1
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "badge": 4
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": null,
            "badge": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": null,
            "badge": ""
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": null,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": null,
            "badge": 0
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "quantity": null,
            "badge": -1
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": null,
            "badge": 4
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": ""
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": "",
            "badge": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": "",
            "badge": ""
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": "",
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": "",
            "badge": 0
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "quantity": "",
            "badge": -1
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": "",
            "badge": 4
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": "random_string"
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": "random_string",
            "badge": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": "random_string",
            "badge": ""
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": "random_string",
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": "random_string",
            "badge": 0
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "quantity": "random_string",
            "badge": -1
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": "random_string",
            "badge": 4
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 1
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 1,
            "badge": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 1,
            "badge": ""
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 1,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 1,
            "badge": 0
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters"
        ]
    },
    {
        "body": {
            "quantity": 1,
            "badge": -1
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 1,
            "badge": 4
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 0
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 0,
            "badge": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 0,
            "badge": ""
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 0,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 0,
            "badge": 0
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "quantity": 0,
            "badge": -1
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 0,
            "badge": 4
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 101
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 101,
            "badge": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 101,
            "badge": ""
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 101,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 101,
            "badge": 0
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100"
        ]
    },
    {
        "body": {
            "quantity": 101,
            "badge": -1
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "quantity": 101,
            "badge": 4
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix should not be empty",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "badge": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "badge": ""
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "badge": 0
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": null,
            "badge": -1
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "badge": 4
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": null,
            "badge": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": null,
            "badge": ""
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": null,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": null,
            "badge": 0
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": null,
            "badge": -1
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": null,
            "badge": 4
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": ""
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "",
            "badge": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "",
            "badge": ""
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "",
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "",
            "badge": 0
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "",
            "badge": -1
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "",
            "badge": 4
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "random_string"
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "random_string",
            "badge": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "random_string",
            "badge": ""
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "random_string",
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "random_string",
            "badge": 0
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "random_string",
            "badge": -1
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": "random_string",
            "badge": 4
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 1
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 1,
            "badge": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 1,
            "badge": ""
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 1,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 1,
            "badge": 0
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 1,
            "badge": -1
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 1,
            "badge": 4
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 0
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 0,
            "badge": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 0,
            "badge": ""
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 0,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 0,
            "badge": 0
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 0,
            "badge": -1
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 0,
            "badge": 4
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 101
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 101,
            "badge": null
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 101,
            "badge": ""
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 101,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 101,
            "badge": 0
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 101,
            "badge": -1
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": null,
            "quantity": 101,
            "badge": 4
        },
        "expects": [
            "prefix should not be null or undefined",
            "prefix must be a string",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": ""
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "badge": null
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "badge": ""
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "badge": 0
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "",
            "badge": -1
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "badge": 4
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": null
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": null,
            "badge": -1
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": null,
            "badge": 4
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": ""
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": "",
            "badge": -1
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": "",
            "badge": 4
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": "random_string"
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": "random_string",
            "badge": -1
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": "random_string",
            "badge": 4
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 1
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "prefix must be longer than or equal to 5 characters",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "prefix must be longer than or equal to 5 characters",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "prefix must be longer than or equal to 5 characters",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 1,
            "badge": 0
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 1,
            "badge": -1
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 1,
            "badge": 4
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 0
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 0,
            "badge": null
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 0,
            "badge": ""
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 0,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 0,
            "badge": 0
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 0,
            "badge": -1
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 0,
            "badge": 4
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 101
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 101,
            "badge": null
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 101,
            "badge": ""
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 101,
            "badge": "random_string"
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 101,
            "badge": 0
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 101,
            "badge": -1
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "",
            "quantity": 101,
            "badge": 4
        },
        "expects": [
            "prefix should not be empty",
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "badge": null
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "badge": ""
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "badge": "random_string"
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "badge": 0
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "badge": -1
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "badge": 4
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": null
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": null,
            "badge": null
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": null,
            "badge": ""
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": null,
            "badge": "random_string"
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": null,
            "badge": 0
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": null,
            "badge": -1
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": null,
            "badge": 4
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": ""
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": "",
            "badge": null
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": "",
            "badge": ""
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": "",
            "badge": "random_string"
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": "",
            "badge": 0
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": "",
            "badge": -1
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": "",
            "badge": 4
        },
        "expects": [
            "prefix must be a string",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": "random_string"
        },
        "expects": [
            "prefix must be a string",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": "random_string",
            "badge": null
        },
        "expects": [
            "prefix must be a string",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": "random_string",
            "badge": ""
        },
        "expects": [
            "prefix must be a string",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": "random_string",
            "badge": "random_string"
        },
        "expects": [
            "prefix must be a string",
            "quantity must be a number conforming to the specified constraints",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
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
            "prefix": 12345,
            "quantity": "random_string",
            "badge": -1
        },
        "expects": [
            "prefix must be a string",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": "random_string",
            "badge": 4
        },
        "expects": [
            "prefix must be a string",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 1
        },
        "expects": [
            "prefix must be a string",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 1,
            "badge": null
        },
        "expects": [
            "prefix must be a string",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 1,
            "badge": ""
        },
        "expects": [
            "prefix must be a string",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 1,
            "badge": "random_string"
        },
        "expects": [
            "prefix must be a string",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 1,
            "badge": 0
        },
        "expects": [
            "prefix must be a string"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 1,
            "badge": -1
        },
        "expects": [
            "prefix must be a string",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 1,
            "badge": 4
        },
        "expects": [
            "prefix must be a string",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 0
        },
        "expects": [
            "prefix must be a string",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 0,
            "badge": null
        },
        "expects": [
            "prefix must be a string",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 0,
            "badge": ""
        },
        "expects": [
            "prefix must be a string",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 0,
            "badge": "random_string"
        },
        "expects": [
            "prefix must be a string",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 0,
            "badge": 0
        },
        "expects": [
            "prefix must be a string",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 0,
            "badge": -1
        },
        "expects": [
            "prefix must be a string",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 0,
            "badge": 4
        },
        "expects": [
            "prefix must be a string",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 101
        },
        "expects": [
            "prefix must be a string",
            "quantity must not be greater than 100",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 101,
            "badge": null
        },
        "expects": [
            "prefix must be a string",
            "quantity must not be greater than 100",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 101,
            "badge": ""
        },
        "expects": [
            "prefix must be a string",
            "quantity must not be greater than 100",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 101,
            "badge": "random_string"
        },
        "expects": [
            "prefix must be a string",
            "quantity must not be greater than 100",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 101,
            "badge": 0
        },
        "expects": [
            "prefix must be a string",
            "quantity must not be greater than 100"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 101,
            "badge": -1
        },
        "expects": [
            "prefix must be a string",
            "quantity must not be greater than 100",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": 12345,
            "quantity": 101,
            "badge": 4
        },
        "expects": [
            "prefix must be a string",
            "quantity must not be greater than 100",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345"
        },
        "expects": [
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "badge": null
        },
        "expects": [
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "badge": ""
        },
        "expects": [
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "badge": "random_string"
        },
        "expects": [
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "badge": 0
        },
        "expects": [
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "badge": -1
        },
        "expects": [
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "badge": 4
        },
        "expects": [
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": null
        },
        "expects": [
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": null,
            "badge": null
        },
        "expects": [
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": null,
            "badge": ""
        },
        "expects": [
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": null,
            "badge": "random_string"
        },
        "expects": [
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": null,
            "badge": 0
        },
        "expects": [
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": null,
            "badge": -1
        },
        "expects": [
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": null,
            "badge": 4
        },
        "expects": [
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": ""
        },
        "expects": [
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": "",
            "badge": 0
        },
        "expects": [
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": "",
            "badge": -1
        },
        "expects": [
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": "",
            "badge": 4
        },
        "expects": [
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": "random_string"
        },
        "expects": [
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
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
            "quantity": "random_string",
            "badge": -1
        },
        "expects": [
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": "random_string",
            "badge": 4
        },
        "expects": [
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 1
        },
        "expects": [
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 1,
            "badge": null
        },
        "expects": [
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 1,
            "badge": ""
        },
        "expects": [
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 1,
            "badge": "random_string"
        },
        "expects": [
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 1,
            "badge": 0
        },
        "expects": []
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 1,
            "badge": -1
        },
        "expects": [
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 1,
            "badge": 4
        },
        "expects": [
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 0
        },
        "expects": [
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 0,
            "badge": null
        },
        "expects": [
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 0,
            "badge": ""
        },
        "expects": [
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 0,
            "badge": "random_string"
        },
        "expects": [
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 0,
            "badge": 0
        },
        "expects": [
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 0,
            "badge": -1
        },
        "expects": [
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 0,
            "badge": 4
        },
        "expects": [
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 101
        },
        "expects": [
            "quantity must not be greater than 100",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 101,
            "badge": null
        },
        "expects": [
            "quantity must not be greater than 100",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 101,
            "badge": ""
        },
        "expects": [
            "quantity must not be greater than 100",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 101,
            "badge": "random_string"
        },
        "expects": [
            "quantity must not be greater than 100",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 101,
            "badge": 0
        },
        "expects": [
            "quantity must not be greater than 100"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 101,
            "badge": -1
        },
        "expects": [
            "quantity must not be greater than 100",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "duy12345",
            "quantity": 101,
            "badge": 4
        },
        "expects": [
            "quantity must not be greater than 100",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa"
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "badge": null
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "badge": ""
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "badge": "random_string"
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "badge": 0
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "badge": -1
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "badge": 4
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": null
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": null,
            "badge": null
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": null,
            "badge": ""
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": null,
            "badge": "random_string"
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": null,
            "badge": 0
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": null,
            "badge": -1
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": null,
            "badge": 4
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be null or undefined",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": ""
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": "",
            "badge": null
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": "",
            "badge": ""
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": "",
            "badge": "random_string"
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": "",
            "badge": 0
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": "",
            "badge": -1
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": "",
            "badge": 4
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity should not be empty",
            "quantity must be a number conforming to the specified constraints",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": "random_string"
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": "random_string",
            "badge": null
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": "random_string",
            "badge": ""
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": "random_string",
            "badge": "random_string"
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": "random_string",
            "badge": 0
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": "random_string",
            "badge": -1
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": "random_string",
            "badge": 4
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 1
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 1,
            "badge": null
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 1,
            "badge": ""
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 1,
            "badge": "random_string"
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 1,
            "badge": 0
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 1,
            "badge": -1
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 1,
            "badge": 4
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 0
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 0,
            "badge": null
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 0,
            "badge": ""
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 0,
            "badge": "random_string"
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 0,
            "badge": 0
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 0,
            "badge": -1
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 0,
            "badge": 4
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be less than 1",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 101
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 101,
            "badge": null
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge should not be null or undefined",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 101,
            "badge": ""
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge should not be empty",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 101,
            "badge": "random_string"
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge must be a number conforming to the specified constraints",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 101,
            "badge": 0
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 101,
            "badge": -1
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    },
    {
        "body": {
            "prefix": "aaaa",
            "quantity": 101,
            "badge": 4
        },
        "expects": [
            "prefix must be longer than or equal to 5 characters",
            "quantity must not be greater than 100",
            "badge must be one of the following values: 0, 1, 2, 3"
        ]
    }
];