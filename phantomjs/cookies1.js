var webpage = require('webpage');
var page = webpage.create();


page.customHeaders = {
	'X-test': 'jack',
	'DNT': 1
}

page.open("http://www.evalshell.com", function(status){
	var cookies = page.cookies;

	console.log("Listening cookies");

	for(var i in cookies){
		console.log(cookies[i].name + '=' + cookies[i].value);
	}

	phantom.exit();
})