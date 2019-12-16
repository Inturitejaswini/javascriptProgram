/**
 * leapYear programme BL.
 */
module.exports = {
    CheckLeapYear=(year) => {
        if ((year % 100 == 0) || (year % 400 == 0) || (year % 4 == 0)) {
            return true;
        } else {
            return false;
        }

    },
    /**
     * windchill programme BL
     */
    windChill=(t, v) => {
        try {
            let W = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
            return W;
        }
        catch (e) {
            console.log(e);
        }
    },
    /**
     *quadratic programmeBL
    **/
    Quadratic=(a, b, c) => {
        try {
            let delta = math.sqrt((b * b) - (4 * (a * c)));
            let root1 = (-b + Math.sqrt(delta) / (2 * a));
            let root2 = (-b - Math.sqrt(delta) / (2 * a));
            let result = [root1, root2];
            return result;
        } catch (e) {
            console.log(e);
        }
    },
    /** 
    * distance programmeBL
    **/

    Distance=(x, y) => {
        try {
            let distance = Math.sqrt(x * x + y * y);
            return distance;
        } catch (e) {
            console.log(e);
        }
    },
    /** 
    *sum of threenubers programmeBl
    **/
    SumOfThree=(n, arr) => {
        try {
            let count = 0;
            for (i = 0; i < n.length; i++) {
                for (j = i + 1; j < n.length - 1; j++) {
                    for (k = i + 2; k < n.length - 2; k++) {
                        if (arr[i] + arr[j] + arr[k] == 0) {
                            count++;
                            console.log("triplet : " + arr[i] + " + " + arr[j] + " + " + arr[k]);
                        }
                    }
                }

            }
            console.log("number of triplets : " + count);
        }

        catch (err) {
            console.log(err);
        }

    },
    /**
     *Factoria programme BL
     */
    Factorial=(n) => {
        try {
            for (let factorial = 2; factorial * factorial <= n; factorial++) {
                while (n % factorial == 0) {
                    console.log(factorial + " ");
                    n = n / factorial;
                }
            }
            if (n > 1)
                console.log(n);
            else
                console.log();
        }
        catch (e) {
            console.log(e);

        }

    },
    /**
     * HarmonicNumber programme BL
     */
    HarmonicNumber=(n) => {
            let sum = 1;
            for (let i = 2; i <= n; i++) {
                sum += 1/ i;
            }
            return sum;
        }
},
/**
 * powerOfTwo programme BL
 */
powerOfTwo=(n)=>{
    let i=0;
    let powerOfTwo=1;
    while(i<=n){
        powerOfTwo=powerOfTwos*2;
        i=i+1;
    }
}
/**
 * flipcoin programme BL
 */
FlipCoin=(n)=>{
    let count = 0, headcount = 0, tailscount = 0;
	//to check positive integer
	if (n > 0) {
		while (count < n) {
			//Each time different random number generated between 1 and 0
			if (Math.random() < 0.5) {
				headcount = headcount + 1; //heads count incremented
			}
			else {
				tailscount = tailscount + 1; //tails count incremented
			}
			count = count + 1;
		}
		console.log("Heads flip percentage= " + ((headcount / n) * 100) + "%"); //Print the heads flip percentage
		console.log("Tails flip percentage= " + ((tailscount / n) * 100) + "%"); //Print the Tails flip percentage
	}
	else {
		console.log("Please Enter positive Integer");
	}
}