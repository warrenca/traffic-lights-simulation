import {Logger, Draw} from './Util';

const TRAFFIC_LIGHT_GREEN = 'green';
// We'll use orange because it looks better on the web
const TRAFFIC_LIGHT_YELLOW = 'orange';
const TRAFFIC_LIGHT_RED = 'red';

/**
 * Traffic Lights class
 *
 * This class controls the colors of the traffic lights
 */
class Lights {
	constructor(config) {
		this.config = config;
		this.logger = new Logger();
		this.trafficLights = config.getTrafficLights();
		this.draw = new Draw();
	}

	/**
	 * setGreenLights - Set the traffic lights to green based on the direction of the traffic
	 *
	 * @return null
	 */
	setGreenLights() {
		// Get the array traffic lights from the config
		let lights = this.config.getDirections()[this.getDirectionIndex()];

		// Set the traffic lights to green based on the direction of the traffic
		lights.map((direction) => {this.trafficLights[direction].color = TRAFFIC_LIGHT_GREEN;});

		// Set the color of the traffic lights visually and print a log
		this.draw.traffic(this.getTrafficLights());
	}

	/**
	 * setYellowLights - Set the traffic lights to yellow based on the direction of the traffic
	 *
	 * @return null
	 */
	setYellowLights() {
		// Get the array traffic lights from the config
		let lights = this.config.getDirections()[this.getDirectionIndex()];

		// Set the traffic lights to green based on the direction of the traffic
		lights.map((direction) => {this.trafficLights[direction].color = TRAFFIC_LIGHT_YELLOW;});

		// Set the color of the traffic lights visually and print a log
		this.draw.traffic(this.getTrafficLights());
	}

	/**
	 * setRedLights - Set the traffic lights to red if they are not green
	 *
	 * @return null
	 */
	setRedLights() {
		// Get the array traffic lights from the config
		let currentGreenLights = this.config.getDirections()[this.getDirectionIndex()];

    // Loop through the greenLights and set the rest to red lights
		for (let direction in this.trafficLights) {
			let elementId = this.trafficLights[direction].name;
			if (currentGreenLights.indexOf(elementId) >= 0) {
				continue;
			}
			this.trafficLights[direction].color = TRAFFIC_LIGHT_RED;
		}

		// Set the color of the traffic lights visually and print a log
		this.draw.traffic(this.getTrafficLights());
	}

	/**
	 * setDirectionIndex - Sets the directionIndex
	 * The index basically points to Config.DIRECTIONS
	 *
	 * @param  int directionIndex The index from one of the elements in Config.DIRECTIONS, the current traffic flow
	 * @return null
	 * @throw Error
	 */
	setDirectionIndex(directionIndex) {
		if (directionIndex < 0 || directionIndex >= this.config.getDirections().length) {
			throw new Error(`directionIndex is out of range`);
		}
		this.directionIndex = directionIndex;
	}

	/**
	 * getDirectionIndex - get the current directionIndex
	 *
	 * @return int
	 */
	getDirectionIndex() {
		return this.directionIndex;
	}

	/**
	 * getTrafficLights - get the trafficLights array
	 *
	 * @return array
	 */
	getTrafficLights() {
		return this.trafficLights;
	}
}

module.exports = Lights;
