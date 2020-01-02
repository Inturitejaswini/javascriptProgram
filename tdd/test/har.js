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