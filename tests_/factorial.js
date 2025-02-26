/*****************************************************************************
* Execution: 1. default node cmd> node .js
* @Purpose : Test perform using chi and mocha in this Testing logic
* @file    : factorial.js
* @module  : Testing 
* @author  :Inturitejaswini
* @version : 1.0.0
* @since : 26-12-2019
********************************************************************************/
let assert=require('chai').assert
let factorial=require('./modules.js')
describe('positive tesing of factorial',()=>{
    it('check factorial number',(done)=>{
        factorial.fact(5).then(function(result){
            expect(result).to.equal(120);
            done();
        }).catch(function(err){
            done();
        })
        assert.isNumber(factorial,'number')
       })
   });
    it('it should reject', (done)=>{
        factorial.fact(5).catch(function(err){
            expect(err).to.equal("fact value  should be greater than 00");
        })
        .then(function(){done()})
        .catch(function(err){
            done(err);
        })
    })
 