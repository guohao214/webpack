/**
 * Created by Guohao on 2017/6/5.
 */

let dataJson = require('./data.json')

require('./style.css')
console.warn(dataJson.version)
let app = require('./app')
app.fun()
