'use strict';

var mongoose = require('mongoose'),
 Device = mongoose.model('Device'),
 DeviceData = mongoose.model('DeviceData');

 exports.list_all_devices = function(req,res) {

    Device.find({},function(err,device) {
        if (err)
            res.send(err);
        res.json(device);
    });
 };


 exports.create_a_device = function(req,res){

    var new_device = new Device(req.body);
    new_device.save(function(err,deivce) {
        if(err)
            res.send(err);
        res.json(device);
    });

 };

 exports.add_device_data = function(req,res){
    var new_device_data = new DeviceData(req.body);
    new_device_data.save(function(err,deviceData){
        if(err)
            res.send(err);
        res.json(deviceData);
    })
};  

exports.fetch_device_data = function(req,res){
    var search_deviceId = req.param('deviceId');
    console.log('passing search device id '+search_deviceId);
    var search_startTime = req.param('startTime');
    DeviceData.find({deviceId: search_deviceId},function(err, data) {
        if (err)
            res.send(err);
        res.json(data);
    })
};  



 