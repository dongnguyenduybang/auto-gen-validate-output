<div align="center">
<h1>Auto Gen Testcase</h1>
</div>

## Contents

- [Requests](#requests)
- [Responses](#responses)
- [Sagas](#sagas)
- [Decorators](#decorators)
- [NPM](#npm)

## Requests





## Responses












## Sagas









## Decorators

- String

| Name  | Usage | Describe  | Example
|--------|--------|--------|--------|
| IsString | @IsString(option?) | Xác định là kiểu chuỗi. option?: message?, value?|   @IsString({message: `Invalid channelId`,value: '{{channelId}}'})|
| MinLength | @MinLength(value) | Xác định độ dài chuỗi ít nhất | @MinLength(1)|
| MaxLength |  @MaxLength(value) | Xác định độ dài chuỗi nhiều nhất | @MinLength(100)|

- Number
  
| Name  | Usage | Describe  | Example
|--------|--------|--------|--------|
| IsNumber | @IsNumber() | Xác định là kiểu số|   @IsNumber()<br> age: number; |
| Min | @Min(value) | Xác định số thấp nhất | @Min(1)<br> age: number;|
| Max |  @Max(value) | Xác định số cao nhất | @Max(100)<br> age:number;|








## NPM
