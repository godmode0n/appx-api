export class Db {
  
	constructor(mongoService) {
		this.dbService = mongoService.getConnection();
	}

  create(collection, value) {
  	var db = this.dbService;
  	return new Promise(function(resolve, reject) {
  		db.collection(collection).insertOne(value, function(err, r) {
  			if(err) {
  				console.error("Unable to insert into db", err);
  				resolve(false);
  			} else {
  				resolve(true);
  			}
  		}
  	});
  }
}
