const express= require("express");
const app = express();
const port = process.env.PORT || 5000;
app.get("/",(req,res)=>{
	res.send("<h1>New Project</h1>");
});

app.listen(port,function (){
	console.log(`Listening on port ${port}`);
});

