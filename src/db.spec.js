import chai from 'chai';
import Db from './db';


var expect = chai.expect;
var db = new Db({
	getConnection() {
		return false;
	}
});

describe("Db", () => {

  describe('create', function() {
  	it('returns a promise', function() {
  		var result = db.create({value: 'test'});

  		expect(result).to.be.an.instanceof(Promise);
  	});



  });


});

