// global warming params. 
// aluksi vain yksi, refaktoroidaan kun saadaan joku runko kasaan
define(function() {
        var name = "Traktori";
        var  size = 4; // 1-5
        var coMultiplier = 1000; // 1000g * size
        var rangeMin = 1;
        var rangeMax = 5;
        return {
            getName: function() {
            	return this.name;
            },
            getMin: function() {
            	return rangeMin;
            },
            getMax: function() {
            	return rangeMax;
            },
            getEmission: function() {
            	return coMultiplier * size;
            }
        }
    }
);
