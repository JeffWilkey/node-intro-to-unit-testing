//import chai
const expect = require('chai').expect;

//import fizzbuzzer
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', () => {
  //test normal case
  it('should return "fizz-buzz" if the number is divisible by 15', () => {
    const normalCases = [15, 30, 45];
    normalCases.forEach((input) => {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('fizz-buzz');
    });
  });

  it('should return "fizz" if the number is a multiple of 3 and not 15', () => {
    const normalCases = [3, 6, 9];
    normalCases.forEach((input) => {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('fizz');
    });
  });

  it('should return "buzz" if the number is a multiple of 5 and not 15', () => {
    const normalCases = [5, 10, 20];
    normalCases.forEach((input) => {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('buzz');
    });
  });

  it('should return number if the number is not a multiple of 3 or 5', () => {
    const normalCases = [2, 7, 11]
    normalCases.forEach((input) => {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal(input);
    })
  })

  it('should throw error if arg is not a number', () => {
    const badInputs = [true, "One", null];
    badInputs.forEach((input) => {
      expect(() => {
        fizzBuzzer(input)
      }).to.throw(Error);
    });
  });
});
