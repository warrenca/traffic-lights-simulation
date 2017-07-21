const DIRECTIONS = [
	['NS','NE','SN','SW'],
	['NW','SE'],
	['WN','WE','EW','ES'],
	['EN','WS'],
];
const TRAFFIC_LIGHTS = {
	'NS': {'name':'S-down'	, 'color':'red'},
	'NE': {'name':'S-right'	, 'color':'red'},
	'SN': {'name':'N-up'		, 'color':'red'},
	'SW': {'name':'N-left'	, 'color':'red'},
	'NW': {'name':'S-left'	, 'color':'red'},
	'SE': {'name':'N-right'	, 'color':'red'},
	'WN': {'name':'E-up'		, 'color':'red'},
	'WE': {'name':'E-right'	, 'color':'red'},
	'EW': {'name':'W-left'	, 'color':'red'},
	'ES': {'name':'W-down'	, 'color':'red'},
	'EN': {'name':'W-up'		, 'color':'red'},
	'WS': {'name':'E-down'	, 'color':'red'},
};

const GREEN_LIGHT_DURATION  =   270000; //270000; 60 * 1000 * 4.5; // 4mins30sec
const YELLOW_LIGHT_DURATION = 	 30000; //270000; 30 * 1000; // 30sec
const DURATION_OF_SIMULATION = 1800000; //1800000; 60 * 30 * 1000  // 30mins
const LOG_TYPE = 'simple';

class Config {
	getDirections() {
		return DIRECTIONS;
	}

	getTrafficLights() {
		return TRAFFIC_LIGHTS;
	}

	getGreenLightDuration() {
		return GREEN_LIGHT_DURATION;
	}

	getYellowLightDuration() {
		return YELLOW_LIGHT_DURATION;
	}

	getDurationOfSimulation() {
		return DURATION_OF_SIMULATION;
	}

	getLogType() {
		return LOG_TYPE;
	}
}

module.exports = Config;
