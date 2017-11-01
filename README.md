# X-RESTful-API-Generator-Koa

    A RESTful API generator for Koa.

## Start

```bash
  git clone
  npm i
  npm run dev
```
Node.js >= 7.6.0 required.

## Build
```bash
  npm run build
```

## production
```bash
  pm2 start ecosystem.config.js
```

## Demo

### demoModule_001
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

### Articles

  URL: http://localhost:3000/x-restful-api-generator-koa/articles/add

  Request Body:
  ```bash
    {
      title: 'myArticle_001'
      content: 'yyyyyyyyyyyyyyyyyyyyyyy'
    }
  ```

  Response:
  ```bash
    {
      "code": 200,
      "msg": "添加文章成功！",
      "data": {
        "id": 3,
        "title": "myArticle_001",
        "content": "yyyyyyyyyyyyyyyyyyyyyyy",
        "updatedAt": "2017-10-27T07:52:21.745Z",
        "createdAt": "2017-10-27T07:52:21.745Z"
      }
    }
  ```

  URL: http://localhost:3000/x-restful-api-generator-koa/articles/update

  Request Body:
  ```bash
    {
      id: '3'
      content: 'xxxxxx'
    }
  ```

  Response:
  ```bash
    {
      "code": 200,
      "msg": "编辑文章成功！",
      "data": {
        "id": 3,
        "title": "myArticle_003",
        "content": "xxxxxx",
        "createdAt": "2017-10-26T23:52:21.000Z",
        "updatedAt": "2017-10-27T00:08:55.000Z"
      }
    }
  ```

  URL: http://localhost:3000/x-restful-api-generator-koa/articles/remove

  Request Body:
  ```bash
    {
      id: '2'
    }
  ```

  Response:
  ```bash
    {
      "code": 200,
      "msg": "删除文章成功！",
      "data": 1
    }
  ```

  URL: http://localhost:3000/x-restful-api-generator-koa/articles/list?pageSize=1&currentPage=1

  Response:
  ```bash
    {
      "code": 200,
      "msg": "查询账号列表成功！",
      "data": {
        "count": 2,
        "list": [
          {
            "id": 1,
            "title": "myArticle_001",
            "content": "yyyyyyyyyyyyyyyyyyyyyyy",
            "createdAt": "2017-10-26T23:46:10.000Z",
            "updatedAt": "2017-10-26T23:46:10.000Z"
          }
        ]
      }
    }
  ```

## Develop Step
  1.Edit config.js

  2.Export the database to schema by [sequelize-auto](https://github.com/sequelize/sequelize-auto)

  ```bash
    sequelize-auto -o "./src/schema" -d x-restful-api-generator-koa -h localhost -u root -p 3306 -e mysql
  ```

  3.Create Modules
  ```bash
    apps
      \_ newModules
          Ctrl.js
          Model.js
          Routers.js
  ```

## TODO

```bash
  1.error handler middleware
  2.file upload demo
```
