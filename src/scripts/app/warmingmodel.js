// very scientific and accurate global warming calculation model
define(['gwparameter'],
     function(GlobalWarmingParameter) {
        var params; // sources of warming and co emissions        
        var coConcentration; // current value 
        var seaLevel; // current sea level
        var floodingDistance; // current flooding distance;
        var temperatureChange; // avg temp increase

        // calculation params      
        var initialCoConcentration = 200;
        var initialtemperatureChange = 0;
        var initialFloodingDistance = 10; // 10 metriä rannasta normaalisti
        var coDecreaseFromSinks = 3000; // metsät yms. hiilinielut imee 
        var initialSeaLevel = 0;
        var seaLevelMax = 20; // 10 metriä jos kaikki jää sulaa
        var tempIncreasePoint = 300; // lämpötilan nousu
        var arcticIceMeltingPoint = 0.3; // 0.3 celciusta -> tästä alkaa sulaminen
        var arcticIceFreezingPoint = -0.3;
        var floodingPerSeaLevel = 10; // 10 metriä lisää tulviin per 1 metri sulanutta jäätä

	// rakentaja
	function GlobalWarmingModel(params) {
        this.params = params;
        this.coConcentration = initialCoConcentration;
        this.floodingDistance = initialFloodingDistance;
        this.seaLevel = initialSeaLevel;
        this.temperatureChange = initialtemperatureChange;
    	return (this);
	}

    GlobalWarmingModel.prototype.getCoConcentration = function() {
        return this.coConcentration;
    }

    GlobalWarmingModel.prototype.getSeaLevel = function() {
        return this.seaLevel;
    }
    
    GlobalWarmingModel.prototype.getFloodingDistance = function() {
        return this.floodingDistance;
    }

    GlobalWarmingModel.prototype.getTemperatureChange = function() {
        return this.temperatureChange;
    }


    // global warming etenee, kapitalismi mätänee
    GlobalWarmingModel.prototype.updateState = function() {
        if (this.coConcentration > tempIncreasePoint) {
            this.temperatureChange += ((this.coConcentration - tempIncreasePoint) / 50000);
        } else {
            this.temperatureChange -= 0.1;
        }
        if (this.temperatureChange > 3) {
            this.temperatureChange = 3;
        }
        if (this.temperatureChange < -3) {
            this.temperatureChange = -3;
        }
        if (this.temperatureChange > arcticIceMeltingPoint) {
            this.seaLevel += ((this.temperatureChange - arcticIceMeltingPoint) / 100);
        }
        if (this.temperatureChange < arcticIceFreezingPoint) {
            this.seaLevel += ((this.temperatureChange - arcticIceFreezingPoint) / 100);
        }
        if (this.seaLevel > seaLevelMax) {
            this.seaLevel = seaLevelMax;
        }
        if (this.seaLevel < 0 ) {
            this.seaLevel = 0;
        }

        for (var i = 0; i<this.params.length; i++) {
            this.coConcentration += this.params[i].getEmission();
        }
        this.coConcentration -= coDecreaseFromSinks;

        if (this.coConcentration < initialCoConcentration) {
            this.coConcentration = initialCoConcentration;
        }

        this.floodingDistance = initialFloodingDistance + (this.seaLevel * floodingPerSeaLevel);
    }

	return (GlobalWarmingModel);
    }    
);
