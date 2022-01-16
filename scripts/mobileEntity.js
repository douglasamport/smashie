class Mob {
    static hero
    static allMobs = [];
    constructor(position, id = this.#randomId()) {
        this.id = id
        this.position = position;
        this.target = position;
        Mob.allMobs.push(this)
    }

    #randomId() {
       return (Mob.allMobs.length + 1).toString().padStart(4, '0')
    }

    setPosition(pos) {
        this.position = pos
    }

    setTarget(pos) {
        this.target = pos
    }

    test() {
        let count = 0
        while (count < 10) {
            console.log(count)
            count++
        }
    }

    move() {
        let count = 0 
        while (!this.arrayEquals(this.target, this.position) && count < 1000) {
            console.log('moving')
            let xDiff = this.target[0] - this.position[0]
            let xSign = Math.sign(xDiff)
            let xMoveMod = Math.abs(xDiff) >= 10 ? 10 : Math.abs(xDiff)
            
            let yDiff = this.target[1] - this.position[1]
            let ySign = Math.sign(yDiff)
            let yMoveMod = Math.abs(yDiff) >= 10 ? 10 : Math.abs(yDiff)

            let newPos = [(parseInt(this.position[0])+(xMoveMod*xSign)), (parseInt(this.position[1])+(yMoveMod*ySign)) ]
            console.log(newPos, this.target, this.position)
            this.setPosition(newPos)
            display.renderMobs(Mob.allMobs)
            

            count++

        }
    }

    arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
        }



}

class Humanoid extends Mob {
    constructor(position, id) {
        super(position, id)
        this.strength = this.#randomRoll();
        this.dexterity = this.#randomRoll();
    }

    updateStrength(num) {
        this.strength += num;
    }

    updateDexterity(num) {
        this.dexterity += num;
    }

    #randomRoll () {
        let d1 = Math.floor(Math.random()*6)
        let d2 = Math.floor(Math.random()*6)
        let d3 = Math.floor(Math.random()*6)
        return d1+d2+d3
    }
}

class Hero extends Humanoid {
    constructor(position, id, strength, dexterity) {
        super(position, id, strength, dexterity)
        this.type = 'hero'
        this.name = this.type + this.id
        this.color = 'red';
        Mob.hero = this
    }
    
}

class Orc extends Humanoid {
    constructor(position, id, strength, dexterity) {
        super(position, id, strength, dexterity) 
        this.type = 'orc'
        this.name = this.type + this.id
        super.updateStrength(1)
        super.updateDexterity(-1)
        this.color = 'black'
    }

}


class Monster extends Mob {
    constructor(position, type, id) {
        super(position, id)
        this.type = type
        this.name = this.type + this.id
    }
}