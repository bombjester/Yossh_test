var mongoose = require('mongoose');

// require file-system so that we can load, read, require all of the model files
var fs = require('fs');
// connect to the database
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://admin:password@ds157599.mlab.com:57599/yossh");
// specify the path to all of the models
var models_path = __dirname + '/../models'
// read all of the files in the models_path and for each one check if it is a javascript file before requiring it
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})
