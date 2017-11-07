const Koa = require('koa');
const compose = require('koa-compose');
let app = new Koa();

//有async的操作就要把middleWare 写成async
let middleWare1 = function(ctx,next){
	console.log('mdwr______1');
	next();
}

let middleWare2 = function(ctx,next){
	console.log('mdwr______2');
	next();
}

let middleWares = compose([middleWare1,middleWare2]);
app.use(middleWares);



app.listen(3000);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
