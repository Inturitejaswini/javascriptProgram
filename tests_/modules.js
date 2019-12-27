/**
 * @param {value}x is a variable.
 * @param {value}y is a variable.
 * @return addition of x and y value.
 */
exports.add=(x, y) =>{
    console.log("value of x: " + x + " and value of y: " + y);
    return new promise(function (resolve, reject) {
        if (x < 0) {
            reject("x should be greater then 0")
        } else {
            resolve(x + y)
        }
    })
}
/**
 * @param {value}x is a variable.
 * @param {value}y is a variable.
 * @return distance of x and y value.
 */

exports.dis=(x, y) =>{
    console.log("value of x: " + x , " and value of y: " + y);
    return new promise(function (resolve, reject) {
        if (x < 0&&y<0) {
            reject("x and y values should be greater then 0")
        } else {
            resolve(x,y);
        }
    })
}
/**
 * @param {number}n is a variable.
 * @return factorial of that given number.
 */
exports.fact=(number) =>{
    console.log("value of x: " + x);
    return new promise(function (resolve, reject) {
        if (number< 0) {
            reject("x  value should be greater then 0")
        } else {
            resolve(number);
        }
    })
}
/**
 * @param {number}n is a variable.
 * @return harmonic number of that given number.
 */
exports.harmonic=(number) =>{
    console.log("enter the nth value");
    return new promise(function (resolve, reject) {
        if (number< 0) {
            reject("nth harmonic  value should be greater then 0")
        } else {
            resolve(number);
        }
    })
}