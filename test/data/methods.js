var paths = {
    "baseUrl": "http://localhost:8085/",
    "statics": "http://localhost:8085/"
};

String.prototype.basePath = function(additionalPath){
    var base = paths.statics;
    var result = "";
    if(typeof additionalPath === "string"){
        result = base + additionalPath;
    } else {
        result = base;
    };
    return result;
};

String.prototype.url = function(additionalPath){
    var base = paths.baseUrl;
    var result = "";
    if(typeof additionalPath === "string"){
        result = base + additionalPath;
    } else {
        result = base;
    };
    return result;
};

String.prototype.doctype = function(additionalPath){
    return "<!DOCTYPE html>";
};

String.prototype.headTitle = function(title){
    this.headTitleValue = title;
    return this.concat("\n<title> " + title + " </title>\n");
};

String.prototype.setSeparator = function(separator){
    this.separatorToPrint = "";
    if(typeof separator === "string"){
        this.separatorToPrint = separator;
    }
    var separatorPart = "separator with: " + this.separatorToPrint + "</title>";
    var currentTitle = this.toString().replace(/\<\/title\>/i, separatorPart);
    return currentTitle;
};

String.prototype.setAutoEscape = function(){
    return this;
};

String.prototype.translate = function(text){
    return "translated:" + text;
};

String.prototype.headMeta = function(text){
    return this;
};

String.prototype.appendHttpEquiv = function(attrName, attrContent){
    return this.concat("<meta name='"+ attrName +"' content='"+ attrContent+ "'/>\n");
};

String.prototype.appendName = function(attrName, attrContent){
    return this.concat("<meta name='"+ attrName +"' content='"+ attrContent+ "'/>\n");
};

String.prototype.headLink = function(params){
    return this.concat("<link rel='"+params.rel+"' rel='"+params.type+"' href='"+params.href+"'/>");
};

String.prototype.prependStylesheet = function(path){
    return this.concat("<link href='"+ path +"'>");
};

String.prototype.headScript = function(params){
    return this;
};

String.prototype.prependFile = function(path, type, condition){
    var tagFile = "<script type='"+ type +"' src='"+ path +"'></script>";
    var output = tagFile;
    var endTagCondition = "<![endif]-->";
    if(typeof condition !== "undefined"){
        output = "<!--[if "+ condition.conditional +"]>"  + tagFile + "<![endif]-->";
    }
    return this.concat(output);
};

var $this = "";
module.exports = $this;
