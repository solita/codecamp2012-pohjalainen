define(function() {
	
	var htmlutils = {
	    add: function(gwp){
			
			$("#sliders").append("<label for=\"" + gwp.getName() + "\">" + gwp.getName() + "<br/>");
			$("#sliders").append("<input id=\"" + gwp.getName() + "\" " +
				"type=\"range\" " +
				"min=\"" + gwp.getMin() + "\" " +
				"max=\"" + gwp.getMax() + "\" " +
				"step=\"1\" " +
				"value=\"" + gwp.getValue() + "\" /><br/>");
	   	},

	   	getValue: function(name) {
	   		return $("#" + name).prop("value");
	   	}
	}
    return htmlutils;
});