// game states:
// 0 - fresh start aka brand new game - user action: select your character
// 1 - character selected - user action: select the new opponent
// 2 - opponent selected aka active round - user action: fight
// 3a - you lost the round/game - user action: reset the game
// 3b - you won the round - logic needed: did you win the game, or did you win the round?
    // 3b0 - you won the game - user action: reset the game
    // 3b1 - you won the round - logic: put user back in state 1


// characters have:
// name
// health points
// attack points
// counter attack points

// selected character will have:
// updating attack points as game progresses (increments by 8 with each attack)

// create objects for each character

var char0 = {
    name: 'Obi-Wan',
    hp: 120,
    ap: 8,
    cp: 8,
    state: 0
    // character states will be 0 = untouched, 1 = character, 2 = opponent
};

var char1 = {
    name: 'Luke Skywalker',
    hp: 100,
    ap: 5,
    cp: 5,
    state: 0
};

var char2 = {
    name: 'Darth Sidious',
    hp: 150,
    ap: 20,
    cp: 20,
    state: 0
};

var char3 = {
    name: 'Darth Maul',
    hp: 180,
    ap: 25,
    cp: 25,
    state: 0
};

// create an array with those characters

var charArray = [char0,char1,char2,char3]

console.log(charArray);

// initialize variables needed for the game

var gameState = 0; // to watch our state for user control monitoring and game flow
var attackPoints; // the increasing AP for our character
var opponent; // indicator for the current opponent

// fill the selectChar div to start the game

for (var i = 0; i < charArray.length; i++) {
    var insert = charArray[i].name + " // " + charArray[i].hp + " // " + charArray[i].state;
    console.log(insert);
}

// set the game state << not needed b/c already set when we initialized the variable



