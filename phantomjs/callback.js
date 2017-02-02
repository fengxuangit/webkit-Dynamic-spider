var page = require('webpage').create();


page.onAlert = function(message){
	console.log("Alert: " + message);
	return true;
}

page.open('http://fengxuan.com/test/xss1.php?id=1', function(){
	var imgurl = page.evaluateJavaScript(function (){
			return document.body.querySelector('img').src;
		});

	console.log(imgurl);
	phantom.exit();
})