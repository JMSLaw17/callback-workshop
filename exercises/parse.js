const fs = require("fs");
/* ASYNC-TEXT-PARSE 
In this exercise, you need to utilize the provided functions as callbacks so that the
tests pass. The input file contains space-separated numbers on multiple lines of a
.txt file. Just by filling in the appropriate callbacks, you should be able to
generate an output.txt file of booleans reflecting whether the sum of the numbers on
a line add up to more or less than one hundred. You must also invoke the callback
passed to initiateParse so that it runs after you have written your output file.

EXAMPLE:

input.txt
50 43 10
10 20 30
50 40 0
20 10 0
20 40 30
10 65 20
43 60 20
123 0 40
122 44 0
1 2 3

output.txt
true
false
false
false
false
false
true
true
true
false

/* ----------------------------  */

// replace references to this function
function PLACEHOLDER() {};

// call the callback to initiateParse so that it only runs after parsing is complete
function initiateParse(callback) {
  fs.readFile(__dirname + '/../input.txt', 'utf8', PLACEHOLDER);

  function writeOutput(err, data) {
    let output = '';
    for (let i = 0; i < data.length; i++) {
      output += data[i];
      if (i !== data.length - 1) {
        output += '\n';
      }
    }

    fs.writeFile(__dirname + '/../output.txt', output, function(err) {
      if (err) throw err;
    });
  };

  function calculateLines(data, cb) {
    let filteredData = data.map(function(el) {
      let values = el.split(' ');
      let isGreaterThanHundred = false;
      let runningTotal = 0;
      for (let i = 0; i < values.length; i++) {
        runningTotal += parseInt(values[i]);
      }
      if (runningTotal > 100) {
        isGreaterThanHundred = true;
      }
      return isGreaterThanHundred;
    });
    setTimeout(function() {
      cb(null, filteredData);
    }, 100);
  };

  function splitLines(err, data) {
    if (err) throw err;
    let input = data.toString().split('\n');
    calculateLines(input, PLACEHOLDER);
  };

}

module.exports = initiateParse;