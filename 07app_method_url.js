const Koa = require('koa');
const fs = require('fs');
let app = new Koa();

app.use(function*(req,res){
	if(this.path != '/favicon.ico'){
		console.log(`${Date.now()} ${this.method} ${this.url}`);
	}
});

app.listen(3000);
console.log("Server is running at localhost:8000;");