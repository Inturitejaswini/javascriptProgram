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
  