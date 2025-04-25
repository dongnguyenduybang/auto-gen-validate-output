## Context
- Mục đích: Lưu lại các giá trị khi call API để làm các var placeholder và phần expect. Có 2 loại context: 
    + TestContext: context data từ call api
    + WSSContext: context event từ websocket

- Custom data: Có thể custom lại data nào sẽ được lưu vào context 
    📄 extractConfig.ts
```
    const sendDmMessageConfig: ExtractConfig = {
        message: {
            path: ['data', 'message'],
            fields: ['messageId', 'content'],
        },
    };

    const acceptMessageConfig: ExtractConfig = {
        channel: {
            path: ['data', 'channel'],
            fields: ['name'],
        },
    };

    const ejectMessageConfig: ExtractConfig = {
        channel: {
            path: ['data', 'channel'],
            fields: ['name'],
        },
    };
```
*Note:

    + channel: filed muốn lấy data
    + path: đường dẫn đến filed
    + filed: tên filed muốn lấy 

- Cấu trúc của context: Thứ tự được đưa vào context sẽ dựa vào mỗi lần action được call api. Khi có filed giống nhau được đưa vào context sẽ tăng dần suffix 0 , 1 , 2 , 3 

```
 Current Context: {
        "userId": "01JSNK7ARM93BHQAMGP20QBMC6",
        "token": "y3XVSWpEiUUUO90I2RtSxJbiYpiA41q7njdNvkwr3Nwi_kpvG-DYWjXCQuBoDrUYFkOlZ2yMWh4XhxLFe24_ow",
        "userId1": "01JSNK7AY8GPVDVZP9YF0K7XGS",
        "token1": "NmgcDv2LM63njEG0OOIj1Q2z4yiNU-zcDr2_fkMgwLtS7njQYx3YNdwspZwZyDUncdppeaQTQSrbrGqswkszaw"
      }
```
- Khi sử dụng var placeholder với prefix: VAR.userID, VAR.userID1, VAR.token, VAR.token1
