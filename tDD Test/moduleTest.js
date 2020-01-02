/**
 * @param {number}nums we will take nums as a perameter.
 * @return finally return the result using tdd testing.
 */
let adder=(...nums)=>{
    return nums.reduce((total,num)=>total+num,0);
}

module.exports=adder;