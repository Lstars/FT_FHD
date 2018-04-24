/*
 * @Author: chenxing 
 * @Date: 2018-04-19 17:09:49 
 * @Last Modified by:   chenxing 
 * @Last Modified time: 2018-04-19 17:09:49 
 */


'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://localhost:9528/api/"'
  BASE_API: '"https://dev.mdguanjia.com/bop/"'
})
