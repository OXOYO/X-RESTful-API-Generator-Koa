/**
 * Created by OXOYO on 2017/10/23.
 */

export const System = {
  protocol: 'http://',
  host: 'localhost',
  port: 3000,
  accessHost: [
    'localhost',
    '127.0.0.1'
  ]
}

export const DB = {
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'test',
  prefix: ''
}

export const Api = {
  // 自定义URL前缀
  prefix: '/x-restful-api-generator-koa'
}

export const Cookie = {
  keys: {
    token: 'x-restful-api-key',
    secret: 'x-restful-api-generator-koa'
  }
}
