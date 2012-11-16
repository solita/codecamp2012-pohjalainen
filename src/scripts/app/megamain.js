define(['jquery', 'gwparameter', 'htmlutils', 'fpstimer', 'warmingmodel'], 
	function($, GlobalWarmingParameter, htmlutils, FpsTimer, GlobalWarmingModel) {
		var parameters = new Array(		  
			new GlobalWarmingParameter("tractor", 1, 5, 3, 1000),
			new GlobalWarmingParameter("car", 1, 5, 3, 100),
			new GlobalWarmingParameter("electricity", 1, 3000, 1000, 1)
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

			     setInterval(draw, 1000/3); // 3 fps target 

	    	}
	    }

	    var draw = function() {
	    	timer.refreshFps();
	    	currentFrame += 1;

	    	for (var i in parameters) {
	    		parameters[i].setValue(htmlutils.getValue(parameters[i].getName()));
	    	}
	    	gwm.updateState();

	    	$("#status").html(
	    		"pitoisuus: <b>" + gwm.getCoConcentration() + "</b>" + 
	    		".<br /> Sea level: <b>" + gwm.getSeaLevel() + "</b>" +
	    		".<br /> Flooding distance: <b>" + gwm.getFloodingDistance() + "</b>"+ 
	    		".<br /> Temperature change: <b>" + gwm.getTemperatureChange() + "</b>" +
	    		".<br /> Years passed : <b>" + currentFrame + "</b>"
	    		);

	   		drawBox(gwm.getFloodingDistance(),250); //TODO get values

	   		var statusImage = "luutonen6.jpg";
	   		if (gwm.getTemperatureChange() < -2) {
			   	statusImage="talvikalassa.gif";
			} else if (gwm.getTemperatureChange() < -1) {
		   		statusImage="syrjahyppyja1.jpg";
		   	} else if (gwm.getTemperatureChange() < 0) {
		   		statusImage ="harma1.jpg";
		   	} else if (gwm.getTemperatureChange() < 1) {
		   		statusImage = "luutonen6.jpg";
		   	} else if (gwm.getTemperatureChange() < 2) {
		   		statusImage="pohjalainen_ulkoilee.jpeg";
		   	} else {
		   		statusImage="harmastapoikiakymmenen1.jpg";
		   	}
		   	$("#statusimg").prop("src", "img/" + statusImage);
	    }

	    var drawBox = function(width, height,name) {

	    		var img = new Image();   // Create new img element
				img.src = 'img/kartta.jpeg'; // Set source path

				img.onload = function(){
				var land=document.getElementById("land");
				var ctx=land.getContext("2d");

				ctx.save();
				ctx.rotate(Math.PI / 2);
				ctx.drawImage(img,0,-200);
				//ctx.fillStyle="#a73e25";
				//ctx.fillRect(0,0,200,250);

				ctx.restore();

				ctx.fillStyle="#0051ff"; 
				ctx.fillRect(200/2-width/2,0,width,height);

				}

	    }

	    return megamain;
});
