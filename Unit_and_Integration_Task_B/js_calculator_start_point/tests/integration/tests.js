var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })


  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })


  it('arithmetical button should update the display', function(){
    running_total = element(by.css('#running_total'))
    add = element(by.css('#operator_add'))
    element(by.css('#number5')).click();
    add.click();
    element(by.css('#number5')).click();
    add.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10')
  })

  it('multiply should be able to be concatenated', function(){
    running_total = element(by.css('#running_total'))
    multiply = element(by.css('#operator_multiply'))
    element(by.css('#number3')).click();
    multiply.click();
    element(by.css('#number3')).click();
    multiply.click();
    element(by.css('#number2')).click();
    multiply.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('18')
  })

  it('should performe an subtraction with a negative number as result', function(){
    running_total = element(by.css('#running_total'))
    sub = element(by.css('#operator_subtract'))
    element(by.css('#number3')).click();
    sub.click();
    element(by.css('#number4')).click();
    sub.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-1')
  })

  it('should performe a division with a decimal number as result', function(){
    running_total = element(by.css('#running_total'))
    div = element(by.css('#operator_divide'))
    element(by.css('#number3')).click();
    div.click();
    element(by.css('#number2')).click();
    div.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1.5')
  })

  it('should be able to handle large numbers', function(){
    running_total = element(by.css('#running_total'))
    multiply = element(by.css('#operator_multiply'))
    times = 5
    for (let i=0; i < times; i++){
    element(by.css('#number5')).click();
    }
    multiply.click();
    for (let i=0; i < times; i++){
    element(by.css('#number4')).click();
    }
    multiply.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2469086420')
  })

  it('a division by zero should return Not a number', function(){
    running_total = element(by.css('#running_total'))
    div = element(by.css('#operator_divide'))
    equal = element(by.css('#operator_equals'))
    element(by.css('#number3')).click();
    div.click();
    element(by.css('#number0')).click();
    equal.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Not A Number')
  })



});
