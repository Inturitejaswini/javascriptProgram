//leapYear programme BL.
module.exports = {
    checkLeapYear=(year) => {
        if ((year % 100 == 0) || (year % 400 == 0) || (year % 4 == 0)) {
            return true;
        } else {
            return false;
        }
    }}
//windChill programmeBL
module.exports={
    windChill = (t, v) => {
    try {
        let W = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
        return W;
    }
    catch (e) {
        console.log(e);
    }
    }
}
//quadratic programmeBL
module.exports={
    Quadratic = (a,b,c) => {
        try{
            let delta=math.sqrt((b*b)-(4*(a*c)));
            let root1=(-b+Math.sqrt(delta)/(2*a));
            let root2=(-b-Math.sqrt(delta)/(2*a));
            let result=[root1,root2];
            return result;
        }catch(e){
            console.log(e);
        }
    }
}