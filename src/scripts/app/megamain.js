
define(['jquery', 'gwparameter', 'htmlutils', 'fpstimer', 'warmingmodel'], 
	function($, GlobalWarmingParameter, htmlutils, FpsTimer, GlobalWarmingModel) {
		var parameters = new Array(		  
			new GlobalWarmingParameter("tractor", 1, 5, 4, 1000),
			new GlobalWarmingParameter("car", 1, 5, 4, 100),
			new GlobalWarmingParameter("electricity", 1, 5000, 1500, 1)
		);

		var gwm = new GlobalWarmingModel(parameters);

		var timer = new FpsTimer(50);
		var currentFrame = 0;

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
	    	currentFrame += 1;

	    	for (var i in parameters) {
	    		parameters[i].setValue(htmlutils.getValue(parameters[i].getName()));
	    	}
	    	gwm.updateState();

	    	$("#status").text("pitoisuus: " + gwm.getCoConcentration() + ". Sea level: " + gwm.getSeaLevel() + ". Flooding distance: " + gwm.getFloodingDistance()
	    		+ ". Temperature change: " + gwm.getTemperatureChange() +
	    		". Years passed : " + currentFrame
	    		);

	   		drawBox(gwm.getFloodingDistance(),250); //TODO get values
	    }

	    var drawBox = function(width, height,name) {
				var land=document.getElementById("land");
				var ctx=land.getContext("2d");
				ctx.fillStyle="#a73e25";
				ctx.fillRect(0,0,200,250);

				ctx.fillStyle="#0051ff"; 
				ctx.fillRect(200/2-width/2,0,width,height);
			
				
			
	    }

	    return megamain;
});

