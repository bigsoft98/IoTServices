var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeviceDataSchema = new Schema({

    deviceId:{
        type: String,
        required: 'Device ID'
    },

    dateTime:{
        type: Date,
        default: Date.now
    },

    data:{
        type: String,
        required: 'Data collected by devices'
    }

});

module.exports = mongoose.model('DeviceData',DeviceDataSchema);