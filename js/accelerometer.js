var watchID;

function onAccelSuccess(acceleration){
    accelElement = document.getElementById('accelReadings');
    accelElement.innerHTML = 'Acceleration X: '+acceleration.x + '<br>' +
                             'Acceleration Y: '+acceleration.y + '<br>' +
                             'Acceleration Z: '+acceleration.z + '<br>' +
                             'Timestamp:      '+acceleration.timestamp + '<br>';
}

function watchAccelerometer(){
    var options= [];
    options.frequency = 100;
    watchID = AppMobi.accelerometer.watchAcceleration(onAccelSuccess, options);
}

function clearAccelerometer(){
    AppMobi.accelerometer.clearWatch(watchID);
}


