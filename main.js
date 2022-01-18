

const gameboard = new Board()
let jim = new Hero([40, 40], 'jim')
// new Orc([300, 200])
new Orc([340, 240])
// console.log(Mob.hero)

// console.log(gameboard.boardArr)
// console.log(Mob.allMobs)

display.render(gameboard.boardArr)
display.renderMobs(Mob.allMobs)
// Logic.turnRunner()

function baselineListener(e) {
    console.log(e.target)
    console.log(e.target.id)
    console.log([...e.target.classList].includes('mobs'))

    if ([...e.target.classList].includes('mobs') && Logic.activeMob == null) {
        
        e.target.id
        let activeMob = Mob.allMobs.find((mob) => mob.uniqId ==  e.target.id)
        
        Logic.activeMob = activeMob

        removeEventListener('click', baselineListener)

        addEventListener('click', targetListener)
    }   

}

function targetListener(e) {
    console.log(Logic.activeMob)
    Logic.activeMob.setTarget([e.x, e.y])
    Logic.activeMob.actionArr.push(Logic.activeMob.move.bind(Logic.activeMob))
    //need to empty the active Mob slot
    //need to make this able to move and attack
    Logic.activeMob = null
    removeEventListener('click', targetListener)
    addEventListener('click', baselineListener)
}

addEventListener('click', baselineListener)
    
    
    // console.log(e.x, e.y)

    
    // console.log(jim.actionArr)

    // console.log(jim)
    
    // display.renderMobs(Mob.allMobs)

