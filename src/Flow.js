import Lights from './Lights';
import {Logger} from './Util';

class Flow {
	constructor(config) {
		this.config = config;
		this.lights = new Lights(config);
		this.logger = new Logger();
	}

	start() {
		this.status = true;
		this.logger.write('Start!');
		this.setDirectionIndexAndMove(this.getNextDirectionIndex());
	}

	hold() {
		this.logger.write('End!');
		this.status = false;
	}

	setDirectionIndexAndMove(directionIndex) {
		this.setDirectionIndex(directionIndex).move();
	}

	async move() {
		if (this.getStatus()) {
			this.lights.setRedLights();
			this.lights.setGreenLights();
			await this.sleep(this.config.getGreenLightDuration());
			this.lights.setYellowLights();
			await this.sleep(this.config.getYellowLightDuration());

			this.setDirectionIndexAndMove(this.getNextDirectionIndex());
		}
	}

	setDirectionIndex(directionIndex) {
		if (directionIndex >= this.config.getDirections().length) {
			throw new Error(`directionIndex is out of range`);
		}
		this.directionIndex = directionIndex;
		this.lights.setDirectionIndex(directionIndex);
		return this;
	}

	getDirectionIndex() {
		return this.directionIndex;
	}

	getNextDirectionIndex() {
		if (typeof this.getDirectionIndex()==='undefined' || this.getDirectionIndex()+1 >= this.config.getDirections().length) {
			return 0
		}

		return this.getDirectionIndex() + 1;
	}

	sleep(ms) {
  	return new Promise(resolve => setTimeout(resolve, ms));
	}

	getStatus() {
		return this.status;
	}
}

module.exports = Flow;
