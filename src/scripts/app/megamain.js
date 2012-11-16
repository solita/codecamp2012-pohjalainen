
define(['jquery', 'gwparameter', 'htmlutils', 'fpstimer'], 
	function($, GlobalWarmingParameter, htmlutils, FpsTimer) {
		var parameters = new Array(		  
			new GlobalWarmingParameter("kökkötraktori", 1, 5, 4, 1000),
			new GlobalWarmingParameter("auto", 1, 5, 4, 100),
			new GlobalWarmingParameter("sähkönkulutus", 1, 5000, 1500, 1)
		);
		var timer = new FpsTimer(50);

	    var megamain = {
	    	init: function() {
	    		 var p = parameters[0];

			     htmlutils.add(parameters[0]);
			     htmlutils.add(parameters[1]);
			     htmlutils.add(parameters[2]);

			     setInterval(draw, 100); // 10 fps target 
	    	}
	    }

	    var draw = function() {
	    	timer.refreshFps();
	    	console.log(timer.getFps());
	    }

	    return megamain;
});

