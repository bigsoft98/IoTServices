var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost:1883')


client.on('connect', function () {
    //client.subscribe('new')
    //client.publish('iot/platform/inbound','mqtt test message')
    client.publish('addedTopic','new msg to adding topic')
    
  })

  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    //client.end()
  })