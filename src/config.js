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
  database: 'x-restful-api-generator-koa',
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

export const Log = {
  appenders: {
    out: {
      type: 'console'
    },
    task: {
      type: 'dateFile',
      filename: 'logs/task',
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true
    },
    result: {
      type: 'dateFile',
      filename: 'logs/result',
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true
    },
    error: {
      type: 'dateFile',
      filename: 'logs/error',
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true
    },
    default: {
      type: 'dateFile',
      filename: 'logs/default',
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true
    },
    rate: {
      type: 'dateFile',
      filename: 'logs/rate',
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true
    }
  },
  categories: {
    default: {
      appenders: ['out', 'default'],
      level: 'info'
    },
    task: {
      appenders: ['task'],
      level: 'info'
    },
    result: {
      appenders: ['result'],
      level: 'info'
    },
    error: {
      appenders: ['error'],
      level: 'error'
    },
    rate: {
      appenders: ['rate'],
      level: 'info'
    }
  }
}
