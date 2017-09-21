var fs = require('fs');
var http = require('http');


// The get request in this function retrieves data on Harry Potter characters from an API.
// The parsedData received from this API will be an array containing character objects.
// Each character object has several properties. The only properties relevant to us are
// the 'house' property and the 'name' property. You should use fs.readFile to get the
// name of a house from house.txt, and then construct an array containing the names of all
// characters wtih a house property matching the house found in house.txt. Pass this array
// into the getStudents callback to pass the tests.
function getStudents(callback) {
    http.get({
        host: 'hp-api.herokuapp.com',
        path: '/api/characters/students'
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            // Data reception is done, do whatever with it!
            var parsedData = JSON.parse(body);
            var pathToHouseFile = __dirname + '/../house.txt';
            
            // CODE HERE
            // fs.readFile(pathToHouseFile, 'utf8'
        });
    });
}

module.exports = getStudents;