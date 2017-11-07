const Koa = require('koa');
const fs = require('fs');
let app = new Koa();

//有async的操作就要把middleWare 写成async
let middleWare = async function(ctx,next){
	ctx.type = 'html';
	var fsData = '123';
	await fs.readFile('./template/hello.html','utf-8',(err,data)=>{
		if(err)console.err(err);
		else{
			console.log("flag_blue");
			fsData = data.toString();
		}
	});
	console.log("flag_red");
	console.log(ctx.path);
	ctx.body = fsData;
}



app.use(middleWare);



app.listen(3000);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
