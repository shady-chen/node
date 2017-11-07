const Koa = require('koa');
const fs = require('fs');
let app = new Koa();

app.use(function*(req,res){
	this.body = "Hello World";
	//输出客户端请求的类型 this.type   
	console.log(this.type);   //输出默认的客户端请求类型为：text/plain

	this.type = 'html';

	//fs.createReadStream('file_path'); 读取文件流 返回readStream（文件读取流，输入流）对象。（可读流）
	var content = fs.createReadStream('./template/hello.html');
	console.log(content);

	this.body = content;




});

app.listen(3000);
console.log("Server is running at localhost:8000;");