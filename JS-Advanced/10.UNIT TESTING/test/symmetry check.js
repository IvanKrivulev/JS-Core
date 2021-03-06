let expect = require('chai').expect;
const isSymmetric = require('../05. Check for Symmetry');

describe('Symmetry tests', function () {
    it('should return true for [1,2,3,3,2,1]', function () {
        expect(isSymmetric([1,2,3,3,2,1])).to.be.equal(true);
    });
    it('should return false for [1,2,3,4,2,1]', function () {
        expect(isSymmetric([1,2,3,4,2,1])).to.be.equal(false);
    });
    it('should return true for []', function () {
        expect(isSymmetric([])).to.be.equal(true);
    });
    it('should return true for [1]', function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });
    it('should return true for [-1,2,-1]', function () {
        expect(isSymmetric([-1,2,-1])).to.be.equal(true);
    });
    it('should return false for [-1,2,1]', function () {
        expect(isSymmetric([-1,2,1])).to.be.equal(false);
    });
    it('should return true for [{}]', function () {
        expect(isSymmetric([{}])).to.be.equal(true);
    });
    it('should return true for [a,b,a]', function () {
        expect(isSymmetric(['a','b','a'])).to.be.equal(true);
    });
    it('should return false for [1,2]', function () {
        expect(isSymmetric([1,2])).to.be.equal(false);
    });
    it('should return false for 1,2,2,1', function () {
        expect(isSymmetric(1,2,2,1)).to.be.equal(false);
    });
    it('should return true for ', function () {
        expect(isSymmetric([5,'hi', {a:5}, new Date(), {a:5}, 'hi', 5])).to.be.equal(true);
    });
    it('should return false for ', function () {
        expect(isSymmetric([5,'hi', {a:5}, new Date(), {A:5}, 'hi', 5])).to.be.equal(false);
    });
});