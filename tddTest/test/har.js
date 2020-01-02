/******************************************************************************
 *  Execution       :   1. default node         cmd> node harmonic.js 
 *                      2. if nodemon installed cmd> nodemon harmonic.js
 *  Purpose         :teting the harmonic programme using tdd.
 *  @description   
 *  @file           : harmonic.js
 *  @overview       : using tdd testing test the programme.
 *  @module         : har- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 2-01-2020
 *
 ******************************************************************************/
let chai = require('chai')
let expect = chai.expect

let harmonic = require('../src/harmonic')

describe('harmonic', () => {
	describe('Harmonic', () => {
		it('3 should be equals to 1.83333', () => {
			expect(harmonic.har(3)).to.equal(1.83333)
		})
    })
    describe('Harmonic', () => {
		it('4 should be equals to 3', () => {
			expect(harmonic.har(4)).to.equal(2.83)
		})
    })
})