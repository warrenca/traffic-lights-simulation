import Config from './Config';
import Flow from '../src/Flow';
import Lights from '../src/Lights';
import {assert} from 'chai';

const config = new Config();

describe('Flow', () => {
	const flow = new Flow(config);
	it('Should start!', () => {
		flow.start();
		assert.equal(true, flow.getStatus());
	});

	it('Should stop', () => {
		flow.hold();
		assert.equal(false, flow.getStatus());
	});

	it('Should get/set directionIndex', () => {
		flow.setDirectionIndex(1);
		assert.equal(1, flow.getDirectionIndex());
	});

	it('Should throw error when setting out of range directionIndex', () => {
		assert.throws(()=>{flow.setDirectionIndex(5)}, Error, 'directionIndex is out of range');
	});

	it('Should get the initial directionIndex on start', () => {
		const flow = new Flow(config);
		flow.start();
		assert.equal(0, flow.getDirectionIndex());
	});

	it('Should get the next directionIndex back to 0', () => {
		const flow = new Flow(config);
		flow.start();
		flow.setDirectionIndex(3);
		assert.equal(0, flow.getNextDirectionIndex());
	});

	it('Should just get the directionIndex', () => {
		flow.setDirectionIndex(2);
		assert.equal(2, flow.getDirectionIndex());
	});

	it('Should move', async () => {
		const flow = new Flow(config);
		flow.status = true;
		flow.setDirectionIndex(1);
		flow.move();

		const duration = config.getGreenLightDuration() + config.getYellowLightDuration() + 50;
		await flow.sleep(duration);
		assert.equal(2, flow.getDirectionIndex());
	});

	it('Should get a false status when flow stopped running', async () => {
		const flow = new Flow(config);
		flow.start();
		setTimeout(()=>{
			flow.hold();
		}, 2000);

		await flow.sleep(2000);
		assert.equal(false, flow.getStatus());
	});

	it('Should get a true status while flow is still running', async () => {
		const flow = new Flow(config);
		flow.start();
		setTimeout(()=>{
			flow.hold();
		}, 2000);

		await flow.sleep(1000);
		assert.equal(true, flow.getStatus());
	});
});
