# Jade Interpolation block

## Why this repo?

Because when I use jade, when I see a large code to inporlate:

```
!= dog.eat().sleep().works(true).sleepAgain()
```

And yes, isn't fancy, I would like to see this code like:

```
!=
    dog.eat()
       .sleep()
       .works(true)
       .sleepAgain()
```

awesome!

## Install

```
npm install jade-interpolation-block
```

## How to use?

This plugin can do this, You only need to pass the jade instance, and its easy:

```javascript
var jade = require('jade');
var jadeInterpolationBlock = require('jade-interpolation-block'); 

//join with jade
jadeInterpolationBlock.init(jade);

//little example
var mydata = require('my-data.js');
var out = jade.compileFile('myfile.jade');
var compiled = out(mydata);
console.log("it works!", compiled);

//You can use it with gulp and it's awesome :)
```

## Submitting Bugs and Feature Requests

Bugs, feature requests, and other issues should be submitted to the issue
tracker: https://github.com/andru255/jade-interpolation-block/issues

## P.S

This plugin only works with jade 1.x version, if you update with future 2.x maybe don't works
