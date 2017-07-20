import Logger from './Logger';

class Lights {
	constructor(config) {
		this.config = config;
		this.logger = new Logger();
	}

	setGreenLights() {
		this.greenLights = this.config.getDirections()[this.getDirectionIndex()];
		this.logger.write(`Green ${this.greenLights}`);
		this.draw(this.greenLights, 'green');
	}

	setYellowLights() {
		this.yellowLights = this.config.getDirections()[this.getDirectionIndex()];
		this.logger.write(`Yellow ${this.yellowLights}`);
		this.draw(this.yellowLights, 'orange');
	}

	setRedLights() {
		let directions = this.config.getDirections();

		// merge 2-dimentional array
		this.redLights = directions.map(e => e.join(',')).join(',').split(',');
		this.logger.write(`Red ${this.redLights}`);

		this.draw(this.redLights, 'red');
	}

	setDirectionIndex(directionIndex) {
		this.directionIndex = directionIndex;
	}

	getDirectionIndex() {
		return this.directionIndex;
	}

	draw(lights, color) {
		for (let i in lights) {
			let light = lights[i];
			let lightId = this.config.getTrafficLights()[light];
			window.document.getElementById(lightId).style.color = color;
		}
	}
}

module.exports = Lights;
