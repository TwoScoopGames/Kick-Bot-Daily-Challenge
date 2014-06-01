var express = require("express");
var app = express();

app.get("/daily-challenge", function(request, response){
	response.send("Hello World!");
});

app.listen(3000);