<div align="center">
<h1>Auto Gen Testcase</h1>
</div>

## Contents

- [NPM](#npm)
- [Requests](#requests)
- [Responses](#responses)
- [Sagas](#sagas)
- [Decorators](#decorators)
- [Defined Name](#defined-name)

## NPM
```
$ pnpm <action> <type> <apisName>
$ pnpm <action> <type> <folder-spec>
Note: <action>: gen, test
        <type>: request, response, saga
        <apisName>: send-message
        <folder-spec>: send-message
```
```bash
    $ pnpm gen request send-message
```
```bash
    $ pnpm test response send-message
```
## Requests





## Responses












## Sagas









## Decorators

- [General](#general)
- [String](#string)
- [Number](#number)
- [Array](#array)
- [Object](#object)
- [Boolean](#boolean)
- [Date](#date)
- [Enum](#enum)
- [Condition](#condition)


## General

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsOptional | @IsOptional() | Cho phép undefined |   @IsOptional()<br> type: string; |
| IsNotNull | @IsNotNull() | Không cho phép null |   @IsNotNull()<br> type: string; |
| IsNotEmpty | @IsNotEmpty(option?) | Cho phép để rỗng. option: message? custom message error trả về |   @IsNotEmpty(<br>{message: `Could not resolve permission type`,}) |
| IsOptional | @IsOptional() | Cho phép undefined |   @IsOptional()<br> type: string; |
| IsAny | @IsAny() | Cho phép bao hàm tất cả các kiểu |   @IsAny()<br> type: string; hoặc @IsAny()<br> type: number;  |
| IsDefined | @IsDefined() | Bắt buộc phải xác định |   @IsDefined()<br> type: string|

## String

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsString | @IsString(option?) | Xác định là kiểu chuỗi. option?: message?, value?|   @IsString(<br>{message: `Invalid channelId`,<br>value: '{{channelId}}'})|
| MinLength | @MinLength(value) | Xác định độ dài chuỗi ít nhất | @MinLength(1)|
| MaxLength |  @MaxLength(value) | Xác định độ dài chuỗi nhiều nhất | @MinLength(100)|

## Number
  
| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsNumber | @IsNumber() | Xác định là kiểu số|   @IsNumber()<br> age: number; |
| Min | @Min(value) | Xác định số thấp nhất | @Min(1)<br> age: number;|
| Max |  @Max(value) | Xác định số cao nhất | @Max(100)<br> age:number;|

## Array

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsArray | @IsArray() | Xác định là kiểu mảng|   @IsArray()<br> address: string[]; |
| MinArray | @MinArray(value) | Xác định số lượng phần tử mảng con nhỏ nhất | @MinArray(1)<br> address: string[];|
| Max |  @MaxArray(value) | Xác định số lượng phần tử mảng con nhỏ nhất | @MaxArray(100)<br> address: string[];|

## Object

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsObject | @IsObject() | Xác định là kiểu object|   @IsObject()<br> includes: IncludesResponse; |

## Boolean

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsBoolean | @IsBoolean() | Xác định là kiểu boolean|   @IsBoolean()<br> isPinned: boolean; |

## Date

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsDate | @IsDate() | Xác định là kiểu ngày|   @IsDate()<br> createTime: Date; |

## Enum

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsEnum | @IsEnum(enumType) | Xác định là kiểu enum |   @IsEnum(MessageTypeEnum)<br> messageType: MessageTypeEnum|

## Condition

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| ValidIf | @ValidIf(condition, operators, condition2) | Xác định là đúng nếu thỏa mãn điều kiện  |   @ValidIf('workspaceId', '===', '0')<br> workspaceId: string|
| StartWith | @StartWith(field, value) | Xác định kí tự bắt đầu của chuỗi  |   @StartWith('username', 'test123' )<br> username: string|
| EndWith | @StartWith(field, value) | Xác định kí tự cuối cùng của chuỗi  |   @EndWith('username', 'test123' )<br> username: string|

## Defined Name

**- Request ( DTO )**
  + Folder chung: test-requests
  + File: send-message.dto.ts
  + Folder apis: send-message
    
  Example:
  - 📂 test-requests
    - 📂 send-message
      - 📄 send-message.request.json
      - 📄 send-message.dto.ts
      - 📄 send-message.spec.ts
    - 📂 send-dm-message
      - 📄 send-dm-message.request.json
      - 📄 send-dm-message.dto.ts
      - 📄 send-dm-message.spec.ts

**- Response**
  + Folder chung: test-responses
  + File: send-message.response.ts, send-message.response.json, send-message.response.spec.ts
  + Folder apis: send-message
    
  Example:
  - 📂 test-responses
    - 📂 send-message
      - 📄 send-message.response.json
      - 📄 send-message.response.ts
      - 📄 send-message.response.spec.ts
    - 📂 send-dm-message
      - 📄 send-dm-message.response.json
      - 📄 send-dm-message.response.ts
      - 📄 send-dm-message.response.spec.ts

**- Saga**
  + Folder chung: test-sagas
  + File: send-message.sagas.ts, send-message.sagas.spec.ts
  + Folder apis: send-message
   
Example:
  - 📂 test-sagas
    - 📂 send-message
      - 📄 send-message.sagas.ts
      - 📄 send-message.sagas.spec.ts
    - 📂 send-dm-message
      - 📄 send-dm-message.sagas.ts
      - 📄 send-dm-message.sagas.spec.ts
