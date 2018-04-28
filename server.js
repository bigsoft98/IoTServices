var express = require('express'),
  app = express(),
  port = process.env.port || 3000,
  mongoose = require('mongoose'),
  DeviceData = require('./api/models/DeviceData'),
  Device = require('./api/models/Device'),
  bodyParser = require('body-parser'),
  cors = require('cors');


var path = require('path'); 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/IoTServiceDB');
mongoose.set('debug',true);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/deviceRoutes');
routes(app);

// we are specifying the html directory as another public directory
app.use(express.static(path.join(__dirname, 'html')));
app.use(express.static(path.join(__dirname,'styles')))
app.use(express.static(path.join(__dirname,'scripts')))
app.use(function(req,res){
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);
console.log('IoT Service RESTful API server started on: '+port);
console.log(mongoose.modelNames());
