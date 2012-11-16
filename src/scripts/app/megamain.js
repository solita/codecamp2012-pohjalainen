
define(['jquery', 'gwparameter', 'htmlutils', 'fpstimer', 'warmingmodel'], 
	function($, GlobalWarmingParameter, htmlutils, FpsTimer, GlobalWarmingModel) {
		var parameters = new Array(		  
			new GlobalWarmingParameter("tractor", 1, 5, 4, 1000),
			new GlobalWarmingParameter("car", 1, 5, 4, 100),
			new GlobalWarmingParameter("electricity", 1, 5000, 1500, 1)
		);

		var gwm = new GlobalWarmingModel(parameters);

		var timer = new FpsTimer(50);

	    var megamain = {
	    	init: function() {
	    		 var p = parameters.kökkötraktori;

	    		for (var i in parameters) {
			     	htmlutils.add(parameters[i]);
			     }

			     setInterval(draw, 100); // 10 fps target 
	    	}
	    }

	    var draw = function() {
	    	timer.refreshFps();

	    	for (var i in parameters) {
	    		parameters[i].setValue(htmlutils.getValue(parameters[i].getName()));
	    	}
	    	gwm.updateState();

	    	console.log(gwm.getCoConcentration());
	    	console.log(gwm.getSeaLevel());
	    	console.log(gwm.getFloodingDistance());
	    }

	    return megamain;
});

