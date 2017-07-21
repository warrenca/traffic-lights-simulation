import Config from './Config';

const config = new Config();

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

class Draw {
	quick(trafficLights) {
		if ('browser' in process && process.browser) {
			for (let direction in trafficLights) {
				let elementId = trafficLights[direction].name;
				let color = trafficLights[direction].color;
				window.document.getElementById(elementId).style.color = color;
			}
		}
	}

	traffic(trafficLights) {
		if (config.getLogType() === 'simple') {
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
			(new Logger).write(trafficLights);
		}

		this.quick(trafficLights);
	}
}

module.exports.Logger = Logger;
module.exports.Draw = Draw;
