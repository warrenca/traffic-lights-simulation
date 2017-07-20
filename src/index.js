import Config from './Config';
import Logger from './Logger';
import Flow from './Flow';

const config = new Config();
const logger = new Logger();
const flow = new Flow(config);

window.onload= ()=>{
	logger.write(`The program will only run for ${config.getDurationOfSimulation()/1000}s`);
	flow.start();
	setTimeout(()=>{
  	flow.hold();
	}, config.getDurationOfSimulation());
};
