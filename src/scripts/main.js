require.config({
	baseUrl: 'scripts/app',
	paths: {
	      lib: '../lib'
		},
	    urlArgs: "timestamp=" + new Date().getTime()
})


require(['megamain'], 
	function(main) {
	   main.init();
});