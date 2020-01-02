
/**
 * @param {number} a-is a perameter.
 * @param {number} b-is a perameter.
 * @return finally using operations test the program using tdd test.
 */
let add = (a, b) => a + b
let subtract = (a, b) => a - b
let multiply = (a, b) => a * b
let divide = (a, b) => b !== 0 ? (a / b) : undefined
module.exports = {
    add,
    subtract,
    multiply,
    divide,
   
}
