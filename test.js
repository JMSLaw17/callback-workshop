var expect = require('chai').expect;
var fs = require('fs');
var http = require('http');
var getSentence = require('./exercises/sentence.js');
var getStudents = require('./exercises/request.js');
var initiateParse = require('./exercises/parse.js')

  describe('Callback Workshop', function() {

    describe('getSentence', function() {

      it('should invoke the callback passed to it on the complete sentence', function(done) {
        getSentence(function(sentence) {
          expect(sentence).to.eql('Async is awesome.');
          done();
        });
      });
    });
    
    describe('getStudents', function() {

      it('should invoke the callback passed to it on the array of names of students from the appropriate house', function(done) {
        getStudents(function(names) {
          expect(names.length).to.eql(2);
          expect(names[0]).to.eql('Cho Chang');
          expect(names[1]).to.eql('Luna Lovegood');
          done();
        });
      });
    });

    describe('initiateParse', function() {

      before(function(done) {
        fs.unlink(__dirname + '/output.txt', function(err) {
          if (err && err.code !== 'ENOENT') throw err;
          done();
        });
      });

      it('should parse intput.txt and write the correct outputs to output.txt', function(done) {
        initiateParse(function() {
          fs.readFile(__dirname + '/output.txt', 'utf8', function(err, data) {
            if (err) throw err;
            var lines = data.split('\n');
            expect(lines.length).to.eql(10);
            for (var i = 0; i < lines.length; i++) {
              if (i === 0 || i === 6 || i === 7 || i === 8) {
                expect(lines[i]).to.eql('true');
              }
              else {
                expect(lines[i]).to.eql('false');
              }
            }
            done();
          });
        });
      });
    });

  });

