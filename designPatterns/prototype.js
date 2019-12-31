
/******************************************************************************
 *  Execution       :   1. default node         cmd> node prototype.js 
 *                      2. if nodemon installed cmd> nodemon prototype.js
 *  Purpose         : is used when the Object creation is a costly affair 
 *                    requires a lot of time and resources and you have a similar object already
 *                     existing.  
 *  @description    
 *  @file           : prototype.js
 *  @overview       :Use Prototype Pattern as shown in the Link above to create multiple 
 *                   Employee Object.
 *  @module         : prototype- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          :31-12-2019
 *
 ******************************************************************************/
class Super{
    constructor()
    {
        this.array = [];
    }
    loadData()
    {
        this.array.push("madhulika");
        this.array.push("sai");
        this.array.push("sweety");
        this.array.push("chinni");
    }
    clone()
    {
        let clone = [];
        for(let i=0;i<this.array.length;i++){
            clone[i] = this.array[i];
        }
        return clone;
    }
}
let  Prototype = () => {
    let array1 = [];
    let array2 = [];
    let s1 = new Super();
    s1.loadData();
    array1 = s1.clone();
    array2 = s1.clone();
    array1.push("teju");
    array1.push("sowmya");
    array2.push("sragdha");
    console.log(array1);
    console.log(array2);
}
Prototype();
