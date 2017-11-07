const Koa = require('koa');
const route = require('koa-route');
let app = new Koa();


let index = route.get("/",(ctx)=>{
	ctx.body = 'index Page';

})

let news = route.get("/news",(ctx)=>{
	//重定向到根目录
	ctx.redirect('/');
});


app.use(index);
app.use(news);



app.listen(3000);
console.log("Server is running at localhost:3000;");