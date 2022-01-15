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