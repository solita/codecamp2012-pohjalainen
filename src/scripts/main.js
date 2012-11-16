require.config({
	baseUrl: 'scripts/app',
	paths: {
	      lib: '../lib'
		},
	    urlArgs: "timestamp=" + new Date().getTime()
})

require(['jquery', 'gwparameter'], 
	function($, GlobalWarmingParameter) {
	    var p = new GlobalWarmingParameter("kökkötraktori");

	    $("#traktori").prop("min", p.getMin());
	    $("#traktori").prop("max", p.getMax());
});