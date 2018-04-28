var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var uniqueValidator = require('mongoose-unique-validator');


var DeviceSchema = new Schema({

    name:{
        type: String,
        required: 'Name of connected Device'
    },

    description:{
        type: String,
        required: 'Description of this device'
    },

    status:{
        type: {
            type: String,
            enum: ['online', 'offline', 'unknow']
          },
          default: ['unknow']

    }

});

module.exports = mongoose.model('Device',DeviceSchema);
