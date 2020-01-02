/******************************************************************************
 *  Execution       :   1. default node         cmd> node windChill.js 
 *                      2. if nodemon installed cmd> nodemon windChill.js
 *  Purpose         :teting the windChill programme using tdd.
 *  @description   
 *  @file           :windChill.js
 *  @overview       : using tdd testing test the programme.
 *  @module         : windChill- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 2-01-2020
 *
 ******************************************************************************/
let chai = require('chai')
let expect = chai.expect

let factorial = require('../src/factorialProg')
	describe('factorial', () => {
		it('5 should be equals to 120', () => {
			expect(factorial.fact(5)).to.equal(120)
		})
    })
    describe('factorial', () => {
		it('6 should be equals to 120', () => {
			expect(factorial.fact(6)).to.equal(120)
		})
    })
    describe('factorial', () => {
		it('2should be equals to 3', () => {
			expect(factorial.fact(2)).to.equal(3)
		})
    })