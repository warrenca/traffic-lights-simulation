import Config from './Config';
import {Logger} from './Util';
import Flow from './Flow';

const config = new Config();
const logger = new Logger();
const flow = new Flow(config);

const doIt = () => {
	logger.write(`The program will run for ${config.getDurationOfSimulation()/1000}s`);
	flow.start();
	setTimeout(()=>{
		flow.hold();
	}, config.getDurationOfSimulation());
};

if ('browser' in process && process.browser) {
	window.onload = ()=>{ doIt(); };
} else {
	doIt();
}
