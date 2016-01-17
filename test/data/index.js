var data = {
    "$title": "title from frontend :D",
    "welcome": "Welcome to the frontend side",
    "$body": "This is a simple body in frontend",
    "$link": "http://fe.labs",
    "$parraf": "parraf frontend \n parraf frontend",
    "single_fn": function(){
        return "A single fn!";
    },
    "fn_lista": function(){
        return [1, 2, 3, 4, 5];
    }
};

data["echo"] = function(arguments){
    return arguments;
};

data["isset"] = function(value){
    return typeof value !== "undefined";
};

data["$objTest"] = {
  "name": "objTest",
  "do_some": function(){
      return "objects!";
  },
  "url": function(path){
      return "http://localhost.front/" + path;
  }
};

function dummyList(){
    var names = ["h", "ee", "rr"];
    var numbers = [1, 10, 30];
    var result = {};
    for(var i = 0; i < names.length; i++){
        result.id = numbers[i];
        result.name = names[i];
    }
    return result;
};

data["$dummyList"] = dummyList();
data[ "this_ZF_env" ] = require("./this");
data[ "$selected_2" ] = true;
module.exports = data;
