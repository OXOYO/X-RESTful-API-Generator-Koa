/**
 * Created by yangfan9244 on 2017/10/25.
 */

const gulp = require('gulp')
const gulpEslint = require('gulp-eslint')
const gulpNodemon = require('gulp-nodemon')
const gulpSequence = require('gulp-sequence')
const eslintFriendlyFormatter = require('eslint-friendly-formatter')

const config = {
  server: {
    script: './build/index.js'
  }
}

// eslint
gulp.task('ESlint', () => {
  return gulp.src([
    'src/**',
    '!node_modules/**'
  ]).pipe(
    gulpEslint({
      configFile: './.eslintrc.js'
    })
  ).pipe(
    gulpEslint.format(eslintFriendlyFormatter)
  ).pipe(
    gulpEslint.result(results => {
      // Called for each ESLint result.
      console.log(`ESLint result: ${results.filePath}`)
      console.log(`# Messages: ${results.messages.length}`)
      console.log(`# Warnings: ${results.warningCount}`)
      console.log(`# Errors: ${results.errorCount}`)
    })
  ).pipe(
    gulpEslint.results(results => {
      // Called once for all ESLint results.
      console.log(`Total Results: ${results.length}`)
      console.log(`Total Warnings: ${results.warningCount}`)
      console.log(`Total Errors: ${results.errorCount}`)
    })
  )
})

// nodemon
gulp.task('nodemon', () => {
  let stream = gulpNodemon({
    script: config.server.script,
    ext: 'js json',
    env: {
      'NODE_ENV': 'development'
    },
    tasks: ['ESlint']
  })
  stream.on('restart', () => {
    console.log('Service restarted!')
  }).on('crash', () => {
    console.error('Service has crashed!\n')
    // restart the server in 10 seconds
    // stream.emit('restart', 10)
  })
})

// default
gulp.task('default', () => {
  gulpSequence('ESlint', 'nodemon')(() => {
    console.log('Service started!')
  })
})
