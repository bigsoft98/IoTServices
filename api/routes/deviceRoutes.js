'use strict';

module.exports = function(app){

    var deviceController = require('../controllers/deviceController');
    //var html_dir = '../../html/';

   // app.get('/viewDevices', function(req, res) {
   //     res.sendfile(html_dir + 'deviceView.html');
   // });

    app.route('/devices')
        .get(deviceController.list_all_devices);

    app.route('/device')
        .post(deviceController.create_a_device);
}