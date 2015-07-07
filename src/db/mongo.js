var MongoClient = require('mongodb').MongoClient;


export default class Mongo {
  

	constructor(host, port, database, username, password) {
		var url = 'mongodb://' + username + ':' + password + '@' + host + ':' + port + '/' + database;
		
		MongoClient.connect(url, (err, db) => {
			if(err) {
				//TODO: it should keep retrying to connect
				console.error('Unable to connect to the database', err);
			} else {
				this.connection = db;
			}
		});
	}

  getConnection() {
  	return this.connection;
  }

  insertOne(collection, value, handler) {
  	var con = this.getConnection();
  	return con.collection(collection).insertOne(value, handler);
  }
}
