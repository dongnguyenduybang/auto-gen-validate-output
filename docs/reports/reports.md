## Reports

#### Report Request
```
=== Request Test Report for update-message ===
• Host: N/A
• Endpoint: /Message/UpdateMessage
• Date: 15/05/2025, 16:00:23

=== Execution Steps ===

=== Test Summary ===
✅ Passed: 3000
❌ Failed: 0
📊 Total: 3000

=== System Metrics ===
▧ Status Code Distribution:
 🟢 200: 120
 🟢 201: 0
 🟠 400: 0
 🟠 403: 2880
 🟠 404: 0
 🔴 500: 0

[DTO Validation Issues]

=== End of Report ===
```
- Status: Status response error trả về ( 400, 403, 404, 500, 503 )
- Missing: Có trong expect nhưng không có trên repsonse API return
- Extra: Có trên response API return nhưng không có trong expect
- Unique Error: Gôm lỗi
- Detail: Chi tiết lỗi (nếu có)

#### Report Responses
```
=== Response Test Report for send-message ===
• Host: https://api-sb11.rpc.ziichat.dev
• Endpoint: /Message/SendMessage
• Date: 08/04/2025, 09:37:05

=== Test Summary ===
✅ Passed: 0
❌ Failed: 1
📊 Total: 1

=== Error Details ===

🔴 Case #1
   ├─ Error: data.message.workspaceId must be a string but got number,data.message.messageId should not be null or undefined

=== End of Report ===
```

- Error: Trả về chi tiết error nếu nếu API có lỗi

#### Report Sagas
```
=== Saga Test Report For create-channel ===
• URL: N/A
• Saga: CreateChannelSaga
• Date: 2025-05-15T08:10:12.029Z


=== BeforeEach Failures ===
📄 Case: Case 1
📝 1. mockUser
   • Type: null
   • Status: ✅ passed
📝 2. createChannel
   • Type: null
   • Status: ✅ passed


=== Test Case ===
📄 Case: should return false when member update channel name
📝 1. acceptInvitation
   • Type: expect
   • Error:
      └─ missing_field:
         └─ Path: includes.members
            └─ Field 'nickname' in actual[0] is MISSING in expected[0]
            └─ Field 'nickname' in actual[1] is MISSING in expected[1]


=== AfterEach Failures ===
📄 Case: should return false when member update channel name
📝 1. deleteMockedUsers
   • Type: null
   • Status: ✅ passed

=== End of Report ===
```
