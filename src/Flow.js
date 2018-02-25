import Lights from './Lights';
import {Logger} from './Util';

/**
 * Traffic Flow class
 *
 * This controls the traffic flow by providing methods such as start, hold, move, etc.
 */
class Flow {
	constructor(config) {
		this.config = config;
		this.lights = new Lights(config);
		this.logger = new Logger();
	}

	/**
	 * start - simply start the simulation by getting the first direction and move
	 *
	 * @return null
	 */
	start() {
		this.status = true;
		this.logger.write('Start!');
		this.setDirectionIndexAndMove(this.getNextDirectionIndex());
	}

	/**
	 * hold - End the simulation
	 *
	 * @return null
	 */
	hold() {
		this.logger.write('End!');
		this.status = false;
	}

	/**
	 * setDirectionIndexAndMove - An alias function to set the direction
	 * and move the traffic
	 *
	 * @param  int directionIndex The index from one of the elements in Config.DIRECTIONS, the current traffic flow
	 * @return null
	 */
	setDirectionIndexAndMove(directionIndex) {
		this.setDirectionIndex(directionIndex).move();
	}

	/**
	 * move - Move the traffic to a certain direction.
	 * This also sets the correct traffic lights for each direction.
	 *
	 * @return null
	 */
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

	/**
	 * setDirectionIndex - Sets the directionIndex
	 * The index basically points to Config.DIRECTIONS
	 *
	 * @param  int directionIndex The index from one of the elements in Config.DIRECTIONS, the current traffic flow
	 * @return Flow
	 * @throw Error
	 */
	setDirectionIndex(directionIndex) {
		if (directionIndex < 0 || directionIndex >= this.config.getDirections().length) {
			throw new Error(`directionIndex is out of range`);
		}
		this.directionIndex = directionIndex;
		this.lights.setDirectionIndex(directionIndex);
		return this;
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
	 * getNextDirectionIndex - get the next directionIndex
	 *
	 * @return int
	 */
	getNextDirectionIndex() {
		if (typeof this.getDirectionIndex()==='undefined' || this.getDirectionIndex()+1 >= this.config.getDirections().length) {
		  // current directionIndex is not yet defined or out of range
			return 0
		}

    // Simply add 1 to the current directionIndex
		return this.getDirectionIndex() + 1;
	}

	/**
	 * sleep - simple utility to delay any execution
	 * setTimeout can cause a time drift, thought we're not going to solve it here.
	 * Below are some of the solutions.
	 * https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript
	 * https://gist.github.com/bjouhier/c7adb5f54caf9fc86d6e
	 *
	 * @param  int ms number of milliseconds to delay
	 * @return Promise
	 */
	sleep(ms) {
  	return new Promise(resolve => setTimeout(resolve, ms));
	}

	/**
	 * getStatus - Get the traffic flow status
	 *
	 * @return bool
	 */
	getStatus() {
		return this.status;
	}
}

module.exports = Flow;
