export default class RouteService{
  constructor(expressService) {
    this.expressService = expressService;
    this.expressService.get("/", this.helloWorld.bind(this));
  }
  helloWorld(req, resp){  
    return resp.send("Hello world");
  }
}
