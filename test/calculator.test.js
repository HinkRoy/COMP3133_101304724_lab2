
const expect = require('chai').expect;
const calculator = require('../app/calculator');

describe('Calculator Tests', () => {
    // Test for add
    it('should add two numbers correctly', () => {
        expect(calculator.add(5, 2)).to.equal(7);
    });

    it('should fail to add two numbers correctly', () => {
        expect(calculator.add(5, 2)).to.not.equal(8);
    });

    // Test for sub
    it('should subtract two numbers correctly', () => {
        expect(calculator.sub(5, 2)).to.equal(3);
    });

    it('should fail to subtract two numbers correctly', () => {
        expect(calculator.sub(5, 2)).to.not.equal(5);
    });

    // Test for mul
    it('should multiply two numbers correctly', () => {
        expect(calculator.mul(5, 2)).to.equal(10);
    });

    it('should fail to multiply two numbers correctly', () => {
        expect(calculator.mul(5, 2)).to.not.equal(12);
    });

    // Test for div
    it('should divide two numbers correctly', () => {
        expect(calculator.div(10, 2)).to.equal(5);
    });

    it('should fail to divide two numbers correctly', () => {
        expect(calculator.div(10, 2)).to.not.equal(2);
    });
});
