/**
 * To create a Computer Factory that can Produce PC, Laptop and Server Class 
 *  Computers.
 * @return return the result.
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

/**
 * It is used when the Object creation is a costly affair requires a lot of time and 
 * resources and you have a similar object alreadyexisting. 
 * @return return the result.
 */
exports.prototypeDesign=()=>{
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
}

/**
 * we have to write the code using singlton design pattern to take one small exaple.
 * @return finally return the result.
 */
exports.singletonDesign=()=>{
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
}
