# X-RESTful-API-Generator-Koa

    A RESTful API generator for Koa.


## Use

```bash
  git clone
  npm i
  npm run dev
```

## Demo
  URL: http://localhost:3000/x-restful-api-generator-koa/demoModule_001/login

  Resonse:
  ```bash
    {
        "code": 200,
        "msg": "登录成功！",
        "data": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRlc3QiLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTUwODkyMTY2OSwiZXhwIjoxNTA5MDA4MDY5fQ.2occtME3kLUDxntJXOz5e1dkspybGIVqbDPRgaE6lZA"
        }
    }
  ```

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
  2.sequelize & sequelize-auto
  3.error handler middleware
```
