import Logger from './Logger';

class Lights {
	constructor(config) {
		this.config = config;
		this.logger = new Logger();
		this.trafficLights = config.getTrafficLights();
	}

	setGreenLights() {
		let lights = this.config.getDirections()[this.getDirectionIndex()];
		lights.map((direction) => {this.trafficLights[direction].color = 'green';});
		this.draw();
	}

	setYellowLights() {
		let lights = this.config.getDirections()[this.getDirectionIndex()];
		lights.map((direction) => {this.trafficLights[direction].color = 'orange';});
		this.draw();
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

		this.draw();
	}

	setDirectionIndex(directionIndex) {
		this.directionIndex = directionIndex;
	}

	getDirectionIndex() {
		return this.directionIndex;
	}

	draw() {
		for (let direction in this.trafficLights) {
			let elementId = this.trafficLights[direction].name;
			let color = this.trafficLights[direction].color;
			window.document.getElementById(elementId).style.color = color;
		}
		this.logger.write(JSON.stringify(this.trafficLights));
	}
}

module.exports = Lights;
