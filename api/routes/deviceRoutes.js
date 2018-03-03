'use strict';

module.exports = function(app){

    var deviceController = require('../controllers/deviceController');

    app.route('/devices')
        .get(deviceController.list_all_devices);

    app.route('/device')
        .post(deviceController.create_a_device);
}