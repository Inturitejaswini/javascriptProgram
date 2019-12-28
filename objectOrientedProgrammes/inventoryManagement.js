let readline=require('readline-sync');
let fs=require('fs');
let data=fs.readFileSync('./inventory.json');
let obj = JSON.parse(data);
let arr=[];
console.log('====================================');
console.log("Resultant of Rice:");
console.log('====================================');
let len = obj.rice.length;
//let price=0;
for (let i = 0; i < len; i++) {
    let name = obj.rice[i].name;
    let weight = obj.rice[i].weight;
     let price =obj.rice[i].price;
     arr[i]=price;
    let company = (name, weight, price);
    console.log("Name : " + name + " , " + "Weight : " + weight + " , " + "price : " + price);
    console.log("Total price of rice is =" + company);
}
let i=0,sum=0;
while(i!=arr.length){
    sum=sum+arr[i];
    i++;
}
console.log("total sum of rice prices"+sum);
console.log('====================================');
console.log("Resultant of pulses:");
console.log('====================================');
for (let i= 0; i < len; i++) {
    let name = obj.pulses[i].name;
    let weight = obj.pulses[i].weight;
    let price = obj.pulses[i].price;
   
    let company = (name, weight, price);
    console.log("Name : " + name + " , " + "Weight : " + weight + " , " + "price : " + price);
    console.log("Total price of  is =" + company);
}
let j=0,sum1=0;
while(j!=arr.length){
    sum1=sum1+arr[j];
    j++;
}
console.log("total sum of pulces prices"+sum1);
console.log('====================================');
console.log("Resultant of wheat:");
console.log('====================================');
for (let i = 0; i < len; i++) {
    let name = obj.wheat[i].name;
    let weight = obj.wheat[i].weight;
    let price = obj.wheat[i].price;
    let company = (name, weight, price);
    console.log("Name : " + name + " , " + "Weight : " + weight + " , " + "price : " + price);
    console.log("Total price of wheat is =" + company);
}
let k=0,sum2=0;
while(k!=arr.length){
    sum2=sum2+arr[k];
    k++;
}
console.log("total sum of wheat prices"+sum2);

