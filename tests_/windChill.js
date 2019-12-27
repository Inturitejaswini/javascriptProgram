/*****************************************************************************
* Execution: 1. default node cmd> node .js
* @Purpose : Test perform using chi and mocha in this Testing logic
* @file    : windChill.js
* @module  : Testing 
* @author  : Inturi tejaswini
* @version : 1.0.0
* @since : 26-12-2019
********************************************************************************/
let chai=require('chai');
let expect=chai.expect;
let winchillProgram=require("../modules.js");
describe('winchill', (t,v)=>{
    it('it should find the t and v value using windchill logic', (done)=>{
        windchillProgram.windChill(7,6).then(function(result){
            expect(result).to.equal(-3.54);
            done();
        }).catch(function(err){
            done(err)
        })
    });
    it('it should reject', (done)=>{
        winchillProgram.windChill(7,6).catch(function(err){
            expect(err).to.equal("t and v values should be greater then 00");
        })
        .then(function(){done()})
        .catch(function(err){
            done(err);
        })
    })
})
