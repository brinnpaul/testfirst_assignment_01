var createCalculator = function() {

  var calc = {};

  calc.total = 0;

  calc.value = function() {
    return calc.total;
  };

  calc.add = function(number) {
     this.total += number;
  };

  calc.subtract = function(number) {
    this.total -= number;
  };

  return calc;

};

var calculator;
calculator = new createCalculator();
