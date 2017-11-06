var path = require("path");


module.exports = function(app) {
	app.get("/", function(req, res){

		res.sendFile(path.join(__dirname, "../../public/home.html"))
	});
	app.get("/about", function(req,res){
		res.sendFile(path.join(__dirname, "../../public/about.html"))
	});

	app.get("/login-register", function(req,res){
		res.sendFile(path.join(__dirname, "../../public/login-register.html"))
	});
	app.get("/shop-detail", function(req,res){
		res.sendFile(path.join(__dirname, "../../public/shop-detail.html"))
	});
	app.get("/shop-checkout", function(req,res){
		res.sendFile(path.join(__dirname, "../../public/shop-checkout.html"))
	});

	app.get("/skis", function(req,res){
		res.sendFile(path.join(__dirname, "../../public/ski.html"))
	});
	app.get("/allitems", function(req,res){
		res.sendFile(path.join(__dirname, "../../public/api/all"))
	});
	app.get("/trial", function(req,res){
		res.sendFile(path.join(__dirname, "../../public/trial.html"))
	});
};