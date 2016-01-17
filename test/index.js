'use strict';

require("colors");
var utils = require('./utils.js');
var jade = require('jade');
var jadeInterpolationBlock = require('../index.js');
var data = require('./data/index.js');

exports['controls'] = {
    setUp: function(done){
        // setup here
        jadeInterpolationBlock.init(jade);
        done();
    }
};

var testStrings = function(testFileName){
    return {
        main: function(test){
            var out = jade.compileFile('test/fixtures/'+ testFileName +'.jade');
            var compiled = out(data);
            var expected = utils.StringFile('test/expected/',testFileName + '.html');
            test.equal(utils.removeAllSpaces(compiled), utils.removeAllSpaces(expected));
            test.done();
            utils.showDifference(compiled, expected);
        }
    };
};

utils.readDirectory('test/fixtures', function(fileName){
    var testFileName = fileName.replace(".jade", "");
    exports.controls[testFileName] = testStrings(testFileName).main;
});
