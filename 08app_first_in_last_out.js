const Koa = require('koa');
const fs = require('fs');
let app = new Koa();

//中间件遵循先进后出的原则

app.use(function(ctx,next){
	console.log("one-------");    
	next();
	console.log('-------one');
});

app.use(function(ctx,next){
	console.log("two-------");
	next();
	console.log('-------two');
});

app.use(function(ctx,next){
	console.log("three------");
	next();
	console.log('------three');
});

app.listen(3000);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");


/*
   输出结果
			one-------
			two-------
			three------
			------three
			-------two
			-------one

 */ 