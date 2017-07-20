class Logger {
	write(message) {
		document.getElementById('logs').value += `${new Date()} ${message}\n`;
	}
}

module.exports = Logger;
