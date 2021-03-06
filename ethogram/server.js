// Generated by CoffeeScript 1.9.1
(function() {
	var app, express, io, server, socketio;
	express = require("express");
	app = express();
	app.set("port", process.env.PORT || 5000);
	server = app.listen(app.get("port"), function() {
		return console.log("Node app is running at localhost:" + app.get("port"));
	});

	app.use(express["static"](__dirname + "/public"));

	app.get("/", function(request, response) {
		return response.sendFile(__dirname + "/public/index.html");
	});

}).call(this);
