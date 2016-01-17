//features to override in Jade.Lexer
var overrideLexer =  function(lexerInstance){
  /**
   * Block interpolation.
   */
   lexerInstance.prototype.blockInterpolation = function(){
     var regexSyntaxCode = /^!=[ \t]*\n/;
     var captures = regexSyntaxCode.exec(this.input);
       if ( captures !== null) {
       this.consume(captures[0].length - 1);
       var tok = this.tok('blockInterpolation');
       this.pipeless = true;
       this.buffer = true;
       return tok;
     }
   };

   var _superNext = lexerInstance.prototype.next;
   lexerInstance.prototype.next = function(){
       var self = this;
       return this.blockInterpolation() || _superNext.call(this);
   };

};
module.exports = overrideLexer;
