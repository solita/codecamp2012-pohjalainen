
define(['jquery', 'gwparameter'], 
	function($, GlobalWarmingParameter) {
	    var megamain = {
	    	init: function(){
	    		 var p = new GlobalWarmingParameter("kökkötraktori");
			     $("#traktori").prop("min", p.getMin());
			     $("#traktori").prop("max", p.getMax());

	    	}
	    }
	    return megamain;
});