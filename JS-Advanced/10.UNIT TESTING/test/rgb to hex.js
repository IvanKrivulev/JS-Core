let expect = require('chai').expect;
const rgbToHexColor = require('../06. RGB to Hex.js');

describe('RGB',function () {
    describe('Normal cases',function () {
        it('should return #FF9EAA', function () {
            expect(rgbToHexColor(255,158,170)).to.be.equal('#FF9EAA')
        });
        it('should return #000000', function () {
            expect(rgbToHexColor(0,0,0)).to.be.equal('#000000')
        });
        it('should return #0C0D0E', function () {
            expect(rgbToHexColor(12,13,14)).to.be.equal('#0C0D0E')
        });
        it('should return #FFFFFF', function () {
            expect(rgbToHexColor(255,255,255)).to.be.equal('#FFFFFF')
        })
    });
    describe('Special cases',function () {
        it('should return undefined', function () {
            expect(rgbToHexColor(-1,0,0)).to.be.equal(undefined)
        });
        it('should return undefined', function () {
            expect(rgbToHexColor(0,-1,0)).to.be.equal(undefined)
        });
        it('should return undefined', function () {
            expect(rgbToHexColor(0,0,-1)).to.be.equal(undefined)
        });
        it('should return undefined', function () {
            expect(rgbToHexColor(256,0,0)).to.be.equal(undefined)
        });
        it('should return undefined', function () {
            expect(rgbToHexColor(0,256,0)).to.be.equal(undefined)
        });
        it('should return undefined', function () {
            expect(rgbToHexColor(0,0,256)).to.be.equal(undefined)
        });
        it('should return undefined', function () {
            expect(rgbToHexColor(3.14,0,0)).to.be.equal(undefined)
        });
        it('should return undefined', function () {
            expect(rgbToHexColor(0,3.14,0)).to.be.equal(undefined)
        });
        it('should return undefined', function () {
            expect(rgbToHexColor(0,0,3.14)).to.be.equal(undefined)
        });
        it('should return undefined', function () {
            expect(rgbToHexColor('5', [3], {8:9})).to.be.equal(undefined)
        });
        it('should return undefined', function () {
            expect(rgbToHexColor()).to.be.equal(undefined)
        });
    });
});