/*****************************************************************************
* Execution: 1. default node cmd> node .js
* @Purpose : Test perform using chi and mocha in this Testing logic
* @file    : harmonicNumber.js
* @module  : Testing 
* @author  :Inturitejaswini
* @version : 1.0.0
* @since : 26-12-2019
********************************************************************************/
let assert=require('chai').assert
let harmonicNumber=require('../modules.js')
describe('positive tesing of harmonicnumber',()=>{
    it('check nth harmonic number',(done)=>{
        harmonicNumber.harmonic(3).then(function(result){
            expect(result).to.equal(1.83);
            done();
        }).catch(function(err){
            done();
        })
        assert.isNumber(harmonicNumber,'number')
       })
   });
    it('it should reject', (done)=>{
        harmonicNumber.harmonic(1.83).catch(function(err){
            expect(err).to.equal("fact value  should be greater than 00");
        })
        .then(function(){done()})
        .catch(function(err){
            done(err);
        })
    })