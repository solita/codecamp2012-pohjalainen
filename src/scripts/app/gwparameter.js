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
            	return name;
	};
	GlobalWarmingParameter.prototype.getMin = function() {
	    return rangeMin;
	};
    GlobalWarmingParameter.prototype.getMax = function() {
        return rangeMax;
    };
    GlobalWarmingParameter.prototype.getEmission = function() {
        return value * coMultiplier;
    };
    GlobalWarmingParameter.prototype.getValue = function() {
        return value;
    };
    GlobalWarmingParameter.prototype.getCoMultiplier = function() {
        return coMultiplier;
    };

	return (GlobalWarmingParameter);
    }    
);
