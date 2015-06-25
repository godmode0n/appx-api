import chai from 'chai';
import {Db} from './db';

var expect = chai.expect;
var db = new Db();

describe("Db", () => {
  it("says hello", () => {
    expect(db.hello()).to.be.eql('hello');
  })
})
