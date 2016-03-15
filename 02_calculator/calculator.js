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

// Check comments in 01, this code isn't necessary, great solution!
// var calculator;
// calculator = new createCalculator();
