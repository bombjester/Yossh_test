var server = require("./../controllers/controller.js");

module.exports = function(app){
	app.post('/sendform', function(req,res){
		server.send_form(req,res);
	})
	app.get('/get_expenses', function(req,res){
		server.get_expenses(req,res);
	})
}