'use strict';

module.exports = function(app){

    var deviceController = require('../controllers/deviceController');

    // List all the devices
    app.route('/devices')
        .get(deviceController.list_all_devices);

    // Adding new Device    
    app.route('/device')
        .post(deviceController.create_a_device);

    //Insert Device Data    
    app.route('/deviceData')
        .post(deviceController.add_device_data);

    // /fetchDeviceData?deviceId=&startTime
    app.route('/fetchDeviceData')
        .get(deviceController.fetch_device_data);
}