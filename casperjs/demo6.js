
// casper.test.begin('assertDoesntExist() tests', 1, function(test){
// 	casper.start().then(function(){
// 		this.setContent('<div class="heaven"></div>');
// 		// test.assertDoesntExist('.taxes');
// 		test.assertEval(function (){
// 			return __utils__.findOne('.heaven').textContent == 'beer';
// 		});
// 	}).run(function (){
// 		test.done();
// 	});
// });

casper.test.begin('assertNotVisible() tests', 1, function(test){
	casper.start().then(function (){
		this.setContent('<div class="foo" style="display:none">boo</div>');
		test.assertNotVisible('.foo');
	}).run(function (){
		test.done();
	});
});