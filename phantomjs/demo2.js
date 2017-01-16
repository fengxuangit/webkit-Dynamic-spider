var page = require('webpage').create();

page.open('http://www.baidu.com', function (status){
	console.log(page.content);
	phantom.exit();
});