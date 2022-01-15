

const gameboard = new Board()
let jim = new Hero([4,4], 'jim')
new Orc([8,8])
new Orc([8,7])

console.log(Mob.hero)
console.log(gameboard.boardArr)
console.log(Mob.allMobs)

display.render(gameboard.boardArr)
display.renderMobs(Mob.allMobs)

addEventListener('click', () => {
    jim.setPosition = [1,1]
    
    display.renderMobs(Mob.allMobs)
})
