import ParentConfig from '../src/Config';

const GREEN_LIGHT_DURATION  = 500; //270000; 60 * 1000 * 4.5; // 4mins30sec
const YELLOW_LIGHT_DURATION = 30; //30000; 30 * 1000; // 30sec
const DURATION_OF_SIMULATION = 3000; //1800000; 60 * 30 * 1000  // 30mins

class Config extends ParentConfig {
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
