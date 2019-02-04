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

  it("it should add", function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5)
  })

  it("it should subtract", function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  it("it should multiply", function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })

  it("it should divide", function(){
    calculator.previousTotal = 15
    calculator.divide(5)
    assert.equal(calculator.runningTotal, 3)
  })

  it("it should concatenate multiple number button clicks", function(){
    calculator.numberClick(4)
    calculator.numberClick(4)
    assert.equal(calculator.runningTotal, 44)
  })

  it("it should chain multiple operations together", function(){
    calculator.numberClick(4)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.operatorClick("=")
    assert.equal(calculator.runningTotal, 12)
  })

  it("it should chain multiple operations together", function(){
    calculator.numberClick(4)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.clearClick()
    assert.equal(calculator.runningTotal, 0)
  })

});
