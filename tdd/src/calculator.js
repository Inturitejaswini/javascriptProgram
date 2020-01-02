
/**
 * @param {number} a-is a perameter.
 * @param {number} b-is a perameter.
 * @return finally using operations test the program using tdd test.
 */
let add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => b !== 0 ? (a / b) : undefined
module.exports = {
    add,
    subtract,
    multiply,
    divide,
   
}