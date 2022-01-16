

const gameboard = new Board()
let jim = new Hero([40, 40], 'jim')
new Orc([300, 200])
new Orc([340, 240])

console.log(Mob.hero)
console.log(gameboard.boardArr)
console.log(Mob.allMobs)

display.render(gameboard.boardArr)
display.renderMobs(Mob.allMobs)

addEventListener('click', (e) => {
    console.log(e.x, e.y)
    jim.setTarget([e.x, e.y])
    jim.move()
    
    // display.renderMobs(Mob.allMobs)
})
