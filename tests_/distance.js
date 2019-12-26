/*****************************************************************************
* Execution: 1. default node cmd> node .js
* @Purpose : Test perform using chi and mocha in this Testing logic
* @file    : distance.js
* @module  : Testing 
* @author  :Inturitejaswini
* @version : 1.0.0
* @since : 26-12-2019
********************************************************************************/
let assert=require('chai').assert
let distance=require('../module.js');
describe('positive tesing of factorial',()=>{
    it('check the distance of two numbers',(done)=>{
        distance.dis(2,4).then(function(result){
            expect(result).to.equal(4.47);
            done();
        }).catch(function(err){
            done();
        })
        assert.isNumber(distance,'number')
       })
   });
    it('it should reject', (done)=>{
        distance.dis(2,4).catch(function(err){
            expect(err).to.equal("x should be greater then 00");
        })
        .then(function(){done()})
        .catch(function(err){
            done(err);
        })
    })
 