
/******************************************************************************
 *  Execution       :   1. default node         cmd> node adder.js 
 *                      2. if nodemon installed cmd> nodemon adder.js
 * 
 *  Purpose         : adding the numbers using tdd test.
 *  @description   
 *  @file           : adder.js
 *  @overview       : adding numbers.
 *  @module         : adder - This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 2-01-2020
 *
 ******************************************************************************/
let adder=require("./moduleTest.js");
describe("adder",()=>{
    it("should add two numbers",()=>{
        expect(adder(1,2).toBe(3));
    });
    it("should return a sole input",()=>{
expect(adder(5)).toBe(5);
    });
    it("should add three number",()=>{
        expect(adder(1,2,3)).toBe(6);
    });
    it("should return 0 if no numbers are passed",()=>{
        expect(adder()).toBe(0);
    });
    it("should add any number of aurguments",()=>{
     expect(adder(1,2,3,4,5,6)).toBe(21);   
    })
});