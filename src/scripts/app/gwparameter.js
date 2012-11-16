// global warming params. or was it local warming. Heat is on anyway.
define(function() {
        var name = "Traktori";
        var value = 4; // 1-5
        var coMultiplier = 1000; // 1000g * size
        var rangeMin = 1;
        var rangeMax = 5;
	// rakentaja
	function GlobalWarmingParameter(name, rangeMin, rangeMax, value, coMultiplier) {
	  this.name = name;
      this.rangeMin = rangeMin;
      this.rangeMax = rangeMax;
      this.value = value;
      this.coMultiplier = coMultiplier;
	  return (this);
	}
	
	GlobalWarmingParameter.prototype.getName = function() {
            	return this.name;
	};
	GlobalWarmingParameter.prototype.getMin = function() {
	    return this.rangeMin;
	};
    GlobalWarmingParameter.prototype.getMax = function() {
        return this.rangeMax;
    };
    GlobalWarmingParameter.prototype.getEmission = function() {
        return this.value * this.coMultiplier;
    };
    GlobalWarmingParameter.prototype.getValue = function() {
        return this.value;
    };
    GlobalWarmingParameter.prototype.getCoMultiplier = function() {
        return this.coMultiplier;
    };

	return (GlobalWarmingParameter);
    }    
);
