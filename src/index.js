import Config from './Config';
import {Logger} from './Util';
import Flow from './Flow';

const config = new Config();
const logger = new Logger();
const flow = new Flow(config);

// Function to start the simulation
const startSimulation = () => {
	logger.write(`The program will run for ${config.getDurationOfSimulation()/1000}s`);
	flow.start();

	// Stop the simulation when it reached the duration of simulation
	setTimeout(()=>{
		flow.hold();
	}, config.getDurationOfSimulation());
};

if ('browser' in process && process.browser) {
	// Run the simulation upon browser load
	window.onload = ()=>{ startSimulation(); };
} else {
	// Start the simulation from a command line
	startSimulation();
}
