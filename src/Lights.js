import {Logger, Draw} from './Util';

class Lights {
	constructor(config) {
		this.config = config;
		this.logger = new Logger();
		this.trafficLights = config.getTrafficLights();
		this.draw = new Draw();
	}

	setGreenLights() {
		let lights = this.config.getDirections()[this.getDirectionIndex()];
		lights.map((direction) => {this.trafficLights[direction].color = 'green';});
		this.draw.traffic(this.getTrafficLights());
	}

	setYellowLights() {
		let lights = this.config.getDirections()[this.getDirectionIndex()];
		lights.map((direction) => {this.trafficLights[direction].color = 'orange';});
		this.draw.traffic(this.getTrafficLights());
	}

	setRedLights() {
		let currentGreenLights = this.config.getDirections()[this.getDirectionIndex()];

		for (let direction in this.trafficLights) {
			let elementId = this.trafficLights[direction].name;
			if (currentGreenLights.indexOf(elementId) >= 0) {
				continue;
			}
			this.trafficLights[direction].color = 'red';
		}

		this.draw.traffic(this.getTrafficLights());
	}

	setDirectionIndex(directionIndex) {
		this.directionIndex = directionIndex;
	}

	getDirectionIndex() {
		return this.directionIndex;
	}

	getTrafficLights() {
		return this.trafficLights;
	}
}

module.exports = Lights;
