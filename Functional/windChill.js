var readline = require("readline-sync");
const t = readline.question("enter t value:");
const v = readline.question("enter v value:");
if ((t > 50) || (v > 120 || v < 3)) {
    console.log("The formula is not valid if t is larger than 50 in absolute value or if v is larger than 120 or less than 3 ");
}
else {
    var w = 35.74 + 0.6215 * t + (0.4275 * t + 35.75) * Math.pow(v, 0.16);
    console.log(w);
}