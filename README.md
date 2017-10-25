# X-RESTful-API-Generator-Koa

    A RESTful API generator for Koa.


## Use

```bash
  git clone
  npm i
  npm run dev
```

## Demo
  URL: http://localhost:3000/x-restful-api-generator-koa/demoModule_001/list

  Response:
  ```bash
    {
        "code": 200,
        "msg": "查询列表成功！",
        "data": {
            "count": 300,
            "list": []
        }
    }
  ```

  URL: http://localhost:3000/x-restful-api-generator-koa/demoModule_001/verify/list

  Response:
  ```bash
    {
        "code": 9999,
        "msg": "token无效！请重新登录！",
        "data": {}
    }
  ```


## TODO

```bash
  1.DB Schema
```
