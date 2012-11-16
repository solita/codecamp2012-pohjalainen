define(function() {


	var fps = 0, startTime=new Date(), now, lastUpdate = (new Date())*1 - 1;
	// The higher this value, the less the FPS will be affected by quick changes
	// Setting this to 1 will show you the FPS of the last sampled frame only
	var fpsFilter = 50;

	function FpsTimer(fpsFilter) {
		this.fpsFilter = fpsFilter;
		return (this);
	}

	FpsTimer.prototype.refreshFps = function() {
		var thisFrameFPS = 1000 / ((now=new Date()) - lastUpdate);
		fps += (thisFrameFPS - fps) / fpsFilter;
		lastUpdate = now;
	};

	FpsTimer.prototype.getFps = function() { return fps; };

	FpsTimer.prototype.elapsed = function() { return ((new Date())-startTime); }
	
	return (FpsTimer);
});

