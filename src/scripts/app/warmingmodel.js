// very scientific and accurate global warming calculation model
define(['gwparameter'],
     function(GlobalWarmingParameter) {
        var params; // sources of warming and co emissions        
        var coConcentration; // current value 
        var seaLevel; // current sea level
        var floodingDistance; // current flooding distance;

        // calculation params      
        var initialCoConcentration = 200;
        var initialFloodingDistance = 10; // 10 metriä rannasta normaalisti
        var coDecreaseFromSinks = 3000; // metsät yms. hiilinielut imee 
        var initialSeaLevel = 0;
        var seaLevelMax = 10; // 10 metriä jos kaikki jää sulaa
        var arcticIceMeltingPoint = 300; // tästä alkaa sulaminen
        var floodingPerSeaLevel = 10; // 10 metriä lisää tulviin per 1 metri sulanutta jäätä

	// rakentaja
	function GlobalWarmingModel(params) {
        this.params = params;
    	return (this);
	}

    GlobalWarmingModel.prototype.getCoConcentration = function() {
        return coConcentration;
    }

    GlobalWarmingModel.prototype.getSeaLevel = function() {
        return seaLevel;
    }
    
    GlobalWarmingModel.prototype.getFloodingDistance = function() {
        return floodingDistance;
    }

    // global warming etenee, kapitalismi mätänee
    GlobalWarmingModel.prototype.updateState = function() {
        // TODO: modeloidaan modeloidaan
    }

	return (GlobalWarmingModel);
    }    
);
