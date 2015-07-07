export default class Db {
  
	constructor(connectionService) {
		this.connectionService = connectionService;
	}

  create(collection, value) {
  	return new Promise(() => {
  		this.connectionService.insertOne(collection, value, function(err, r) {
  			if(err) {
  				console.error('Unable to insert into db', err);
  				reject(err);
  			} else {
  				reject(err);
  			}
  		}); 
		});
	}
}
