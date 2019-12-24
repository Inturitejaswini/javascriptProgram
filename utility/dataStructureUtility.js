/**
 * Read the Text from a file, split it into words and arrange it as Linked List. T
 * ake a user input to search a Word in the List. If the Word is not found then add
 *  it to the list, and if it found then remove the word from the List. In the end 
 * save the list into a file.

 */

exports.
    unorderedList=(stringArray, searchWord)=> {
        //create a new object of Linkedlist class
        let list = new linkedList;
        //add all the array element to the linked list

        for (let i = 0; i < stringArray.length; i++) {
            list.add(stringArray[i]);
        }
    // This condition checks for adding the item,if item not exists in file
        if (list.search(searchWord) == -1) {
            list.add(searchWord);
            console.log("Added successfully..\n");
        }
        
        //This condition checks for removing the item,if item already exists in file
        else {
            list.remove(searchWord);
            console.log("Removed successfully....\n");
        }
        //write operation to save updated list into the file.
        let dataWrite = list.show();
        writeToFile("../../teju.txt", dataWrite);
    }

class Node {
    constructor(searchWord) {
        this.searchWord = searchWord;
        this.next = null;
    }
}
  //creating class linkedlist which will create new nodes and perform operation like 
  //add,remove,insertAt,insertFrom.
class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(searchWord) {
          //creating a new node
        let node = new Node(searchWord);
         //to store current node 
        let current;
         //if list is empty add an searchWord and make it head. 
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    // remove the string or searchWord,if it already exists
    remove(searchWord) {
        let current = this.head;
        let previous = null;
        while (current != null) {
            if (current.searchWord === searchWord) {
                if (previous == null) {         //if first element is the searchword
                    this.head = current.next;   // the saerchword will be removed and head will be the next element
                }
                //it works when the search element is not at the first.
                //so the previos node store the reference of next node.
                else {
                    previous.next = current.next;
                }
                this.size--;  //size decremented
                return current.searchWord;
            }
            //if search word not found
            previous = current;
            current = current.next;
        }
        return -1;
    }
    // checks the search word already present or not
    search(searchWord) {
        let count = 0;
        let current = this.head;
        while (current != null) {
            if (current.searchWord === searchWord) {
                return count; //if item found it will return 1
            }
            count++;
            current = current.next;
        }
        return -1; //item not found it will return -1
    }

    show() {
         //print the given list after performing changes.
        let current = this.head;
        let string = "";
        while (current) {
            string += current.searchWord + " ";
            current = current.next;
        }
        console.log(string);
        return string;
    }
}

function writeFile(fileName, data) {
    let fs = require('fs');
    // it is used to access the file  system module
    //fs.writefile() write the data in specified file if does not found it will create the file
    fs.writeFile(fileName, data, function (err) {     //this function write the data in file
        if (err) {
            return console.log(err); //error 
        }
    });
}
/**
 * Read .a List of Numbers from a file and arrange it ascending Order in a Linked List.
 *  Take user input for a number, if found then pop the number out of the list else inser
 * t the number in appropriate position.
 */
exports.
    orderedList=(fileData, searchNumber)=> {
        let  fileDataArray = fileData.toString().split(' ');
        let numbersArray = new Array();
        for (let i = 0; i < fileDataArray.length; i++) {
            numbersArray.push(fileDataArray[i]);
        }
        //create a new object of Linkedlist class
        let list = new linkedList;
        //Before inserting linked list sort the array 
        numbersArray = numbersArray.sort(function (a, b) {
            return a - b;
        });
        console.log("Sorted array: " + numbersArray);
        //add all the numbers array element to the linked list
        for (let i = 0; i < numbersArray.length; i++) {
            list.add(numbersArray[i]);
        }
        list.show();
        if (list.search(searchNumber) == -1) {
            list.add(searchNumber);
            console.log("Added successfully..\n");
        }
        //This condition checks for removing the item,if item already exists in file
       else {
        list.removeSearchNumber(searchNumber);
        console.log("Removed successfully....\n");
    }
         //write operation to save updated list into the file.
        let  dataWrite = list.show();
        writeFile("../../number.txt", dataWrite);
    }

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(searchNumber) {
         // creating a new node
        let node = new Node(searchNumber);
         // if list is empty add an searchNumber and make it head. 
        if (this.head == null) {
            this.head = node;
        }
        else {
           //to store current node 
            let current = this.head;
            let previous,count=0;
            //while loop iterate till last node if search number greater than all
            while (current.next!=null &&count!=1) {
                if (current.data > searchNumber) { //if current data greater than search number
                    previous.next = node; //node reference will be added to the previous node
                    node.next = current;  //current node reference will added to the node
                    count++;
                }
                else {
                    previous = current;    //previous will store current
                    current = current.next; //current will store next next node
                }
            }
            if(current.next==null)  //if the search number greater than all, then it added to last
            {
            current.next = node;    
            }
        }
        this.size++;  //size incremented
    }
    // remove the string or searchNumber,if it already exists
   removeSearchNumber(searchNumber) {
    let current = this.head;
    let previous = null;
    while (current != null) {
        if (current.data == searchNumber) {
            if (previous == null) {         //if first element is the searchNumber
                this.head = current.next;   // the saerchword will be removed and head will be the next element
            }
            //it works when the search element is not at the first.
           //so the previos node store the reference of next node.
            else {
                previous.next = current.next;
            }
            this.size--;  //size decremented
            return current.searchNumber;
        }
        //if search word not found
        previous = current;
        current = current.next;
    }
    return -1;
}
    show() {
        // print the given list after performing changes.
        let current = this.head;
        let string = "";
        while (current) {
            string += current.data + " ";
            current = current.next;
        }
        console.log("Ordered Linked list: " + string);
        return string;
    }
    search(searchNumber)
    {
        let count = 0;
        let current = this.head;
        while (current != null) {
            if (current.data == searchNumber) {
                return count; //if item found it will return 1
            }
            count++;
            current = current.next;
        }
        return -1; //item not found it will return -1
    }

}
function writeFile(fileName, data) {
    let fs = require('fs');
    
    // it is used to access the file  system module
    //fs.writefile() write the data in specified file if does not found it will create the file
    fs.writeFile(fileName, data, function (err) {     //this function write the data in file
        if (err) {
            return console.log(err); //error 
        }
    });
}
/**
 * 
 */
exports.
    balancedParanthesis=(expression)=>{
         // create a new stack. 
        let stack=new Stack();
        let openParanthesis=0;
        let closeParanthesis=0;
        for(let i=0;i<expression.length;i++){

            // the expressions open pranthesis will push to the stack.
            if(expression[i]=="("){
                stack.push(expression[i]);
                openParanthesis++; //count the total push
               // stack.displayStack();
            }
             //while closing paranthesis it will perform pop opeartion. 
           else if(expression[i]==")"){
                stack.pop();
                closeParanthesis++;
                //console.log(stack.pop());
            }
        }
        if(openParanthesis==closeParanthesis){
            console.log("Arithmetic expression is balanced");
        }
        else{
            console.log("Arithmetic expression is not balanced");
        }
    }

class Stack{
    constructor(){
        this.items=[]; //create new array for store expression paranthesis
        this.top=-1;
    }
     // add paranthesis to the stack at last
    push(element){
        //this.items.push(element);
        this.items[this.top++]=element;
    }
     //remove or delete paranthesis from from the first of stack.
    pop(){
        if(this.top==-1)
        {
            return -1;
        }
        else
        {
        return this.items[this.top--]; //delete the one paranthesis from stack
        }
    }
    peek(){
         //it will return top element of stack without removing it.
        return this.items[this.top];
    }
    isEmpty(){
        // checks if stack is empty are not
       if(this.top==-1)
        return true;
      return false;
    }
    displayStack(){
        // display stack 
        let str="";
        for(let i=0;i<=this.top;i++){
            str+=this.items[i]+"";
        }
            console.log(str); 
    }
}
/**
 * 
 */
let read = require("readline-sync");
exports.bankTransaction=(balance,num)=>{
    try {
        let queue=new Queue();
        let i=0;
        while(i<num){
            queue.enQueue(i);
            i++;
        }
        let j=0;
        while(j!=queue.length){
            let option=read.question("press 1 to deposit money & press 2 withdrawl money");
            if(option==1){
                let deposit=read.question("enter the amount to be deposit");
                balance=(parseInt(balance)+parseInt(deposit));
                console.log("total balance is="+balance);
            }
            else if(option==2)
            {
                let withdrawl=read.question("enter the amount to be withdrawl");
                if(balance>withdrawl){
                    balance=(parseInt(balance)-parseInt(withdrawl));
                    console.log("total balance is:"+balance);
                }
                else{
                    console.log("you dont have required balance in your account");
                }
            }
            else{
                console.log("invalid option !!!!!!");
            }
            j++;
        }
    } catch (error) {
        console.log(error);
    }
}
class Queue{
     // create a new constructor to create object of item.
    constructor(){
        this.items=[]; //declare items array
    }    
     // add elements into the queue using enqueue function.
    enQueue(element){
        return this.items.push(element); //item added to the queue array
    }
        deQueue(){
        if(this.isempty()){
            return "underflow";
            return this.items.shift();
        }
        isempty()
        {
            if(this.items.length==0){
                return true;
            }
            else{
                return false;
            }
        }
        length()
        {
            return this.items.length;
        }
            
     }
     printqueue(){
         let str="";
         for(let i=0;i<this.items.length;i++){
             str+=this.items[i]+" ";
             return str;
         }
     }
}
