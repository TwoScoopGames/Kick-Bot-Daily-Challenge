var djb2 = require("djb2");
var express = require("express");

var salt = "some string";

var app = express();

app.get("/daily-challenge", function(request, response){
	response.send(getDailySeed().toString());
});

function getDailySeed(){
	return djb2(salt + getUTCDate());
}

function getUTCDate(){
	var date = new Date();
	var month = (date.getUTCMonth() + 1).toString();
	if(month.length === 1){
		month = "0" + month;
	}
	var day = date.getUTCDate().toString();
	if(day.length === 1){
		day = "0" + day;
	}
	return date.getUTCFullYear().toString() + month + day;
}

app.listen(3000);