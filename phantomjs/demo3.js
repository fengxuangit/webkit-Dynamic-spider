var url = 'http://www.baidu.com';

var page = require('webpage').create();

page.onConsoleMessage = function (msg){
	console.log(msg);
};

page.onResourceRequested = function(request){
	console.log('request ' + JSON.stringify(request, undefined, 4));
}

page.onResourceReceived = function(response){
	console.log('Receive ' + JSON.stringify(response, undefined, 4));
}

page.open(url, function (status){
	page.evaluate(function (){
		console.log(document.title);
	});
	phantom.exit();
});