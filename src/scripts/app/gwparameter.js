// global warming params. 
// aluksi vain yksi, refaktoroidaan kun saadaan joku runko kasaan
define(function() {
        var name = "Traktori";
        var  size = 4; // 1-5
        var coMultiplier = 1000; // 1000g * size
        var rangeMin = 1;
        var rangeMax = 5;
	// rakentaja
	function GlobalWarmingParameter(name) {
	  this.name = name;
	  return (this);
	}
	
	
	GlobalWarmingParameter.prototype.getName = function() {
            	return name;
	};
	GlobalWarmingParameter.prototype.getMin = function() {
	    return rangeMin;
	};
	GlobalWarmingParameter.prototype.getMax = function() {
	    return rangeMax;
	};
	return (GlobalWarmingParameter);

	/*
            getEmission : function() {
            	return coMultiplier * size;
            }
	*/


        }
    
);
