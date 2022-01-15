"use strict";

const Character = function(name, strength, dexterity, weapon, type) {  //add race and class later
    let personProto = Person(strength, dexterity, weapon)
    const getName = () => name
    const getType = () => type;
    const getHostile = function() {
        let self = this.getType()
        if (self == 'orc') {return 'human'}
        else { return 'orc'}
    }
    return Object.assign({}, personProto, { getName, getType, getHostile })
}