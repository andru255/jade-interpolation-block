'use strict';

var jsdiff = require("diff");
var fs = require("fs");
var libPath = require("path");

exports.StringFile = function(path, fileName){
    var allPath = libPath.join(path, fileName);
    return fs.readFileSync(allPath, 'utf8');
};

exports.readDirectory = function(dir, eachFile){
    var files =fs.readdirSync(dir);
    files.forEach(eachFile);
};

exports.removeAllSpaces = function(stringToRemoveSpaces){
    return stringToRemoveSpaces.replace(/ |\n/g, "");
};

exports.showDifference = function(stringA, stringB){
    var diff = jsdiff.diffChars(stringA, stringB);
    diff.forEach(function(part){
        var color = part.added ? "green": part.removed? 'red': 'grey';
        process.stderr.write(part.value[color]);
    });
};
