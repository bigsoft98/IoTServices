'use strict';

var mongoose = require('mongoose'),
 Device = mongoose.model('Devices');

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