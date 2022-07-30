const express = require('express')
const history = require('connect-history-api-fallback')

const app = express()

app.use(history())
app.use(express.static(__dirname + '/static'))

app.listen(4399, (err)=> {
    if (!err) console.log("服务器4399启动成功!")
})