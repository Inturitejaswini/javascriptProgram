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
    