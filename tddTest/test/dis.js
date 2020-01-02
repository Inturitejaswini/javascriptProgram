/******************************************************************************
 *  Execution       :   1. default node         cmd> node distance.js 
 *                      2. if nodemon installed cmd> nodemon distance.js
 *  Purpose         :teting the distance programme using tdd.
 *  @description   
 *  @file           : distance.js
 *  @overview       : using tdd testing test the programme.
 *  @module         : dist- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 2-01-2020
 *
 ******************************************************************************/
let chai = require('chai')
let expect = chai.expect
let distance= require('../src/distance')
describe("distance",()=>{
    it("should distance between two numbers",()=>{
        expect(distance.dist(1,2).toBe(2.2));
    });
    it("should return a sole input",()=>{
        expect(distance.dist(5)).toBe(5);
    });
    it("should distance between three number",()=>{
        expect(distance.dist(1,2,3)).toBe(6);
    });
    it("should return 0 if no numbers are passed",()=>{
        expect(distance.dist()).to.equal(0);
    });
    it("should distance of any number of aurguments",()=>{
     expect(distance.dist(1,2,3,4,5,6)).to.equal(21);   
    })
});