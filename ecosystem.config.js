/**
 * Created by OXOYO on 2017/10/31.
 */

module.exports = {
  apps : [
    // 应用配置
    {
      name: 'x-restful-api-generator-koa',
      script: './dist/server.js',
      watch: true,
      env: {
        NODE_ENV: 'development'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ]
}
