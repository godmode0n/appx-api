var DIFactory = require('dependency-injection/DIFactory');
var factory = new DIFactory('./../config/di.json');

var di = factory.create();

export class Db {
  
	constructor() {
		var mongo = di.create('Mongo');
		mongo.hello();
	}

  create(value) {
  	return new Promise(function(resolve, reject) {
  		setTimeout(resolve, 100);
  	});
  }
}
