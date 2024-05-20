document.addEventListener('DOMContentLoaded', function() {
    var icecreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Mint Chocolate Chip'];
    var icecreamList = document.getElementById('icecream-list');

    for (var i = 0; i < icecreams.length; i++) {
        var icecreamDiv = document.createElement('div');
        icecreamDiv.textContent = icecreams[i];
        icecreamList.appendChild(icecreamDiv);
    }

    // Request microphone permission
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
        console.log('Microphone permission granted');
    })
    .catch(function(err) {
        console.log('Microphone permission denied');
    });

    // Request location permission
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log('Location permission granted');
        console.log('Latitude: ' + position.coords.latitude);
        console.log('Longitude: ' + position.coords.longitude);
    }, function(error) {
        console.log('Location permission denied');
    });

    // Request camera permission and display video
    var video = document.getElementById('video');

    navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        console.log('Camera permission granted');
        video.srcObject = stream;
    })
    .catch(function(err) {
        console.log('Camera permission denied');
    });
});
