var brower = require('casper').create();  
var productprice;

brower.start();


brower.thenOpen('http://www.amazon.cn/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6%E4%B8%9B%E4%B9%A6-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%8F%AF%E5%A4%8D%E7%94%A8%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%BD%AF%E4%BB%B6%E7%9A%84%E5%9F%BA%E7%A1%80-Erich-Gamma/dp/B001130JN8/ref=sr_1_1?s=books&ie=UTF8&qid=1394283734&sr=1-1&keywords=%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F');

brower.then(function getPrice(){
	productprice =  brower.evaluate(function getPriceFromPage(){
		return price = document.getElementsByClassName('a-color-price')[0].innerText.replace('￥', '').trim();
	});
});


brower.then(function outputProductPrice(){
	console.log(productprice);
	brower.exit();
});

brower.run();