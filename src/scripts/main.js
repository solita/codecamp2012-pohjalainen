require.config({
	baseUrl: 'scripts/app',
	paths: {
	      lib: '../lib'
		},
	    urlArgs: "timestamp=" + new Date().getTime()
})

require(['lib/jquery-1.8.2.min', 'gwparameter'], 
	function($, gw) {
		alert(gw.getMin());
});