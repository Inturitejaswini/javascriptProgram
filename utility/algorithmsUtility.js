exports.getAllPermutations=(string)=>{
    /**
     * Recursive function to generate all permutations of a String. 
     * Check if the arrays returned by two string functions are equal.
     */
    let results = [];
    if (string.length ==1) {
        return string;
    }

    for (let i = 0; i < string.length; i++) {
        
        let first= string[i];
        let charsRemaining = string.substring(0, i) + string.substring(i + 1);
        let remainingPerms = getAllPermutations(charsRemaining);
        for (let j = 0; j < remainingPerms.length; j++) {
        results.push(first +remainingPerms[j]);

        }
    }
    return results;
 }
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
 * mergesort to sort the word list in sorted order.
 */
exports.mergeSort = (arr, low,high)=> {
    /**
     * a program to do Merge Sort of list of Strings.
     * To Merge Sort an array, we divide it into two halves, 
     * sort the two halves independently, and then merge the results
     *  to sort the full array. To sort a[lo, hi), we use the following recursive
     *  strategy.
     */
    if (low < high) {
        // Find the middle point 
        let mid = (low + high) / 2;

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
    }}
/**
 *anagrame programebl
 */
exports.isAnagram=(string1,string2)=>
{
    /**
     * One string is an anagram of another if the second is simply a 
     * rearrangement of the first.
     * The Two Strings are Anagram or not.
     */
    if(string1.length!=string2.length){
        return false;
    }
    else
    {
    let stringArray1=string1.toLowerCase().split('');
    let stringArray2=string2.toLowerCase().split('');
    if(stringArray1.sort().join('').localeCompare(stringArray2.sort().join('')==0)){
        return true;
    }else{
        return false;
    }
    }
},
/**
 *to find the prime number betwwen the range.
 */
exports.isPrimeRange=(n)=>{
    /**
     * Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
     */
    if(n<2){
        return false;
    }
    for(let i=2;i<=n/2;i++){
        if(n%i==0){
            return false;
        }else{
            return true;
        }
    }
    for(let i=0;i<=1000;i++){
        if(this.isPrimeRange(i))
        console.log(i);

    }
    
},
/**
 * number to find questionbl
 */
exports.getDetails=(message,firstName, lastName, fullName, contactNumber, date)=>{
    /**
     *  the Number N and then recursively ask true/false if the number
     *  is between a high and low .
     * Use Binary Search to find the number.

     */
        message=message.replace("<<name>>", firstName);
        message=message.replace("<<full name>>", fullName);
        message=message.replace("XXXXXXXXXX", contactNumber);
        message=message.replace("01/01/2016", date);
        console.log(message);
}

