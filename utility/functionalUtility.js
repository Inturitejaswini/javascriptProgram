
    /**
     * To find the year in integer formate.
     * To check weather the given year is leapyear or not.
     * return the result.
     */
    exports.checkLeapYear=(year) => {
        let checkLeapYear;
        if(year!=4){
            console.log("enter four digit number");
        }
        if ((year % 100 == 0) || (year % 400 == 0) || (year % 4 == 0)) {
            console.log("it is a leapYear");
        } else {
            console.log("not a leapYear");
        }

},
    /**
         * It takes two double command-line arguments t and v and prints the wind chill.
         * the temperature t (in Fahrenheit).
         * the wind speed v (in miles per hour).
         * return w.
         */
    exports.windChill=(t, v) => {
        try {
            if((t>50)||(v>120 || v<3))
            {
                console.log("error");
            }else{

            
            let W = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
            return W;
            }
        }
        catch (e) {
            console.log(e);
        }
    },
    /**
         * a-value of a variable.
         * b-value of b variable.
         * c-value of c variable.
         * Find the root1,root2 values using the given formulas.
         * return the result.
         */
    exports.quadratic=(a, b, c) => {
        let root1=0;
        let root2=0;
        try {
            let delta = Math.sqrt((b * b) - (4 * (a * c)));
            let root1 = (-b + Math.sqrt(delta) / (2 * a));
            let root2 = (-b - Math.sqrt(delta) / (2 * a));
            let result = [root1, root2];
            console.log(root1);
            console.log(root2);
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
    * distance from (x,y) to (0,0).
    **/

    exports.distance=(x, y) => {
        try {
            let distance = Math.sqrt(x * x + y * y);
            return distance;
        } catch (e) {
            console.log(e);
        }
    },
     /**
         * Take i,jand k values as inputs using array.
         * sum three integer values adds to zero.
         * return the count.
         * Find sum of three intergers to zero.
         * arr[i] + arr[j] + arr[k] == 0.
         */
    exports.sumOfThree=(arr,number) => {

        try {
            let count = 0;
            for (i = 0; i < number; i++) {
                for (j = i + 1; j < number- 1; j++) {
                    for (k = i + 2; k < number- 2; k++) {
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
    * Traverse till i*i <= N instead of i <= N for efficiency.
    *  Print the prime factors of number N.
    */
    exports.factorial=(number) => {
    
        try {
            for (let factorial = 2; factorial * factorial <= N; factorial++) {
                while (number % factorial == 0) {
                    console.log(factorial + " ");
                    number = number/ factorial;
                }
            }
            if (number > 1)
                console.log(number);
            else
                console.log();
        }
        catch (e) {
            console.log(e);

        }

    },
/**
 * powerOfTwo programme This program takes a command-line argument N 
 * and prints a table o* The Power Value N. 
 * repeat until i equals N.  * print the powers of 2 that are less than are equal to 2^n.
 * return the i value.f the powers of 2 that are less than or equal to 2^N.
 * 
 */
exports.powerOfTwo=(number)=>{
   
    let i=0;
    let powerOfTwo=1;
    while(i<=number){
        powerOfTwo=powerOfTwo*2;
        i=i+1;
    }
},
 /**
     * count the heads and tails
     * Find the  Percentage of Head vs Tails
     * finlly count the result.
     */
exports.flipCoin=(number)=>{
    
    let count = 0, headcount = 0, tailscount = 0;
	//to check positive integer
	if (number > 0) {
		while (count <number) {
			//Each time different random number generated between 1 and 0
			if (Math.random() < 0.5) {
				headcount = headcount + 1; //heads count incremented
			}
			else {
				tailscount = tailscount + 1; //tails count incremented
			}
			count = count + 1;
		}
        console.log("Head flip percentage= " + ((headcount / N) * 100) + "%"); 
        //Print the heads flip percentage
        console.log("Tails flip percentage= " + ((tailscount / N) * 100) + "%"); 
        //Print the Tails flip percentage
	}
	else {
		console.log("Please Enter positive Integer");
	}
},
/**
 * 
 *  N Distinct Coupon Number.
 * repeatedly choose a random number and check whether it's a new one.
 * total random number needed to have all distinct numbers.
 *print the distinct coupans.
 */
 
exports.coupanNumber=(number)=>{
    let count=0;
    let randomCount=0;
    let distinctCoupans=0;
    while (count < number) {
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
     * harmonic value n
     * print the nth haronic value
     */
exports.harmonic=(number)=>{
   
    let h=1;
    for(let i=2;i<=number;i++){
        h=h+1/i;
    }
    return h;
}
/**
 * addition of two numbers
 * here x and y are the variable.
 * then finally return the result using promisses.
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