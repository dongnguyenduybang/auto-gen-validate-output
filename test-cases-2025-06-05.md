# Test Cases Report

**Total cases**: 223  
**Single-error cases**: 156  
**Pairwise-error cases**: 63

## Summary
| Case Type | Count |
|-----------|-------|
| Single-error | 156 |
| Pairwise-error | 63 |
| Valid cases | 4 |

## Detailed Test Cases
### Test Case #1
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #2
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": 123,
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #3
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #4
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #5
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "invalid_value",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #6
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "{{channelId}}",
  "messageId": 123,
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #7
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "{{channelId}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #8
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "{{channelId}}",
  "messageId": "",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #9
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "{{channelId}}",
  "messageId": "invalid_ULID",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #10
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "invalid_enum_value",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #11
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 20,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #12
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #13
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #14
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #15
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #16
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #17
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #18
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #19
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": 123,
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message"
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #20
**Type**: Valid

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected**: No errors

---
### Test Case #21
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": 123,
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #22
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Unsupported permission type

---
### Test Case #23
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #24
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "invalid_value",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #25
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": 123,
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId expected string, received number

---
### Test Case #26
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId required

---
### Test Case #27
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId should not be empty,messageId invalid ulid

---
### Test Case #28
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "invalid_ULID",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId invalid ulid

---
### Test Case #29
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "invalid_enum_value",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'invalid_enum_value'

---
### Test Case #30
**Type**: Valid

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 20,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected**: No errors

---
### Test Case #31
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
reportCategory required,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'undefined'

---
### Test Case #32
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
reportCategory should not be empty,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received ''

---
### Test Case #33
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
reportReason expected string, received number

---
### Test Case #34
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
reportReason should not be empty,reportReason string must contain at least 1 character(s)

---
### Test Case #35
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
reportReason string must contain at most 255 character(s)

---
### Test Case #36
**Type**: Valid

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "pretendingTo": 2
}
```

**Expected**: No errors

---
### Test Case #37
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'invalid_enum_value'

---
### Test Case #38
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message"
}
```

**Expected Errors**:
pretendingTo required,pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'undefined'

---
### Test Case #39
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #40
**Type**: Single-error

**Payload**:
```json
{
  "channelId": 123,
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #41
**Type**: Single-error

**Payload**:
```json
{
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #42
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #43
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "invalid_value",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #44
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "{{channelId}}",
  "messageId": 123,
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #45
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "{{channelId}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #46
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "{{channelId}}",
  "messageId": "",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #47
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "{{channelId}}",
  "messageId": "invalid_ULID",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #48
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "invalid_enum_value",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #49
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 20,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #50
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #51
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #52
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #53
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #54
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #55
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #56
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #57
**Type**: Single-error

**Payload**:
```json
{
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message"
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #58
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #59
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": 123,
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #60
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #61
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #62
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "invalid_value",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #63
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "{{channelId}}",
  "messageId": 123,
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #64
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "{{channelId}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #65
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "{{channelId}}",
  "messageId": "",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #66
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "{{channelId}}",
  "messageId": "invalid_ULID",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #67
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "invalid_enum_value",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #68
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 20,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #69
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #70
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #71
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #72
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #73
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #74
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #75
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #76
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message"
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #77
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #78
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": 123,
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #79
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Unsupported permission type

---
### Test Case #80
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #81
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "invalid_value",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #82
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "{{channelId}}",
  "messageId": 123,
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #83
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "{{channelId}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #84
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "{{channelId}}",
  "messageId": "",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #85
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "{{channelId}}",
  "messageId": "invalid_ULID",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #86
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "invalid_enum_value",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #87
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 20,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #88
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #89
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #90
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #91
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #92
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #93
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #94
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #95
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "invalid_value",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message"
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #96
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": 123,
  "messageId": 123,
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #97
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": 123,
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #98
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": 123,
  "messageId": "",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #99
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": 123,
  "messageId": "invalid_ULID",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #100
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": 123,
  "messageId": "{{messageId1}}",
  "reportCategory": "invalid_enum_value",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #101
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": 123,
  "messageId": "{{messageId1}}",
  "reportCategory": 20,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #102
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": 123,
  "messageId": "{{messageId1}}",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #103
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": 123,
  "messageId": "{{messageId1}}",
  "reportCategory": "",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #104
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": 123,
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #105
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": 123,
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #106
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": 123,
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #107
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": 123,
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #108
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": 123,
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #109
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": 123,
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message"
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #110
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "messageId": 123,
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Unsupported permission type

---
### Test Case #111
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Unsupported permission type

---
### Test Case #112
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "messageId": "",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Unsupported permission type

---
### Test Case #113
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "messageId": "invalid_ULID",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Unsupported permission type

---
### Test Case #114
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "messageId": "{{messageId1}}",
  "reportCategory": "invalid_enum_value",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Unsupported permission type

---
### Test Case #115
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "messageId": "{{messageId1}}",
  "reportCategory": 20,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Unsupported permission type

---
### Test Case #116
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "messageId": "{{messageId1}}",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Unsupported permission type

---
### Test Case #117
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "messageId": "{{messageId1}}",
  "reportCategory": "",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Unsupported permission type

---
### Test Case #118
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
Unsupported permission type

---
### Test Case #119
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
Unsupported permission type

---
### Test Case #120
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
Unsupported permission type

---
### Test Case #121
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "pretendingTo": 2
}
```

**Expected Errors**:
Unsupported permission type

---
### Test Case #122
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
Unsupported permission type

---
### Test Case #123
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message"
}
```

**Expected Errors**:
Unsupported permission type

---
### Test Case #124
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "",
  "messageId": 123,
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #125
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #126
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "",
  "messageId": "",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #127
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "",
  "messageId": "invalid_ULID",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #128
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "",
  "messageId": "{{messageId1}}",
  "reportCategory": "invalid_enum_value",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #129
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "",
  "messageId": "{{messageId1}}",
  "reportCategory": 20,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #130
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "",
  "messageId": "{{messageId1}}",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #131
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "",
  "messageId": "{{messageId1}}",
  "reportCategory": "",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #132
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #133
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #134
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #135
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "pretendingTo": 2
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #136
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #137
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message"
}
```

**Expected Errors**:
Could not resolve permission type

---
### Test Case #138
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "invalid_value",
  "messageId": 123,
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #139
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "invalid_value",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #140
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "invalid_value",
  "messageId": "",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #141
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "invalid_value",
  "messageId": "invalid_ULID",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #142
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "invalid_value",
  "messageId": "{{messageId1}}",
  "reportCategory": "invalid_enum_value",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #143
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "invalid_value",
  "messageId": "{{messageId1}}",
  "reportCategory": 20,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #144
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "invalid_value",
  "messageId": "{{messageId1}}",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #145
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "invalid_value",
  "messageId": "{{messageId1}}",
  "reportCategory": "",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #146
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "invalid_value",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #147
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "invalid_value",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #148
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "invalid_value",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #149
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "invalid_value",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "pretendingTo": 2
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #150
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "invalid_value",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #151
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "invalid_value",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "report message"
}
```

**Expected Errors**:
Invalid channel

---
### Test Case #152
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": 123,
  "reportCategory": "invalid_enum_value",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId expected string, received number,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'invalid_enum_value'

---
### Test Case #153
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": 123,
  "reportCategory": 20,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId expected string, received number

---
### Test Case #154
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": 123,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId expected string, received number,reportCategory required,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'undefined'

---
### Test Case #155
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": 123,
  "reportCategory": "",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId expected string, received number,reportCategory should not be empty,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received ''

---
### Test Case #156
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": 123,
  "reportCategory": 3,
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId expected string, received number,reportReason expected string, received number

---
### Test Case #157
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": 123,
  "reportCategory": 3,
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId expected string, received number,reportReason should not be empty,reportReason string must contain at least 1 character(s)

---
### Test Case #158
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": 123,
  "reportCategory": 3,
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId expected string, received number,reportReason string must contain at most 255 character(s)

---
### Test Case #159
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": 123,
  "reportCategory": 3,
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId expected string, received number

---
### Test Case #160
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": 123,
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
messageId expected string, received number,pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'invalid_enum_value'

---
### Test Case #161
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": 123,
  "reportCategory": 3,
  "reportReason": "report message"
}
```

**Expected Errors**:
messageId expected string, received number,pretendingTo required,pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'undefined'

---
### Test Case #162
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "reportCategory": "invalid_enum_value",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId required,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'invalid_enum_value'

---
### Test Case #163
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "reportCategory": 20,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId required

---
### Test Case #164
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId required,reportCategory required,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'undefined'

---
### Test Case #165
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "reportCategory": "",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId required,reportCategory should not be empty,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received ''

---
### Test Case #166
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "reportCategory": 3,
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId required,reportReason expected string, received number

---
### Test Case #167
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "reportCategory": 3,
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId required,reportReason should not be empty,reportReason string must contain at least 1 character(s)

---
### Test Case #168
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "reportCategory": 3,
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId required,reportReason string must contain at most 255 character(s)

---
### Test Case #169
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "reportCategory": 3,
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId required

---
### Test Case #170
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
messageId required,pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'invalid_enum_value'

---
### Test Case #171
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "reportCategory": 3,
  "reportReason": "report message"
}
```

**Expected Errors**:
messageId required,pretendingTo required,pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'undefined'

---
### Test Case #172
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "",
  "reportCategory": "invalid_enum_value",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId should not be empty,messageId invalid ulid,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'invalid_enum_value'

---
### Test Case #173
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "",
  "reportCategory": 20,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId should not be empty,messageId invalid ulid

---
### Test Case #174
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId should not be empty,messageId invalid ulid,reportCategory required,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'undefined'

---
### Test Case #175
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "",
  "reportCategory": "",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId should not be empty,messageId invalid ulid,reportCategory should not be empty,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received ''

---
### Test Case #176
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "",
  "reportCategory": 3,
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId should not be empty,messageId invalid ulid,reportReason expected string, received number

---
### Test Case #177
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "",
  "reportCategory": 3,
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId should not be empty,messageId invalid ulid,reportReason should not be empty,reportReason string must contain at least 1 character(s)

---
### Test Case #178
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "",
  "reportCategory": 3,
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId should not be empty,messageId invalid ulid,reportReason string must contain at most 255 character(s)

---
### Test Case #179
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "",
  "reportCategory": 3,
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId should not be empty,messageId invalid ulid

---
### Test Case #180
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
messageId should not be empty,messageId invalid ulid,pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'invalid_enum_value'

---
### Test Case #181
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "",
  "reportCategory": 3,
  "reportReason": "report message"
}
```

**Expected Errors**:
messageId should not be empty,messageId invalid ulid,pretendingTo required,pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'undefined'

---
### Test Case #182
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "invalid_ULID",
  "reportCategory": "invalid_enum_value",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId invalid ulid,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'invalid_enum_value'

---
### Test Case #183
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "invalid_ULID",
  "reportCategory": 20,
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId invalid ulid

---
### Test Case #184
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "invalid_ULID",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId invalid ulid,reportCategory required,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'undefined'

---
### Test Case #185
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "invalid_ULID",
  "reportCategory": "",
  "reportReason": "report message",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId invalid ulid,reportCategory should not be empty,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received ''

---
### Test Case #186
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "invalid_ULID",
  "reportCategory": 3,
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId invalid ulid,reportReason expected string, received number

---
### Test Case #187
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "invalid_ULID",
  "reportCategory": 3,
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId invalid ulid,reportReason should not be empty,reportReason string must contain at least 1 character(s)

---
### Test Case #188
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "invalid_ULID",
  "reportCategory": 3,
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId invalid ulid,reportReason string must contain at most 255 character(s)

---
### Test Case #189
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "invalid_ULID",
  "reportCategory": 3,
  "pretendingTo": 2
}
```

**Expected Errors**:
messageId invalid ulid

---
### Test Case #190
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "invalid_ULID",
  "reportCategory": 3,
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
messageId invalid ulid,pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'invalid_enum_value'

---
### Test Case #191
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "invalid_ULID",
  "reportCategory": 3,
  "reportReason": "report message"
}
```

**Expected Errors**:
messageId invalid ulid,pretendingTo required,pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'undefined'

---
### Test Case #192
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "invalid_enum_value",
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'invalid_enum_value',reportReason expected string, received number

---
### Test Case #193
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "invalid_enum_value",
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'invalid_enum_value',reportReason should not be empty,reportReason string must contain at least 1 character(s)

---
### Test Case #194
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "invalid_enum_value",
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'invalid_enum_value',reportReason string must contain at most 255 character(s)

---
### Test Case #195
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "invalid_enum_value",
  "pretendingTo": 2
}
```

**Expected Errors**:
reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'invalid_enum_value'

---
### Test Case #196
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "invalid_enum_value",
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'invalid_enum_value',pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'invalid_enum_value'

---
### Test Case #197
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "invalid_enum_value",
  "reportReason": "report message"
}
```

**Expected Errors**:
reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'invalid_enum_value'

---
### Test Case #198
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 20,
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
reportReason expected string, received number

---
### Test Case #199
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 20,
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
reportReason should not be empty,reportReason string must contain at least 1 character(s)

---
### Test Case #200
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 20,
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
reportReason string must contain at most 255 character(s)

---
### Test Case #201
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 20,
  "pretendingTo": 2
}
```

**Expected Errors**:
reportReason required

---
### Test Case #202
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 20,
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'invalid_enum_value'

---
### Test Case #203
**Type**: Valid

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 20,
  "reportReason": "report message"
}
```

**Expected**: No errors

---
### Test Case #204
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
reportCategory required,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'undefined',reportReason expected string, received number

---
### Test Case #205
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
reportCategory required,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'undefined',reportReason should not be empty,reportReason string must contain at least 1 character(s)

---
### Test Case #206
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
reportCategory required,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'undefined',reportReason string must contain at most 255 character(s)

---
### Test Case #207
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "pretendingTo": 2
}
```

**Expected Errors**:
reportCategory required,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'undefined'

---
### Test Case #208
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
reportCategory required,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'undefined',pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'invalid_enum_value'

---
### Test Case #209
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportReason": "report message"
}
```

**Expected Errors**:
reportCategory required,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received 'undefined'

---
### Test Case #210
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "",
  "reportReason": 123,
  "pretendingTo": 2
}
```

**Expected Errors**:
reportCategory should not be empty,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received '',reportReason expected string, received number

---
### Test Case #211
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "",
  "reportReason": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
reportCategory should not be empty,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received '',reportReason should not be empty,reportReason string must contain at least 1 character(s)

---
### Test Case #212
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "",
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": 2
}
```

**Expected Errors**:
reportCategory should not be empty,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received '',reportReason string must contain at most 255 character(s)

---
### Test Case #213
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "",
  "pretendingTo": 2
}
```

**Expected Errors**:
reportCategory should not be empty,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received ''

---
### Test Case #214
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "",
  "reportReason": "report message",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
reportCategory should not be empty,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received '',pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'invalid_enum_value'

---
### Test Case #215
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": "",
  "reportReason": "report message"
}
```

**Expected Errors**:
reportCategory should not be empty,reportCategory invalid enum value. Expected 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20, received ''

---
### Test Case #216
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": 123,
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
reportReason expected string, received number,pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'invalid_enum_value'

---
### Test Case #217
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": 123
}
```

**Expected Errors**:
reportReason expected string, received number,pretendingTo required,pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'undefined'

---
### Test Case #218
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
reportReason should not be empty,reportReason string must contain at least 1 character(s),pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'invalid_enum_value'

---
### Test Case #219
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": ""
}
```

**Expected Errors**:
reportReason should not be empty,reportReason string must contain at least 1 character(s),pretendingTo required,pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'undefined'

---
### Test Case #220
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
reportReason string must contain at most 255 character(s),pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'invalid_enum_value'

---
### Test Case #221
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "reportReason": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
}
```

**Expected Errors**:
reportReason string must contain at most 255 character(s),pretendingTo required,pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'undefined'

---
### Test Case #222
**Type**: Single-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3,
  "pretendingTo": "invalid_enum_value"
}
```

**Expected Errors**:
pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'invalid_enum_value'

---
### Test Case #223
**Type**: Pairwise-error

**Payload**:
```json
{
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "messageId": "{{messageId1}}",
  "reportCategory": 3
}
```

**Expected Errors**:
pretendingTo required,pretendingTo invalid enum value. Expected 0 | 1 | 2 | 3, received 'undefined'

---
