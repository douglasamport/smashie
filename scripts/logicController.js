const Logic = (() => {
    const activeMob = null; 
    counter = 0

    const turnRunner = function() {
            counter++   
            if (counter == 500) {
                clearInterval(turnInterval)
            }
            if (counter%10 == 0 ) { console.log('turn', counter)}
            decreaseInitByOne(Mob.allMobs)
            performActions(Mob.allMobs)

    }


    const turnInterval = setInterval(turnRunner, 500);


    const decreaseInitByOne = function(mobArr) {
        mobArr.forEach(mob => {
            if( mob.inititive > 0 ) {
                mob.inititive-- 
            }
        })
    }

    const performActions = function(mobArr) {
        mobArr.forEach(mob => {
            if( mob.inititive == 0 ) {
                // console.log(`${mob.name} should be performing ${mob.actionArr[0]}`)
                // console.log(mob.actionArr[0])
                if (mob.actionArr[0] instanceof Function) {
                    mob.actionArr[0]()

                    
                }
            }
        })
    }

    return {turnRunner}

})();