var djb2 = require("djb2");
var express = require("express");

var salt = "some string";

var app = express();

app.get("/daily-challenge", function(request, response){
	var seed = getDailySeed().toString();
	var challenge = {
		seed : seed
	};

	response.send(challenge);
});

function getDailySeed(){
	var date = new Date();

	return djb2(getUTCDate(date) + salt);
}

function getUTCDate(date){
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