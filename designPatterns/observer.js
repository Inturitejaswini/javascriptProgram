
/******************************************************************************
 *  Execution       :   1. default node         cmd> node observer.js 
 *                      2. if nodemon installed cmd> nodemon observer.js
 *  Purpose         : In observer pattern, the object that watch on the state of another object 
 *                   are called Observer and the object that is being watched is called Subject. 
 *  @description    
 *  @file           : observer.js
 *  @overview       :  Whenever any new message will be posted to the topic, all the registers 
 *                     observers will be notified and they can consume the message.
 *  @module         : observer- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          :31-12-2019
 *
 ******************************************************************************/
class Observable {
    constructor() 
    {
      this.observers = [];
    }
    subscribe(observer) 
    {
      this.observers.push(observer);
    }
    notifyAll()
    {    
      this.observers.map(observer => observer.notify())  
    }
}
class Observer {
    constructor(name) {
        this.name = name;
    }  
    notify() {
        console.log(`${this.name} is notified`);
    }
}
      
let observable = new Observable();

let observer1 = new Observer("First Observer");
let observer2 = new Observer("Second Observer");
let observer3 = new Observer("Third Observer");

observable.subscribe(observer1);
observable.subscribe(observer2);
observable.subscribe(observer3);

observable.notifyAll();