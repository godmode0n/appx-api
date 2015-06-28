var MongoClient = require('mongodb').MongoClient;


export default class Mongo {
  

	constructor(host, port, database, username, password) {
		var url = 'mongodb://' + username + ':' + password + '@' + host + ':' + port + '/' + database;
		var that = this;

		MongoClient.connect(url, function(err, db) {
			if(err) {
				//TODO: it should keep retrying to connect
				console.error('Unable to connect to the database', err);
			} else {
				that.connection = db;
			}
		});
	}

  getConnection() {
  	return this.connection;
  }
}
