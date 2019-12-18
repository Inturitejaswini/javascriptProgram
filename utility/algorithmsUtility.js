
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
 * Reads in strings and prints them in sorted order using insertion sort.
 */
exports.insertionSort=(arr)=>{
    /**
     * read in the list words
     * Use Insertion Sort to sort the words in the String array
     * Print the Sorted List.
     */
    for (let i = 1; i <arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >-1 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
},
/**
 * 
 */
exports.mergeSort = (arr, low,high)=> {
    if (low < high) {
        // Find the middle point 
        let mid = parseInt((low + high) / 2);

        // Sort first and second halves 
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high); 
        // Merge the sorted halves 
        merge(arr, low, mid, high);
    }
    return arr;
}
function merge(arr, low, mid, high) {
    // Find sizes of two subarrays to be merged 
    let array1 = mid - low + 1;
    let array2= high - mid;

    /* Create temporary arrays */
    let leftArray = new Array(array1);
    let rightArray = new Array(array2);

    /*Copy data to temporary arrays*/
    for (let i = 0; i < array1; ++i)
        leftArray[i] = arr[low + i];
    for (let j = 0; j < array2; ++j)
        rightArray[j] = arr[mid + 1 + j];


    /* Merge the temp arrays */

    // Initial indexes of first and second subarrays 
    let i = 0, j = 0;

    // Initial index of merged subarry array 
    let k = low;
    while (i < array1 && j <array2) {
        if (leftArray[i].localeCompare(rightArray[j]) <= 0) {
            arr[k] = leftArray[i];
            i++;
        }
        else {
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }

    /* Copy remaining elements of L[] if any */
    while (i < array1) {
        arr[k] = leftArray[i];
        i++;
        k++;
    }

    /* Copy remaining elements of R[] if any */
    while (j < array2) {
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}