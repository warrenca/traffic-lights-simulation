import Config from './Config';

const config = new Config();

/**
 * Logger class
 *
 * Writes the log in a textarea when viewed from the browser
 * or write it in the console when in command line
 */
class Logger {
	write(message) {
		if (process.env.NODE_ENV !== 'test') {
			if ('browser' in process && process.browser) {
				document.getElementById('logs').value += `${new Date()} ${message}\n`;
			} else {
				console.log(`${new Date()} ${message}`);
			}
		}
	}
}

/**
 * Draw Class
 *
 * A class the describes what's the current traffic flow and the traffic lights color
 */
class Draw {
	/**
	 * quick - A method that simply changes the color of the traffic lights
	 *
	 * @param  array trafficLights The traffic lights from Config.TRAFFIC_LIGHTS
	 * @return null
	 */
	quick(trafficLights) {
		if ('browser' in process && process.browser) {
			for (let direction in trafficLights) {
				let elementId = trafficLights[direction].name;
				let color = trafficLights[direction].color;
				window.document.getElementById(elementId).style.color = color;
			}
		}
	}

	/**
	 * traffic - Describe the current traffic flow and the traffic lights color
	 *
	 * @param  array trafficLights The traffic lights from Config.TRAFFIC_LIGHTS
	 * @return null
	 */
	traffic(trafficLights) {
		if (config.getLogType() === 'simple') {
			// Simplify the traffic flow and lights description
			let lights = {};
			for (let direction in trafficLights) {
				if (trafficLights[direction].color !== 'red') {
					lights[direction] = trafficLights[direction].color
				}
			}

			if (Object.keys(lights).length === 0) {
				(new Logger).write('All lights are red');
			} else {
				(new Logger).write(JSON.stringify(lights));
			}
		} else {
			// More detailed traffic flow dna lights description
			(new Logger).write(trafficLights);
		}

		this.quick(trafficLights);
	}
}

module.exports.Logger = Logger;
module.exports.Draw = Draw;
