import express from "express";

class ExpressService{
  constructor(port){
    this.port = port;
    this.app = express();
  }
  start(){
    this.server = this.app.listen(this.port);
  }
  stop(){
    this.server.close();
  }
}
['get', 'post', 'put', 'delete', 'all', 'use'].forEach((method)=>{
  ExpressService.prototype[method] = function(...args){
    return this.app[method](...args);
  }
});


export default ExpressService;
