"use strict";

const jim = Character('jim', 18, 12, "sword", 'orc')
const tim = Character('tim', 16, 14, 'sword', 'orc')
const lim = Character('lim', 14, 16, 'sword', 'orc')
const brutus = Character('brutus', 16, 14, 'sword', 'human')
const caesar = Character('caesar', 14, 16, 'sword', 'human')
const magnus = Character('magnus', 12, 18, 'sword', 'human')

const activityArray = []


activityArray.push(jim)
activityArray.push(tim)
activityArray.push(lim)
activityArray.push(caesar)
activityArray.push(brutus)
activityArray.push(magnus)

activityArray.forEach(obj => obj.action = obj.attack)


console.log(activityArray.length)
activityLoop(activityArray);

//   Make characters
//  assign actions
// assign targets