import Lights from './Lights';
import Logger from './Logger';

class Flow {
	constructor(config) {
		this.config = config;
		this.lights = new Lights(config);
		this.stop = false;
		this.logger = new Logger();
	}

	start() {
		this.logger.write('Start!');
		this.setDirectionIndexAndMove(this.getNextDirectionIndex());
	}

	hold() {
		this.logger.write('End!');
		this.stop = true;
	}

	setDirectionIndexAndMove(directionIndex) {
		this.setDirectionIndex(directionIndex).move();
	}

	async move() {
		if (!this.stop) {
			this.lights.setRedLights();
			this.lights.setGreenLights();
			await this.sleep(this.config.getGreenLightDuration());
			this.lights.setYellowLights();
			await this.sleep(this.config.getYellowLightDuration());

			let nextDirectionIndex = this.getNextDirectionIndex();
			this.setDirectionIndexAndMove(nextDirectionIndex);
		}
	}

	setDirectionIndex(directionIndex) {
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
}

module.exports = Flow;
