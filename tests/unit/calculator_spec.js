var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  //Test 1 calculator.add() - add 1 to 4 and get 5;
  it('should correctly add 1 and 4', function(){
      calculator.previousTotal = 1;
      calculator.add(4);
      assert.equal(5, calculator.runningTotal);
    })


    //Test 2 calculator.subtract() subtract 4 from 7 and get 3;
    it('should correctly subtract 4 from 7', function(){
        calculator.previousTotal = 7;
        calculator.subtract(4);
        assert.equal(3, calculator.runningTotal);
      })

    //Test 3 calculator.multiply() - multiply 3 by 5 and get 15;
    it('it should correctly multiply 3 and 5', function(){
        calculator.previousTotal = 3;
        calculator.multiply(5);
        assert.equal(15, calculator.runningTotal)
      })

    //Test 4 calculator.divide() - divide 21 by 7 and get 3;
    it('should correctly divide 21 by 7', function(){
      calculator.previousTotal = 21;
      calculator.divide(7);
      assert.equal(3, calculator.runningTotal)
    })

    //Test 5 calculator.numberClick() - concatenate multiple number button clicks;
    it('should concatenate multiple number button clicks', function(){
      calculator.numberClick(5);
      calculator.numberClick(5);
      calculator.numberClick(5);
      assert.equal(555, calculator.runningTotal)
    })

    //Test 6 calculator.operatorClick() - chain multiple operations together;
    it('should chain multiple operations together', function(){
      calculator.previousTotal = 5;
      calculator.add(5);
      calculator.operatorClick('/');
      calculator.operatorClick('+');
      calculator.operatorClick('*');
      calculator.operatorClick('=');
      assert.equal(4, calculator.runningTotal)
    })

    //Test 7 calculator.clearClick() - clear the running total without affecting the calculation
    it('should clear running total without affecting calculation', function(){
      calculator.previousTotal = 10
      calculator.add(10);
      calculator.add(10);
      calculator.operatorClick('=')
      calculator.clearClick();
      calculator.add(10);
      assert.equal(30, calculator.runningTotal)

    })


// it('it should add 2 numbers together', function(){
//     calculator.previousTotal = 1;
//     calculator.add(4);
//     assert.equal(5, calculator.runningTotal)
//   })
});
