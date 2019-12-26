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
let distance=require('../functional/distance.js')
describe('positive tesing of distance',function(){
    it('check distance',function(){
        assert.isNumber(distance,'number')
       
    })
   })