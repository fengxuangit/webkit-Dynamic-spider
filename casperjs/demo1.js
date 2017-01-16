var casper = require('casper').create();
casper.start('http://www.baidu.com');

casper.then(function (){
	this.echo("First Page: " + this.getTitle());
});

casper.thenOpen('http://www.evalshell.com', function(){
	this.echo("Second Page: " + this.getTitle());
});


casper.run();