import Config from './Config';
import {Logger} from '../src/Util';
import Lights from '../src/Lights';
import {assert} from 'chai';

const config = new Config();

describe('Lights', () => {
	const lights = new Lights(config);

	it('Should get/set directionIndex', () => {
		lights.setDirectionIndex(1);
		assert.equal(1, lights.getDirectionIndex());
	});

	it('Should set green lights', () => {
		let directionIndex = 0;
		lights.setDirectionIndex(directionIndex);
		lights.setRedLights();
		lights.setGreenLights();

		config.getDirections()[directionIndex].map((direction) => {
			assert.equal('green', lights.trafficLights[direction].color);
		});
	});

	it('Should set yellow lights', () => {
		let directionIndex = 1;
		lights.setDirectionIndex(directionIndex);
		lights.setRedLights();
		lights.setGreenLights();

		config.getDirections()[directionIndex].map((direction) => {
			assert.equal('green', lights.trafficLights[direction].color);
		});
	});

	it('Should check for all red lights', () => {
		let directionIndex = 2;
		lights.setDirectionIndex(directionIndex);
		lights.setRedLights();
		lights.setGreenLights();

		let greenLights = config.getDirections()[lights.getDirectionIndex()];
		let allDirections = config.getDirections().map(e => e.join(',')).join(',').split(',');

		// remove greenLights from allDirections
		const allRedLights = allDirections.filter(i => greenLights.indexOf(i) < 0 );
		allRedLights.map((direction) => {
			assert.equal('red', lights.trafficLights[direction].color);
		});
	});

	it('Should set/get trafficLights', () => {
		const trafficLights = JSON.stringify(lights.getTrafficLights());
		const configTrafficLights = JSON.stringify(config.getTrafficLights());

		assert.equal(trafficLights, configTrafficLights);
	});
});
