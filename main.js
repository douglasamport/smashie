

const gameboard = new Board()
let jim = new Hero([0, 0], 'jim')
// new Orc([300, 200])

let sam = new Orc([8, 8])
// console.log(sam)
// console.log(Mob.hero)

// console.log(gameboard.boardArr)
// console.log(Mob.allMobs)

display.render(gameboard.boardArr)
display.renderMobs(Mob.allMobs)
// Logic.turnRunner()

function baselineListener(e) {
    console.log(e.target)
    // console.log(e.target.id)
    // console.log([...e.target.classList].includes('mobs'))

    if ([...e.target.classList].includes('mobs') && Logic.activeMob == null) {
        
        e.target.id
        let activeMob = Mob.allMobs.find((mob) => mob.uniqId ==  e.target.id)
        
        Logic.activeMob = activeMob
        let msg = `${activeMob.name} is active`
        console.log(msg)
        display.renderText(msg)

        removeEventListener('click', baselineListener)

        addEventListener('click', targetListener)
    }   

}

function targetListener(e) {
    let mob = Logic.activeMob
    console.log(e.target.id.split('-'))
    let targetArr = e.target.id.split('-').map(x=> parseInt(x))
    mob.setTarget([targetArr[0], targetArr[1]])
    mob.actionArr.push(mob.move.bind(mob))
    console.log(`${mob.name} is on the move to ${mob.position}`)
    display.renderText(`${mob.name} is on the move to ${mob.position}`)



    Logic.activeMob = null
    removeEventListener('click', targetListener)
    addEventListener('click', baselineListener)
}

addEventListener('click', baselineListener)
    
    
    // console.log(e.x, e.y)

    
    // console.log(jim.actionArr)

    // console.log(jim)
    
    // display.renderMobs(Mob.allMobs)

