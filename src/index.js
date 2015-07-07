var DIFactory = require('dependency-injection/DIFactory');
var factory = new DIFactory('./../config/di.json');

var di = factory.create();
di.get("expressService").start();
