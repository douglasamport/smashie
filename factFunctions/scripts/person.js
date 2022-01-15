"use strict";

const Person = function(strength, dexterity, wpn) {
    const {abilityMod} = Modifiers()
    let _alive = true;
    let action;
    let target;
    const getDex = () => dexterity
    const actionSpeed = function() { return 10 + Math.ceil(Math.random()*10) - abilityMod(getDex())} ;
    let init = actionSpeed() ;
    const getAlive = () => _alive
    const setAlive = () => _alive = true
    const getStrength = () => strength;
    
    let _health = 10 + abilityMod(getStrength()) 
    let weapon = Weapon(wpn)

    const damage = () => {return weapon.getDamage() + abilityMod(getStrength())};
    const getHealth = () => _health;
    const modifyHealth = (num) => {_health += num }
    const wound = (num) => modifyHealth(-num)
    const setHealth = (num) => _health = num

    const activityDisplayMessage = function(msg) {
        let newPara = document.createElement('p');
        newPara.classList.add('activityPara');
        let dialogBox = document.getElementById("activityDisplay");
        newPara.innerHTML = msg;
        dialogBox.append(newPara);
    }

    const attack = function(enemy) {
        if (true) {
            let dmg = damage()

            enemy.wound(dmg)
            let msg = `${this.getName()} attacks ${enemy.getName()} and does ${dmg} <br>
            ${this.getName()} - ${this.getHealth()} ${enemy.getName()} - ${enemy.getHealth()}`;
            activityDisplayMessage(msg)
            enemy.checkDead(this);
        }
        // console.log(`${this.getName()} health ${this.getHealth()}`)
        // console.log(`${enemy.getName()} health ${enemy.getHealth()}`)
        console.log("")
    }
    const checkDead = function(attacker) {  // send attacker info
       let msg = `inside checkDead ${this.getName()}, ${this.getHealth()}` 
       activityDisplayMessage(msg)
        if (this.getHealth() <= 0) {
            _alive = false;
            console.log(`${this.getName()} has died.`)
        } else console.log(`${this.getName()} says "I'm not dead yet!"`)
    }
    
    return {action, target, init, getHealth, getStrength, getAlive, setAlive, attack, wound, setHealth, checkDead, actionSpeed}
}