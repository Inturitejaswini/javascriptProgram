/**
 * In observer pattern, the object that watch on the state of another object 
 * are called Observer and the object that is being watched is called Subject. 
 * @return return the result.
 */
exports.observerDesign=()=>{
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
    }
    