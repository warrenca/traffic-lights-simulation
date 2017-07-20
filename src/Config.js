const DIRECTIONS = [
	['NS','NE','SN','SW'],
	['NW','SE'],
	['WN','WE','EW','ES'],
	['EN','WS'],
];
const TRAFFIC_LIGHTS = {
	'NS': 'S-down',
	'NE': 'S-right',
	'SN': 'N-up',
	'SW': 'N-left',
	'NW': 'S-left',
	'SE': 'N-right',
	'WN': 'E-up',
	'WE': 'E-right',
	'EW': 'W-left',
	'ES': 'W-down',
	'EN': 'W-up',
	'WS': 'E-down',
};

const GREEN_LIGHT_DURATION  = 10000; //270000; 60 * 1000 * 4.5; // 4mins30sec
const YELLOW_LIGHT_DURATION = 3000; //30000; 30 * 1000; // 30sec
const DURATION_OF_SIMULATION = 60000; //1800000; 60 * 30 * 1000  // 30mins
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
}

module.exports = Config;
