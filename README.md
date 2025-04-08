<div align="center">
<h1>Auto Gen Testcase</h1>
</div>

# Contents

- [NPM](#npm)
- [Requests](#requests)
- [Responses](#responses)
- [Sagas](#sagas)
- [Decorators](#decorators)
- [Reports](#reports)
- [Defined Name](#defined-name)

## NPM
```
pnpm <action> <type> <apisName>
pnpm <action> <type> <folder>
Note: <action>: gen, test
        <type>: request, response, saga
        <apisName>: send-message
        <folder>: send-message
```

``` 
    pnpm gen request send-message
```
``` 
    $ pnpm test response send-message >test 1 response cho send-message
```
``` 
    $ pnpm gen request test-requests >gen toàn bộ requests
```
``` 
    $ pnpm test request test-responses >test toàn bộ responses
```
``` 

    $ pnpm gen saga send-message >gen 1 saga cho send-message
```
``` 
    $ pnpm test saga send-message >test 1 saga cho send-message
```
``` 
    $ pnpm gen saga test-sagas >gen toàn bộ sagas
```
``` 
    $ pnpm test saga test-sagas >test toàn bộ sagas
```





