//features to override in Jade.Parser
var overrideParser =  function( parserInstance, nodeInstance ){
    var _superParseExpr = parserInstance.prototype.parseExpr;

    var isCommented = function(text){
        return /[ \t]?\/\/([^\n]*)/.test(text); 
    };

    parserInstance.prototype.parseBlockInterpolation = function(){
      var tok = this.expect('blockInterpolation');
      var node;
      var body = this.peek();
      var text;
      if (body.type === 'pipeless-text') {
        this.advance();
        text = body.val.filter(function(textLine){
            return !isCommented(textLine);
        }).join('\n');
      } else {
        text = '';
      }
      node = new nodeInstance.Code(text, true, false);
      return node;
    };

    parserInstance.prototype.parseExpr = function(){
        if ( this.peek().type == "blockInterpolation") {
            return this.parseBlockInterpolation();
        } else {
            return _superParseExpr.call(this);
        };
    };
};
module.exports = overrideParser;
