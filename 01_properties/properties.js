var object;

function setPropertiesOnObjLiteral(object) {
  object.x = 7;
  object.y = 8;
  object.onePlus = function(number) {
    return number + 1;
  };
}

setPropertiesOnObjLiteral(object);

function setPropertiesOnArrayObj(arrObject) {
  arrObject.hello = function() {
    return "Hello!";
  };
  arrObject.full = "stack";
  arrObject[0] = 5;
  arrObject.twoTimes = function(number) {
    return 2*number;
  }
}

var arrObject;

setPropertiesOnArrayObj(arrObject);

functionObject = function() {
  return "I am a function object, all functions are objects! Function can have their own properties too!";
}

function setPropertiesOnFunctionObj(func) {
  func.year = 2015;
  func.divideByTwo = function(number) {
    return number/2;
  };
  func.prototype.helloWorld = function() {
    return "Hello World";
  }
}

setPropertiesOnFunctionObj(functionObject);
