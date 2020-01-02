
/******************************************************************************
 *  Execution       :   1. default node         cmd> node calculator.js 
 *                      2. if nodemon installed cmd> nodemon calculator.js
 *  Purpose         :teting the calculator programme using tdd.
 *  @description   
 *  @file           : calculator.js
 *  @overview       : using tdd testing test the programme.
 *  @module         : calc - This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 2-01-2020
 *
 ******************************************************************************/
let chai = require('chai')
let expect = chai.expect

let calculator = require('../src/calculator')

describe('Calculator', () => {
	describe('Addition', () => {
		it('1 + 1 should be equals to 2', () => {
			expect(calculator.add(1, 1)).to.equal(2)
		})
	})
	describe('sustraction', () => {
		it('1 - 1 should be equals to 0', () => {
			expect(calculator.subtract(1, 1)).to.equal(0)
		})
	})
	describe('Multiply', () => {
		it('1 * 1 should be equals to 1', () => {
			expect(calculator.multiply(1, 1)).to.equal(1)
		})
	})
	describe('division', () => {
		it('1 / 1 should be equals to 0', () => {
			expect(calculator.divide(1, 1)).to.equal(0)
		})
	})
})