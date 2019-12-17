/**
 * To check leapYear programme 
 */
module.exports = {
    /**
     * To find the year in integer formate.
     * To check weather the given year is leapyear or not.
     * return the result.
     */
    checkLeapYear=(year) => {
        if ((year % 100 == 0) || (year % 400 == 0) || (year % 4 == 0)) {
            return true;
        } else {
            return false;
        }

},
    /**
     * windchill programme 
     */
    windChill=(t, v) => {
        /**
         * It takes two double command-line arguments t and v and prints the wind chill.
         * the temperature t (in Fahrenheit).
         * the wind speed v (in miles per hour).
         * return w.
         */
        try {
            if((t>50)||(v>120 || v<3))
            {
                console.log("error");
            }else{

            
            let W = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
            console.log(w);
            return W;
            }
        }
        catch (e) {
            console.log(e);
        }
    },
    /**
     *quadratic programme to find the roots of the given equation.
    **/
    quadratic=(a, b, c) => {
        /**
         * a-value of a variable.
         * b-value of b variable.
         * c-value of c variable.
         * Find the root1,root2 values using the given formulas.
         * return the result.
         */
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
    *  To ptint  Euclidian distance 
    * x-value of x variable.
    * y-value of y variable.
    * return distance.
    **/

    distance=(x, y) => {
        /**
         * Find the euclidian distance.
         * distance from (x,y) to (0,0).
         */
        try {
            let distance = Math.sqrt(x * x + y * y);
            return distance;
        } catch (e) {
            console.log(e);
        }
    },
    /** 
    *Sum of three Integers adds to ZERO.
    **/
    sumOfThree=(n, arr) => {
        /**
         * Take i,jand k values as inputs using array.
         * sum three integer values adds to zero.
         * return the count.
         */
        try {
            let count = 0;
            /**
             * Find sum of three intergers to zero.
             * arr[i] + arr[j] + arr[k] == 0.
             */
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
     *Factoria programme number to find the primefactor.
     */
    factorial=(n) => {
        /**
         * Traverse till i*i <= N instead of i <= N for efficiency.
         *  Print the prime factors of number N.
         */
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
 * powerOfTwo programme This program takes a command-line argument N 
 * and prints a table of the powers of 2 that are less than or equal to 2^N.
 */
powerOfTwo=(n)=>{
    /**
     * The Power Value N. 
     * repeat until i equals N.
     * print the powers of 2 that are less than are equal to 2^n.
     * return the i value.
     */
    let i=0;
    let powerOfTwo=1;
    while(i<=n){
        powerOfTwo=powerOfTwos*2;
        i=i+1;
    }
},
/**
 * flipcoin programme BL
 */
flipCoin=(n)=>{
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
        console.log("Heads flip percentage= " + ((headcount / n) * 100) + "%"); 
        //Print the heads flip percentage
        console.log("Tails flip percentage= " + ((tailscount / n) * 100) + "%"); 
        //Print the Tails flip percentage
	}
	else {
		console.log("Please Enter positive Integer");
	}
},
/**
 * coupan number programme 
 * Genrate distinct Coupon numbers.
 */
coupanNumber=(n)=>{
    /**
     * N Distinct Coupon Number.
     * repeatedly choose a random number and check whether it's a new one.
     * total random number needed to have all distinct numbers.
     *print the distinct coupans.
     */
    while (count < Number) {
        let alphaNumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        let coupan='';

        for (let i = 0; i < coupanLength; i++)
        {
            let length = alphaNumeric.length;
            coupan=coupan+(alphaNumeric.charAt((Math.floor(Math.random()*length)+1))); //each time calling the random function and alphanumeric will appended to the string
            randomCount++; //increment the randomcount for to count how many times random number generated
        }
        for (let i = 0; i < count; i++)
        {
            if (distinctCoupans[i] == coupan.toString()) //check the coupon distinct or not
            {
                flag = false;
            }
        }
        if (flag == true) {
            distinctCoupans.push(coupan.toString()); //distict coupan will added to the list
            count++;
        }
        flag = true;
    }
    console.log("Total Random number needed to have all distinct coupan number: " + randomCount); //prints the total number random used
    return distinctCoupans;
},

/**
 * stopwatch programme.
 * Simulate Stopwatch Program.
 */
stopWatch=()=>{
    /**
     * Start the Stopwatch and End the Stopwatch.
     * Measure the elapsed time between start and end.
     * Print the elapsed time.

     */
    try{
    function start() {
        let d=new Date();
        startTimer = d.getMilliseconds();
        console.log("Start Time is: " + (startTimer));
    }
    function stop() {
        let d=new Date();
        stopTimer = d.getMilliseconds();
        console.log("Stop Time is: " + (stopTimer));
    }
    
    function getElapsedTime() {
        elapsed = Math.abs(Number(stopTimer) - Number(startTimer));
        return elapsed;
    }
}

catch(e){
    console.log(e);
}
}
}