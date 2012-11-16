// global warming params. 
// aluksi vain yksi, refaktoroidaan kun saadaan joku runko kasaan
define(function() {
        //return an object to define the gw param module
        return {
			name: "Traktori",
			size: 4, // 1-5
			coMultiplier : 1000, // 1000g * size
            getName: function() {
            	return this.name;
            },
            getMin: function() {
            	return 1;
            },
            getMax: function() {
            	return 5;
            },
            getEmission: function() {
            	return coMultiplier * size;
            }
        }
    }
);
