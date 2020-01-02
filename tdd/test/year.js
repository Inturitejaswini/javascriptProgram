/******************************************************************************
 *  Execution       :   1. default node         cmd> node leapyear.js 
 *                      2. if nodemon installed cmd> nodemon leapyear.js
 *  Purpose         :teting the leapyear programme using tdd.
 *  @description   
 *  @file           : calculator.js
 *  @overview       : check the year is leap year or not using testcases.
 *  @module         : year - This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 2-01-2020
 *
 ******************************************************************************/

let chai = require('chai')
let expect = chai.expect

let leapYear = require('../src/leapYear')
describe('leapYear',()=> {

    it('is not very common',()=> {
      let Year = new Year(2015);
      expect(leapYear.isLeap()).toBe(false);
    });
    it('is introduced every 4 years to adjust about a day',()=> {
        let Year = new Year(2016);
        expect(leapYear.isLeap()).toBe(true);
      });
    
      it('is skipped every 100 years to remove an extra day',()=>{
        let Year = new Year(1900);
        expect(leapYear.isLeap()).toBe(false);
      });
     it('is reintroduced every 400 years to adjust another day',()=>{
        let Year = new Year(2000);
        expect(leapYear.isLeap()).toBe(true);
      });
    
});
