var page = require('webpage').create();


page.onConsoleMessage = function(msg){
	console.log(msg);
};

page.open('http://www.evalshell.com', function(){
	var title = "";
	page.includeJs('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.2/jquery.min.js', function(){
		page.evaluate(function (){
			title = $('title').text();
			return title;
		});
	console.log('title: ' + title);
	phantom.exit();
	});
});