"use Strict";

function wait(ms) {
    let d = new Date();
    let d2 = null;
    do { d2 = new Date(); }
    while (d2-d < ms )
}

function logInitsOfArr(a) {
    console.log('inits')
    let array = [];
    a.forEach(char => array.push([char.getName(), char.init]))
    console.log(array)
}

function logHealthsOfArr(a) {
    console.log("health")
    let array = [];
    a.forEach (char => array.push([char.getName(), char.getHealth()]))
    console.log(array)
}

function logTargetsOfArr(a) {
    console.log("targets")
    let array = [];
    a.forEach (char => array.push([char.getName(), char.target.getName()]))
    console.log(array)
}

function activityLoop(arr) {
    while (arr.length > 0 ) { 
        //wait(1000)
       // logNamesOfArr(arr)
        arr.sort((a, b) => a.init - b.init);
        if (arr[0].init > 0) {
            arr = arr.map( (mob) => {
                mob.init --
                return mob;
            });
            continue;
        } else { 
            
    
            //console.log('middle of loop',arr[0].getAlive(), arr[0].target.getName(), arr[1].getAlive(), arr[1].target.getName())

            if (!arr[0].getAlive()) { arr.splice(0, 1)}
           //no console.log('this is the one', arr[0].target)
           //logTargetsOfArr(arr)
            if (arr[0].target == undefined || !arr[0].target.getAlive()) {
                let newTarget = arr.find( (obj) => obj.getType() == arr[0].getHostile() );  //
                
                //console.log(arr[0].getName(), arr.length, arr[0].getType(), arr[0].getHostile(), newTarget)

                if (arr.length > 1 && newTarget != undefined) {

                    arr[0].target = newTarget

                }
                else {arr.splice(0, 1)}
            }
            if (arr.length == 0) { continue;}


            if (arr[0].init == 0) {
                logInitsOfArr(arr)
                arr[0].action(arr[0].target)
                arr[0].init = arr[0].actionSpeed()
                logHealthsOfArr(arr)
            }
            
    
        }
    }
    console.log('end of battle')
}