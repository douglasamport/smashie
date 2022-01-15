"use strict";

const Weapon = function(type) {
    
    const getType = () => type;
    const getDamage = function() {
        if (getType() === 'sword') {
            return Math.ceil(Math.random()*8)
        } else {Math.ceil(Math.random()*2)}
    }
    
    return {getDamage}
}