var express = require('express'),
  app = express(),
  port = process.env.port || 3000,
  mongoose = require('mongoose'),
  Device = require('./api/models/Device'),
  bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/IoTServiceDB');
mongoose.set('debug',true);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/deviceRoutes');
routes(app);


app.use(function(req,res){
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('IoT Service RESTful API server started on: '+port);
