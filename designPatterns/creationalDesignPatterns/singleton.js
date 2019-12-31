/******************************************************************************
 *  Execution       :   1. default node         cmd> node singleton.js 
 *                      2. if nodemon installed cmd> nodemon singleton.js
 *  Purpose         : we have to write the code using singlton design pattern to take one small exaple.
 *  @description    
 *  @file           : singleton.js
 *  @overview       : singleton design pattern.
 *  @module         : anagrame- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 17-12-2019
 *
 ******************************************************************************/
let car = function(){
    let carInstance;
    function create(){
        let running = false;
        function start(){
            running = true;
        }
        function stop(){
            running = false;
        }
        function state(){
            return running?"running":"notRunning";
        }
        return{
            start:start,
            stop:stop,
            state:state
        }
    }
    return{
        getInstance: function(){
            if(!carInstance){
                carInstance = create();
            }
            return carInstance;
        }
    }
}

let cars = new car()
let car1 = cars.getInstance();
let car2 = cars.getInstance();
car1.start();
car2.stop();
console.log(car2.state());