let expect = require('chai').expect;
const createCalculator = require('../07. Add or Subtract');

describe('createCalculator()', function () {
    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });

    it('should return 0 for get', function () {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });
    it('should return 7',function () {
        calc.add(5);
        calc.add(2);
        let value = calc.get();
        expect(value).to.be.equal(7);
    });
    it('should return -7',function () {
        calc.subtract(5);
        calc.subtract(2);
        let value = calc.get();
        expect(value).to.be.equal(-7);
    });
    it('should return', function () {
        calc.add(5.2);
        calc.subtract(1.1);
        let value = calc.get();
        expect(value).to.be.equal(5.2 - 1.1)
    });
    it('should return', function () {
        calc.add(5.2);
        calc.subtract(1.1);
        calc.add(-2);
        calc.subtract(-2);
        let value = calc.get();
        expect(value).to.be.equal(4.1);
    });
    it('should return Nan', function () {
        calc.add('hello');
        let value = calc.get();
        expect(value).to.be.NaN;
    });
    it('should return Nan', function () {
        calc.subtract('hello');
        let value = calc.get();
        expect(value).to.be.NaN;
    });
});