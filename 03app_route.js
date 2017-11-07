const Koa = require('koa');
const fs = require('fs');
const route = require('koa-route')
let app = new Koa();




//设置访问的路径  分不同的路由
let index = route.get("/",(that)=>{
	that.type = 'html';
	that.body = "this is index route";
	console.log('this is index route');
});

let news = route.get("/news",()=>{
	that.type = 'html';
	that.body = "this is news route";
	console.log('this is news route');
});

//使用路由
app.use(index);
app.use(news); 






app.listen(3000);
console.log("Server is running at localhost:3000;");