var StringMethods = require("./methods.js");
//for ZF2
global.doctype = function(){
    return "".doctype();
};

global.headTitle = function(title){
    return "".headTitle(title);
};

global.translate = function(textToTranslate){
    return "".translate(textToTranslate);
};

global.headMeta = function(text){
    return "".headMeta(text);
};

global.headLink = function(params){
    return "".headLink(params);
};

global.basePath = function(additionalPath){
    return "".basePath(additionalPath);
};

global.baseUrl = function(additionalPath){
    return "".url(additionalPath);
};

global.headScript = function(){
    return "".headScript();
};

var $this = "";
module.exports = $this;
