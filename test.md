AddUserStatus

| field   | type   | variant | actual                                            | expected                                                                            |
| ------- | ------ | ------- | ------------------------------------------------- | ----------------------------------------------------------------------------------- |
| content | string | empty   | must have required property 'content' or 'status' | content  should not be empty, content string must contain at least 1 character(s) |
| status  | string | null    | must have required property 'content' or 'status' | status expected string, received null                                               |
| content | string | null    | must have required property 'content' or 'status' | content expected string, received null                                              |
|         |        |         |                                                   |                                                                                     |
