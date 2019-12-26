
/*****************************************************************************
* Execution: 1. default node cmd> node .js
* @Purpose : Test perform using chi and mocha in this Testing logic
* @file    : addition.js
* @module  : Testing 
* @author  :Inturi tejaswini
* @version : 1.0.0
* @since : 26-12-2019
********************************************************************************/
let chai=require('chai');
let expect=chai.expect;
let addition=require("../moduleAdditionTest.js");
describe('addition', ()=>{
    it('it should add 2 nos', (done)=>{
        addition.add(1,4).then(function(result){
            expect(result).to.equal(5);
            done();
        }).catch(function(err){
            done(err)
        })
    });
    it('it should reject', (done)=>{
        addition.add(1,4).catch(function(err){
            expect(err).to.equal("x should be greater then 00");
        })
        .then(function(){done()})
        .catch(function(err){
            done(err);
        })
    })
})