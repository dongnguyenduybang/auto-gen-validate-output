
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

Note: 
    - Với các decorator có option message khi catch lỗi sẽ ưu tiên lấy lỗi của option message, nếu không có option message mặc định sẽ lấy lỗi từ mặc định từ error_enum
    - Với các field đặc biệt như workspaceId, channelId, userId khi có lỗi và có option message sẽ ưu tiên lỗi từ option message và đẩy lỗi ra ngay lặp tức không check các field còn lại của body

### General

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsOptional | @IsOptional() | Cho phép undefined |   @IsOptional()<br> type: string; |
| IsNotNull | @IsNotNull() | Không cho phép null |   @IsNotNull()<br> type: string; |
| IsNotEmpty | @IsNotEmpty(option?) | Không cho phép rỗng |   @IsNotEmpty(<br>{message: `Could not resolve permission type`,})<br> type: string; |
| IsAny | @IsAny() | Cho phép bao hàm tất cả các kiểu |   @IsAny()<br> type: string; hoặc @IsAny()<br> type: number; |
| IsDefined | @IsDefined(option?) | Bắt buộc phải xác định.   |   @IsDefined({message: `Could not resolve permission type`})<br> type: string |
| IsChecked | @IsChecked(option?) | Xác định để check những field đặc biệt đúng kiểu dữ liệu nhưng khác giá trị  (workspaceId, channelId, userId) cần custom error. field workspaceId có payload là chuỗi "abcdef" nhưng khác "0" => Invalid channel, field channelId có payload là chuỗi "abcdef" nhưng khác template {{channelId}}(ULID) => Invalid channel  |   @IsChecked({message: `Invalid channel`})<br> channelId: string|
| IsULID | @IsULID() | Xác định giá trị là một ULID |   @IsULID()<br> type: string|

### String

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsString | @IsString(option?) | Xác định là kiểu chuỗi. option?: message?, value?|   @IsString(<br>{message: `Invalid channelId`,<br>value: '{{channelId}}'})|
| MinLength | @MinLength(value) | Xác định độ dài chuỗi ít nhất | @MinLength(1)|
| MaxLength |  @MaxLength(value) | Xác định độ dài chuỗi nhiều nhất | @MinLength(100)|

### Number
  
| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsNumber | @IsNumber() | Xác định là kiểu số|   @IsNumber()<br> age: number; |
| Min | @Min(value) | Xác định số thấp nhất | @Min(1)<br> age: number;|
| Max |  @Max(value) | Xác định số cao nhất | @Max(100)<br> age:number;|

### Array

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsArray | @IsArray() | Xác định là kiểu mảng|   @IsArray()<br> address: string[]; |
| MinArray | @MinArray(value) | Xác định số lượng phần tử mảng con nhỏ nhất | @MinArray(1)<br> address: string[];|
| Max |  @MaxArray(value) | Xác định số lượng phần tử mảng con nhỏ nhất | @MaxArray(100)<br> address: string[];|

### Object

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsObject | @IsObject() | Xác định là kiểu object|   @IsObject()<br> includes: IncludesResponse; |

### Boolean

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsBoolean | @IsBoolean() | Xác định là kiểu boolean|   @IsBoolean()<br> isPinned: boolean; |

### Date

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsDate | @IsDate() | Xác định là kiểu ngày|   @IsDate()<br> createTime: Date; |

### Enum

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsEnum | @IsEnum(enumType) | Xác định là kiểu enum |   @IsEnum(MessageTypeEnum)<br> messageType: MessageTypeEnum|

### Condition

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| ValidIf | @ValidIf(condition, operators, condition2) | Xác định là đúng nếu thỏa mãn điều kiện  |   @ValidIf('workspaceId', '===', '0')<br> workspaceId: string|
| StartWith | @StartWith(field, value) | Xác định kí tự bắt đầu của chuỗi  |   @StartWith('username', 'test123' )<br> username: string|
| EndWith | @StartWith(field, value) | Xác định kí tự cuối cùng của chuỗi  |   @EndWith('username', 'test123' )<br> username: string|