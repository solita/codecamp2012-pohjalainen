
define(['jquery', 'gwparameter'], 
	function($, GlobalWarmingParameter) {
	    var megamain = {
	    	init: function(){
	    		 var p = new GlobalWarmingParameter("kökkötraktori", 1, 5, 4, 1000);
			     $("#traktori").prop("min", p.getMin());
			     $("#traktori").prop("max", p.getMax());

	    	}
	    }
	    return megamain;
});