
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

let windChill = require('../src/windChillProg')
	describe('windChill', () => {
		it(' speed should be equals to 0.143784536', () => {
			expect(windChill.windChill(20,32)).to.equal(143784536)
		})
    })
    describe('windChill', () => {
		it(' speed should be equals to 0.638484536', () => {
			expect(windChill.windChill(35,32)).to.equal(0.638484536)
		})
    })
  