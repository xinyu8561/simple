var main = require('./handlers/main.js'),
	login = require('./handlers/login.js');

module.exports = function(app){

	// miscellaneous routes
	app.get('/', main.home);
	app.get('/about', main.about);
	//
	app.get('/login',login.loginin)

};