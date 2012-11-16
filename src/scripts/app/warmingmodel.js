// very scientific and accurate global warming calculation model
define(['gwparameter'],
     function(GlobalWarmingParameter) {
        var params; // sources of warming and co emissions        
        var coConcentration; // current value 
        var seaLevel; // current sea level
        var floodingDistance; // current flooding distance;
        var temperatureIncrease; // avg temp increase

        // calculation params      
        var initialCoConcentration = 200;
        var initialTemperatureIncrease = 0;
        var initialFloodingDistance = 10; // 10 metriä rannasta normaalisti
        var coDecreaseFromSinks = 3000; // metsät yms. hiilinielut imee 
        var initialSeaLevel = 0;
        var seaLevelMax = 10; // 10 metriä jos kaikki jää sulaa
        var tempIncreasePoint = 300; // lämpötilan nousu
        var arcticIceMeltingPoint = 0.3; // 0.3 celciusta -> tästä alkaa sulaminen
        var floodingPerSeaLevel = 10; // 10 metriä lisää tulviin per 1 metri sulanutta jäätä

	// rakentaja
	function GlobalWarmingModel(params) {
        this.params = params;
        this.coConcentration = initialCoConcentration;
        this.floodingDistance = initialFloodingDistance;
        this.seaLevel = initialSeaLevel;
        this.temperatureIncrease = initialTemperatureIncrease;
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

    // global warming etenee, kapitalismi mätänee
    GlobalWarmingModel.prototype.updateState = function() {
        if (this.coConcentration > tempIncreasePoint) {
            this.temperatureIncrease += ((this.coConcentration - tempIncreasePoint) / 500);
        }
        if (this.temperatureIncrease > arcticIceMeltingPoint) {
            this.seaLevel += ((this.temperatureIncrease - arcticIceMeltingPoint) / 100);
        }
        if (this.seaLevel > seaLevelMax) {
            this.seaLevel = seaLevelMax;
        }
        
        this.coConcentration += 10; // TODO: real calculation        
        this.floodingDistance = initialFloodingDistance + (this.seaLevel * floodingPerSeaLevel);
//        this.floodingDistance = initialFloodingDistance; // + (this.seaLevel * this.floodingPerSeaLevel);
    }

	return (GlobalWarmingModel);
    }    
);
