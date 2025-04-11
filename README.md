<div align="center">
<h1>Auto Generate Testcase</h1>
</div>

# Introduce

- ✏️ Auto generate test case for DTO/Response/Saga.
- 🔎 Auto generate log report file for each generate type.
- 🔧 Just specify the structure to automate the generate as specified in the docs.

# Contents

+ [Docs Decorator](docs/decorators-docs/decorator.md)
+ [Docs List Actions](docs/list-actons/list-actions.md)
+ [Docs Name Conventions](docs/name-conventions-docs/name-conventions.md)
+ [Docs Reports](docs/reports/reports.md)
+ [Docs Requests](docs/requests-docs/requests.md)
+ [Docs Responses](docs/responses-docs/response.md)
+ [Docs Sagas](docs/saga-docs/sagas.md)


# Install

```bash 
# Clone Repo
git clone https://github.com/dongnguyenduybang/auto-gen-validate-output

# Install Packages
npm install -g pnpm@latest-10

# Install Dependencies
cd auto-gen-validate-output
pnpm i or npm install

```
# Script
```
pnpm <action> <type> <apisName/folder>
```
- `<action>`: `gen`, `test`,
- `<type>`: `request`, `response`, `saga`,
- `<apisName>`: Endpoint name [name convention](docs/name-conventions-docs/name-conventions.md)
- `<folder>`: Folder name [name convention](docs/name-conventions-docs/name-conventions.md)

```
pnpm <action> <type> <subType> <apisName>
```
- `<action>`: `clear`
- `<type>`:  `report`
- `<subType>`: `request`, `response`, `saga`
- `<apisName>`: Endpoint name [name convention](docs/name-conventions-docs/name-conventions.md)
# Demo
#### Script for endpoint send-message
```bash
# Gen request for endpoint send-message
    pnpm gen request send-message

# Gen response for endpoint send-message
    pnpm test request send-message

# Test request for endpoint send-message
    pnpm gen response send-message

# Test response for endpoint send-message
    pnpm test response send-message

# Gen saga for endpoint send-message
    pnpm gen saga send-message

# Test saga for endpoint send-message
    pnpm test saga send-message

```
#### Script for folder
```bash
# Gen request for folder Requests
    pnpm gen request test-requests

# Test request for folder Requests
    pnpm test request test-requests

# Gen response for folder Responses
    pnpm gen response test-responses

# Test response for folder Responses
    pnpm test response test-responses

# Gen saga for folder Sagas
    pnpm gen saga test-sagas

# Test saga for folder Sagas
    pnpm test saga test-sagas
```
#### Script for clear
```bash
# Clear request for endpoint send-message
    pnpm clear request send-message

# Clear response for endpoint send-message
    pnpm clear response send-message

# Clear saga for endpoint send-message
    pnpm clear saga send-message

# Clear request for folder
    pnpm clear request test-requests

# Clear response for folder
    pnpm clear response test-responses

# Clear saga for folder
    pnpm clear saga test-sagas

# Clear report for endpoint send-message
    pnpm clear report response send-message


```

<div align="center">
<h2>End...</h1>
</div>




