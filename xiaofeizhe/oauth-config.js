'use strict';

module.exports = {
	provider: {
		protocol: "http", 
		host: "192.168.1.201:3001",
		profileUrl: "/api/userinfo"
	}, 
	consumer: {
		protocol: "http", 
		host: "192.168.1.201:3002"
	}
};
