const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')
app.use(serve('.'))

app.listen(3000)
