/**
 * Traffic directions
 */
const DIRECTIONS = [
	['NS','NE','SN','SW'],
	['NW','SE'],
	['WN','WE','EW','ES'],
	['EN','WS'],
];

/**
 * Traffic lights name and initial color based on the traffic directions
 */
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


/* The green light duration */
const GREEN_LIGHT_DURATION  =   270000; //270000; 60 * 1000 * 4.5; // 4mins30sec

/* The yellow light duration */
const YELLOW_LIGHT_DURATION = 	30000; //30000; 30 * 1000; // 30sec

/* The total duration of simulation */
const DURATION_OF_SIMULATION = 1800000; //1800000; 60 * 30 * 1000  // 30mins

/* */
const LOG_TYPE = 'simple';


class Config {
	/**
	 * getDirections - Get the array of traffic directions
	 *
	 * @return array
	 */
	getDirections() {
		return DIRECTIONS;
	}

	/**
	 * getTrafficLights - Get the array of traffic lights
	 *
	 * @return array
	 */
	getTrafficLights() {
		return TRAFFIC_LIGHTS;
	}

	/**
	 * getGreenLightDuration - Get the duration of the green light
	 *
	 * @return int
	 */
	getGreenLightDuration() {
		return GREEN_LIGHT_DURATION;
	}

	/**
	 * getYellowLightDuration - Get the duration of yellow light
	 *
	 * @return int
	 */
	getYellowLightDuration() {
		return YELLOW_LIGHT_DURATION;
	}

	/**
	 * getDurationOfSimulation - description
	 *
	 * @return int
	 */
	getDurationOfSimulation() {
		return DURATION_OF_SIMULATION;
	}

	/**
	 * getLogType - Get the current log type
	 *
	 * @return string
	 */
	getLogType() {
		return LOG_TYPE;
	}
}

module.exports = Config;
