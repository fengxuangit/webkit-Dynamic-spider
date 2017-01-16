var page = require('webpage').create();


page.viewportSize = {width:1920, height:1080};
page.open('http://fengxuan.com/test/', function (s){
	// var title = page.evaluate(function (){
	// 	return document.title;
	// });

	// page.includeJs("http://fengxuan.com/test/jquery.min.js", function (){
	// 	page.evaluate(function (){
	// 		$('#btn').click();
	// 	});
	// });


	page.render('test.jpg', {format:'jpeg', quality:'100'});

	phantom.exit();
});