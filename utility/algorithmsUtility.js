
    /**
     * the arrays returned by two string functions are equal.
     * a String using iterative method and Recursion method. 
     */
    exports.getAllPermutations = (string) => {
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

exports.bubbleSort=(arr)=> {
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
    }return arr;
},

 /**
  * binarysearch to find word from a wordlist
  *  */   
 exports.binarySearch=(items, value)=>
 {
 /**
  * read in the list words comma separated from a File and 
  * then enter the word to be searched.
  * Use Arrays to sort the word list and then do the binary search
  * Print the result if the word is found or not.
  */

    let startIndex  = 0,
        stopIndex   = items.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);
 
    while(items[middle] != value && startIndex < stopIndex){
 
        //adjust search area
        if (value < items[middle]){
            stopIndex = middle - 1;
        } else if (value > items[middle]){
            startIndex = middle + 1;
        }
 
        //recalculate middle
        middle = Math.floor((stopIndex + startIndex)/2);
    }
 
    //make sure it's the right value
    return (items[middle] != value) ? -1 : middle;
},
/**
 * 
 */
exports.insertionSort=(arr)=>{
     let len=arr.len;
    for (let i = 1; i <len; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >-1 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}
