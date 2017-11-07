const Koa = require('koa');
const path = require('path');
const koaStatic = require("koa-static");
let app = new Koa();

//使用中间件
app.use(koaStatic(path.join(__dirname)));

//浏览器访问localhost:3000/1.jpg 就可以看到图片




app.listen(3000);
console.log("Server is running at localhost:3000;");