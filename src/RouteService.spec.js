import {expect} from "chai";
import RouteService from "./RouteService";

function stub(...methods) {
  return methods.reduce(function(stubObject, method){
    stubObject[method] = function(){};
    return stubObject;
  }, {});
}

describe("RouteService", function(){

  let mockExpress = stub('get', 'put', 'post', 'delete', 'all');

  it("says hello", function(){
    let mockResponse = {
      send : function(message){
        expect(message).to.be.eql("Hello world");
      }
    };
    
    let message = new RouteService(mockExpress).helloWorld(null, mockResponse);

  });

});
