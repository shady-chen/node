const Koa = require('koa');
const fs = require('fs');
let app = new Koa();

app.use(function*(req,res){
	//防止2次请求
	if(this.path != '/favicon.ico'){
		//输出请求路径
		console.log(this.path);

		//设置返回类型
		this.type = 'html';
		//设置返回内容
		this.body = fs.createReadStream('./template/hello.html');

	}
	

});

app.listen(3000);
console.log("Server is running at localhost:3000;");