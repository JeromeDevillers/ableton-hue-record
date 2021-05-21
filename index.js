const dotenv = require('dotenv');
const axios = require('axios').default;
dotenv.config();

var lightsCollection = process.env.HUE_LIGHT_ID.split(',');

var ableton = require('ableton-push2');
var push2 = new ableton.Push2(port = 'live');

const controlLight = async (lightID, on) => {
  try {
    return await axios.put('http://' + process.env.HUE_BRIDGE_IP + '/api/' + process.env.HUE_USERNAME + '/lights/' + lightID + '/state',
      {
        "on": on,
        "sat": 254,
        "bri": 255,
        "hue": 89000
      }
    );
  } catch (error) {
    console.error(error);
  }

}

push2.midi.on('cc', function (msg) {

  // RECORDING
  if (msg.controller == 86) {
    console.log('🔴 RECORDING...');

    lightsCollection.forEach(function (light) {
      controlLight(light, true);
    });
  }

  // STOP RECORDING
  if (msg.controller == 85) {
    console.log('🚫 NOT RECORDING');

    lightsCollection.forEach(function (light) {
      controlLight(light, false);
    });
  }
});