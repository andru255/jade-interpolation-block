var Lexer = require("./lexer.js");
var Parser = require("./parser.js");

/* Empty object*/
var EmptyObject = {
    Compiler: function(){},
    Lexer   : function(){},
    Parser  : function(){}
};

/* Modifier */
var Modifier = function Modifier(){
    this.Compiler = EmptyObject.Compiler;
    this.Lexer = EmptyObject.Lexer;
    this.Parser = EmptyObject.Parser;
};

Modifier.prototype.init = function(jadeInstance){
    var jadeInfo = require('moduleinfo')(jadeInstance);
    Lexer(jadeInstance.Lexer);
    Parser(jadeInstance.Parser, jadeInstance.nodes);
};

module.exports = new Modifier();
