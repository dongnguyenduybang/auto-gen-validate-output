
## Reports

```
=== Test Report for send-message ===
• Host: https://api-sb11.rpc.ziichat.dev
• Endpoint: /Message/SendMessage
• Date: 01/04/2025, 10:36:39

=== Validation Metrics ===
■ DTO Validation:
  ✔ Passed: 1
  ✖ Failed: 1
  ◼ Total: 45

=== Error Details ===
[DTO Validation Issues]

  1. Case #42
     ├─ Status: 500
     ├─ Missing: None
     ├─ Extra: None
     └─ Details: TypeError: value.trim is not a function

=== System Metrics ===
▧ Status Code Distribution:
  200: 0
  201: 1
  400: 0
  403: 0
  404: 0
  500: 1

▧ Unique Error Patterns:

=== End of Report ===
```
- Status: Status response error trả về ( 400, 403, 404, 500, 503 )
- Missing: Có trong expect nhưng không có trên repsonse API return
- Extra: Có trên response API return nhưng không có trong expect
- Unique Error: Gôm lỗi
- Detail: Chi tiết lỗi (nếu có)
