/**
 * To find permutations of given string.
 */
module.exports={
    /**
     * the arrays returned by two string functions are equal.
     * a String using iterative method and Recursion method. 
     */
    getAllPermutations = (string) => {
        /**
         * Finally find the all permutations of given string.
         * return the result of all permutations.
         */
        let results = [];
        if (string.length ==1) {
            results.push(string);
             console.log(' String in if '+string);
            console.log('Result in if '+results);
            return results;
        }
    
        for (let i = 0; i < string.length; i++) {
              console.log("i is "+i);
            let firstChar = string[i];
             console.log("first char "+firstChar);
            let charsLeft = string.substring(0, i) + string.substring(i + 1);
             console.log("chars left "+charsLeft);
            let innerPermutations = getAllPermutations(charsLeft);
            console.log("inner  "+innerPermutations);
            for (let j = 0; j < innerPermutations.length; j++) {
                console.log(" j "+j);
                results.push(firstChar + innerPermutations[j]);
                 console.log('result for '+results);
    
            }
        }
        return results;
    },
    

    

/**
 * bubble sort programme to sort elementsin the given array.
 */

bubbleSort=()=> {
    /**
     *  Reads in integers prints them in sorted order using Bubble Sort
     *  read in the list ints.
     * print the elements in sorted list using this bubble Sort.
     */
    for (i = 0; i < arr.length-1; i++)  
    { 
        for (j = 0; j < arr.length-1-i;j++)  
        { 
            if (arr[j] > arr[j + 1])  
            { 
                // swap arr[j] and arr[j+1] 
                temp = arr[j]; 
                arr[j] = arr[j + 1]; 
                arr[j + 1] = temp; 
            } 
        } 
    } 
}
}
 /**
  * 
  *  */   

 binarySearch = (stringArray, searchWord) => 
 {
    stringArray = stringArray.sort();
    console.log("Sorted array");
    console.log(stringArray)
    //initialize lower and higher index
    let low = 0, high = stringArray.length - 1;
    let mid = Math.floor((high + low) / 2);
    //run loop till lower index is lesser than or equal to higher index
    while (low <= high && stringArray[mid] != searchWord) {
        //adjust search area of array
        if (searchWord < stringArray[mid]) {
            high = mid - 1;
        } else if (searchWord > stringArray[mid]) {
            low = mid + 1;
        }

        //recalculate middle
        mid = Math.floor((high + low) / 2);
    }
    //return -1 if word is not present else mid value
    return (stringArray[mid] != searchWord) ? -1 : mid + 1;
}