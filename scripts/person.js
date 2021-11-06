const Modifiers = function() {

    const abilityMod = function( func ){
        abilityTable = {1:-5,2:-4,3:-4,4:-3,5:-3,6:-2,7:-2,8:-1,9:-11,12:1,13:1,14:2,15:2,16:3,17:3,18:4,19:5,20:5,21:5,22:6,23:6,24:7,25:7,26:8,27:8,28:9,29:9,30:10}
        return abilityTable[func] != undefined ? abilityTable[func] : 0;
    }
    return {abilityMod}
}

const Weapon = function(type) {
    const getType = () => type;
    const getDamage = function() {
        if (getType() === 'sword') {
            return Math.ceil(Math.random()*8)
        } else {Math.ceil(Math.random()*2)}
    }
    
    return {getDamage}
}

const Person = function(strength, wpn) {
    let _alive = true;
    const getAlive = () => _alive
    const setAlive = () => _alive = true
    const {abilityMod} = Modifiers()
    const getStrength = () => strength;
    
    let _health = 10 + abilityMod(getStrength()) 
    let weapon = Weapon(wpn)

    const damage = () => {return weapon.getDamage() + abilityMod(getStrength())};
    const getHealth = () => _health;
    const modifyHealth = (num) => {_health += num }
    const wound = (num) => modifyHealth(-num)
    const setHealth = (num) => _health = num

    const attack = function(enemy) {
        if (true) {
            let dmg = damage()
            enemy.wound(dmg)
            console.log(`${this.getName()} attacks ${enemy.getName()} and does ${dmg} `)
            enemy.checkDead(this)
        }
        // console.log(`${this.getName()} health ${this.getHealth()}`)
        // console.log(`${enemy.getName()} health ${enemy.getHealth()}`)
        console.log("")
    }
    const checkDead = function(attacker) {  // send attacker info
       console.log('inside checkDead',this.getName(), this.getHealth())
        if (this.getHealth() <= 0) {
            _alive = false;
            console.log(`${this.getName()} has died.`)
        } else console.log(`${this.getName()} says "I'm not dead yet!"`)
    }
    return { getHealth, getStrength, getAlive, setAlive, attack, wound, setHealth, checkDead}
}



const Character = function(name, strength, weapon) {  //add race and class later
    let personProto = Person(strength, weapon)
    const getName = () => name
    return Object.assign({}, personProto, { getName })
}

const jim = Character('jim', 18, "sword")
const brutus = Character('brutus', 14, 'sword')


function battle(player1, player2) {  //modify to use arrays so that multiple characters can fight silmultaniously, use an initiative countdown mechanisim.
    console.log('brutus', player1.getHealth(), 'jim', player2.getHealth())
    console.log('NEW BATTLE<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
    let victor = true;
    let attacker = player1;
    let defender = player2;
    while (victor) {
        attacker.attack(defender)
        //defender.checkDead()
        if (defender.getAlive()) {
            console.log('')
            console.log(`${attacker.getName()} has ${attacker.getHealth()} health`)
            console.log(`${defender.getName()} has ${defender.getHealth()} health`)
            let temp1 = attacker
            let temp2 = defender
            attacker = temp2
            defender = temp1
        } else { victor = false;}
    }
    console.log(`${attacker.getName()} is the winner`)
    
    return attacker.getName()
}

function epicBattle(n) {
    var counter = 0;
    var winner = [];
    return function(one, two) {
        let resetP1 = one.getHealth();
        let resetP2 = two.getHealth();
        while (counter <= n ) {
            let victor = battle(one, two);
            winner.push(victor)
            counter ++
            reset(one, two, resetP1, resetP2)
        }
        console.log(winner)
        var sumVictors = winner.reduce((obj, elmt) => {
            (obj.hasOwnProperty(elmt)) ? obj[elmt] += 1 : obj[elmt] = 1;
            return obj;
        }, {} );
        console.log(sumVictors)
    }
}

function reset(one, two, resetP1, resetP2) {
    one.setHealth(resetP1);
    two.setHealth(resetP2);
    one.setAlive()
    two.setAlive()
}


var tenBattles = epicBattle(1000)
tenBattles(brutus, jim);