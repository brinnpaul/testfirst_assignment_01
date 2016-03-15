// The test specs create an object that is passed to the setPropertiesOnObjLiteral function, you do not have to create the object that
// is passed to your functions, the test specs do this work for you.

// var object;

function setPropertiesOnObjLiteral(object) {
  object.x = 7;
  object.y = 8;
  object.onePlus = function(number) {
    return number + 1;
  };
}

// You don't have to invoke the function either, the test specs will read the properties.js file first, then it will take any functions
// and code defined and use it in the test specs.  The testspecs invoke all of your functions and checks what values they return (.toEqual).

// setPropertiesOnObjLiteral(object);

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

// var arrObject;

// setPropertiesOnArrayObj(arrObject);

// This is defined in the test spec.
// var functionObject = function() {
//   return "I am a function object, all functions are objects! Function can have their own properties too!";
// }

function setPropertiesOnFunctionObj(func) {
  func.year = 2015;
  func.divideByTwo = function(number) {
    return number/2;
  };
  func.prototype.helloWorld = function() {
    return "Hello World";
  }
}

// setPropertiesOnFunctionObj(functionObject);
