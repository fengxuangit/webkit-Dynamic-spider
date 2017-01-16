var casper = require('casper').create();


casper.start('http://fengxuan.com/test/htmldom.php', function(){
	// if (this.exists('h1.page-title')){
	// 	this.echo("the heading exists");
	// }

});

casper.run();
