var casper = require('casper').create();


casper.begin('Page content tests', 1, function suite(test){
	casper.start('http://fengxuan.com/test/htmldom.php', function (){
		test.assertExists('h1.page-title');
		test.assertSelectorHasText('h1.page-title', 'Hello');
		test.assertVisible('footer');
	}).run(function () {
		test.done();
	});
});