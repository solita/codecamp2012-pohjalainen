require.config({
	baseUrl: 'scripts/app',
	paths: {
	      lib: '../lib'
		},
	    urlArgs: "timestamp=" + new Date().getTime()
})

require(['jquery', 'gwparameter'], 
	function($, gw) {
		$("#traktori").prop("min", gw.getMin());
		$("#traktori").prop("max", gw.getMax());
});