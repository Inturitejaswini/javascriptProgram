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