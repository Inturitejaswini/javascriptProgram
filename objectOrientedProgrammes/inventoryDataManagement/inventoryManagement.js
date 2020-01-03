/******************************************************************************
 *  Execution       :   1. default node         cmd> node inventoryManagement.js 
 *                      2. if nodemon installed cmd> nodemodule inventoryManagement.js
 * 
 *  Purpose         : Create a JSON file having Inventory Details for Rice, Pulses and Wheats with 
 *                    properties name, weight, price per kg. 
                      Use Library : Java JSON Library, For IOS JSON Library use NSJSONSerialization
                      for parsing the JSON.

 *  @description    
 * 
 *  @file           : inventoryManagement.js
 *  @overview       :Create the JSON from Inventory Object and output the JSON String.
 *  @module         : inventoryManagement - This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 28-12-2019
 *
 ******************************************************************************/
let fs=require('fs');
let inventoryData=fs.readFileSync('./inventory.json');
let obj = JSON.parse(inventoryData);
let count=0;
let count1=0;
let count2=0;
console.log('====================================');
console.log("Resultant of Rice:");
console.log('====================================');
let len = obj.rice.length;
for (let i = 0; i < len; i++) {
    let name = obj.rice[i].name;
    let weight = obj.rice[i].weight;
     let price =obj.rice[i].price;
    count=count+obj.rice[i].price;
    console.log("Name : " + name + " , " + "Weight : " + weight + " , " + "price : " + price);
    console.log(price/weight+"perkg");
    console.log("Total price of rice is =" + count);
}
console.log('====================================');
console.log("Resultant of pulses:");
console.log('====================================');
for (let i= 0; i < len; i++) {
    let name = obj.pulses[i].name;
    let weight = obj.pulses[i].weight;
    let price = obj.pulses[i].price;
   count1=count1+obj.pulses[i].price;
    console.log("Name : " + name + " , " + "Weight : " + weight + " , " + "price : " + price);
    console.log(price/weight+"perkg");
    console.log("Total price of  is =" + count1);
}
console.log('====================================');
console.log("Resultant of wheat:");
console.log('====================================');
for (let i = 0; i < len; i++) {
    let name = obj.wheat[i].name;
    let weight = obj.wheat[i].weight;
    let price = obj.wheat[i].price;
    count2=count2+obj.wheat[i].price;
    console.log("Name : " + name + " , " + "Weight : " + weight + " , " + "price : " + price);
    console.log(price/weight+"perkg");
    console.log("Total price of wheat is =" + count2);
}