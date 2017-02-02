var page = require('webpage').create();

page.onAlert = function(message){
	if (message === '/xss/'){
		xss_exists = 1;
		ret = "Success, xss exists";
		phantom_exit(ret);
	}

	console.log("Alert: " + message);

	return true;
}

function check_dom_xss_vul(){
	return document.getElementsByTagName(dom_xss_mark).length;
}

page.open('http://fengxuan.com/test/xss1.php?id=<script>alert(/xss/)</script>', function(){
	phantom.exit();
});