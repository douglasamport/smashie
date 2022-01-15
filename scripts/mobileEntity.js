class Mob {
    static hero
    static allMobs = [];
    constructor(position, id = this.#randomId()) {
        this.id = id
        this.position = position
        Mob.allMobs.push(this)
    }

    #randomId() {
       return (Mob.allMobs.length + 1).toString().padStart(4, '0')
    }

    set setPosition(pos) {
        this.position = pos
        
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