
/**
 * @param {number} t is a perameter.
 *  @param {number} v is a perameter.
 * @return finally using tdd test we have to check the windChill number.
 */
let windChill=(t,v) =>
{
    if((t>50)||(v>120 || v<3))
    {
        console.log("error");
    }
    else{
    let W = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
    return W;
}
}
module.exports=()=>{
 windChill;
}

