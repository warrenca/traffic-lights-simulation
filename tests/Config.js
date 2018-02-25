import ParentConfig from '../src/Config';

// Use fast delays for testing purposes
const GREEN_LIGHT_DURATION  = 500;
const YELLOW_LIGHT_DURATION = 30;
const DURATION_OF_SIMULATION = 3000;

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
