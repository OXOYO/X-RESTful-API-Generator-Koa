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

/*
export const Log = {
  // 日志输出配置
  appenders: [
    // 错误日志
    {
      // 分类名称
      'category': 'errorLogger',
      // 日志类型
      'type': 'dateFile',
      // 日志文件
      'filename': './logs/error',
      // 是否总是有后缀名
      'alwaysIncludePattern': true,
      // 文件名格式
      'pattern': '-yyyy-MM-dd-hh.log'
    },
    // 响应日志
    {
      'category': 'resLogger',
      'type': 'dateFile',
      'filename': './logs/response',
      'alwaysIncludePattern': true,
      'pattern': '-yyyy-MM-dd-hh.log'
    }
  ],
  // 设置logger名称对应的的日志等级
  'levels': {
    'errorLogger': 'ERROR',
    'resLogger': 'ALL'
  }
}
*/
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
