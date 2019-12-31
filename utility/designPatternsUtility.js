/**
 * 
 */
exports.factoryDesign=()=>{
class Computer {
    constructor(ram,hdd,processor) 
    {
      this.ram=ram;
      this.processor=processor;
      this.hdd=hdd;
    }
}
let factory=(type,ram,hdd,processor) =>{
    this.type=type;
    if(type=="pc"){
        let pc=new Computer(ram,hdd,processor);
        console.log(type +":");
        console.log(pc.ram+"ram"+pc.hdd+"hdd"+pc.processor+":processor");
    }
    if(type=="laptop"){
        let laptop=new Computer(ram,hdd,processor);
        console.log(type+":");
        console.log(laptop.ram+"ram,"+laptop.hdd+"hdd,"+laptop.processor+":processor");
    }
    if(type=="server"){
        let server=new Computer(ram,hdd,processor);
        console.log(type+":");
        console.log(server.ram+"ram,"+server.hdd+"hdd,"+server.processor+":processor");
    }
}
factory("server","2 gb","500 gb","i7");
factory("pc","2 gb"," 500 gb"," i7");
factory("laptop","4 gb","1 tb","i11");
}
/**
 * 
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