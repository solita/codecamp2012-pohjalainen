require.config({
  paths: {
    "app": "app"
  }
})

require(['lib/jquery-1.8.2.min', 'app/gwparameter'], 
	function($, gw) {
		alert(gw.getMin());
});