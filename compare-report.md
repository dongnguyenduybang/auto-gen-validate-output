|  | Type          | Trước                                                                   | Sau                                                   | Body                                                                                                                                                                              |
| - | ------------- | :------------------------------------------------------------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  | enum          | expireAfterTime invalid enum value. Expected 0 1 2 3 4 99, received null | expireAfterTime expected 0 1 2 3 4 99, received null | {"content":"Hi hi","status":"🚀","expireAfterTime":null}                                                                                                                          |
|  | string        | Không có                                                                | must have required property 'content' or 'status'     | {"content":"","status":"","expireAfterTime":1}                                                                                                                                    |
|  | invalid value | Could not resolve permission type                                         | Unauthorized request                                  | {"workspaceId":123,"channelId":"01JXKMADT8E0HD3PZPDNA7FKRA","userId":"invalid_value"}                                                                                             |
|  | invalid value | Unsupported permission type                                               | Could not resolve permission type                     | {"workspaceId":"0","userId":123}                                                                                                                                                  |
|  |               |                                                                           |                                                       |                                                                                                                                                                                   |
|  | invalid value | Invalid channel                                                           | Invalid workspaceId                                   | {"workspaceId":"invalid_value","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1} |
|  | number        | maxUses must be at least 1                                                | maxUses number must be greater than or equal to 1     | {"workspaceId":"0","channelId":"01JXKQGZK7C682R6WT5X02ZW9R","expiresIn":1000,"maxUses":0}                                                                                         |

Và các lỗi liên quan đến 403,  API chưa trả về đúng của một số endpoint ví dụ. tương tự cho các error: 

- Unauthorized request
- Unsupported permission type
- Invalid channel

| Type          | Trước                           | Sau                                          | Body                                                                                               |
| ------------- | --------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| invalid value | Could not resolve permission type | workspaceId expected string, received number | {"workspaceId":123,"channelId":"01JXKS8W32CD4X6B2B968GFXNK","userId":"01JXKS8VPHYHBQW7HB6JM7NADC"} |
