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
    name: 'Predator',
    hp: 120,
    liveHP: 120,
    ap: 8,
    liveAP: 8,
    cp: 8,
    state: 0,
    pic: "assets/images/predator.png"
    // character states will be:
    // 0 = new round
    // 1 = character
    // 2 = available opponent
    // 3 = selected opponent
    // 4 = defeated
};

var char1 = {
    name: 'Dutch',
    hp: 100,
    liveHP: 100,
    ap: 5,
    liveAP: 5,
    cp: 5,
    state: 0,
    pic: "assets/images/dutch.jpg"
};

var char2 = {
    name: 'Berserker Predator',
    hp: 150,
    liveHP: 150,
    ap: 20,
    liveAP: 20,
    cp: 20,
    state: 0,
    pic: "assets/images/berserker.jpg"
};

var char3 = {
    name: 'Predalien',
    hp: 180,
    liveHP: 180,
    ap: 25,
    liveAP: 25,
    cp: 25,
    state: 0,
    pic: "assets/images/predalien.jpg"
};

// create an array with those characters

var charArray = [char0,char1,char2,char3]

// initialize variables needed for the game

var gameState = 0; // to watch our state for user control monitoring and game flow
var character; // indicator for our character
var attackPoints; // the increasing AP for our character
var opponent; // indicator for the current opponent
var stillPlaying; // will use every time we check to see if we've defeated all our enemies

// ^^^ MAY NOT NEED THE CHARACTER AND OPPONENT VARIABLES?

// CREATE THE resetGame FUNCTION:

function resetGame() {
    
    // reset core variables
    gameState = 0;
    character;
    attackPoints;
    opponent;
    stillPlaying;

    // reset character states and liveAP

    for (i=0;i<charArray.length;i++) {
        charArray[i].state = 0; // set all characters to state 0
        charArray[i].liveAP = charArray[i].ap; // set all character's liveAP back to their regular ap
        charArray[i].liveHP = charArray[i].hp; // set all character's liveHP back to their regular HP
    }

    // hide dialogue divs
    $("#attack").attr("style", "display: none");
    $("#attackInfo").attr("style", "display: none");
    $("#loseInfo").attr("style", "display: none");
    $("#battleWinInfo").attr("style", "display: none");
    $("#warWinInfo").attr("style", "display: none");

    // put the 'select your character' text
    $(".state0").attr("style", "display: block");

    updateScreen();

};

// CREATE THE updateScreen FUNCTION: 

function updateScreen () {

    $("#selectChar").empty(); // need a line to clear the divs before we rebuild them!
    $("#yourChar").empty(); // need a line to clear the divs before we rebuild them!
    $("#availEnemies").empty(); // need a line to clear the divs before we rebuild them!
    $("#defender").empty(); // need a line to clear the divs before we rebuild them!

    for (var i = 0; i < charArray.length; i++) { // loop through the characters array

        // THE STUFF BELOW SHOULD BE TURNED INTO A NESTED FUNCTION SO I'M NOT REPEATING MYSELF SO MUCH
 
        if (charArray[i].state === 0) { // for any characters w/ 0 state, build them into selectChar div
            var manipulateDiv = $("#selectChar") // jquery - syncing the contents of the selectChar element to the manipulateDiv variable
            // create the new character div
            var insertDiv = $("<div>"); 
            insertDiv.attr("id", "char" + i);
            insertDiv.attr("class", "charButton");
            insertDiv.attr("char", i);
            // create the name <p> in the character div
            var insertP = $("<p>");
            insertP.text(charArray[i].name);
            insertDiv.append(insertP);
            // create the image in the character div
            var insertImg = $("<img>");
            insertImg.attr("src", charArray[i].pic);
            insertDiv.append(insertImg);
            // create the HP <p> in the character div
            var insertP = $("<p>");
            insertP.text(charArray[i].liveHP);
            insertDiv.append(insertP);
            // insert the character div into #selectChar
            manipulateDiv.append(insertDiv);
            //console.log(insertDiv);
        }
        
        if (charArray[i].state === 1) { // for any characters w/ 1 state, build them into yourChar div
            var manipulateDiv = $("#yourChar") // jquery - syncing the contents of the selectChar element to the manipulateDiv variable
            // create the new character div
            var insertDiv = $("<div>"); 
            insertDiv.attr("id", "char" + i);
            insertDiv.attr("class", "charButton");
            insertDiv.attr("char", i);
            // create the name <p> in the character div
            var insertP = $("<p>");
            insertP.text(charArray[i].name);
            insertDiv.append(insertP);
            // create the image in the character div
            var insertImg = $("<img>");
            insertImg.attr("src", charArray[i].pic);
            insertDiv.append(insertImg);
            // create the HP <p> in the character div
            var insertP = $("<p>");
            insertP.text(charArray[i].liveHP);
            insertDiv.append(insertP);
            // insert the character div into #selectChar
            manipulateDiv.append(insertDiv);
            //console.log(insertDiv);
        } 

        if (charArray[i].state === 2) { // for any characters w/ 2 state, build them into availEnemies div
            var manipulateDiv = $("#availEnemies") // jquery - syncing the contents of the selectChar element to the manipulateDiv variable
            // create the new character div
            var insertDiv = $("<div>"); 
            insertDiv.attr("id", "char" + i);
            insertDiv.attr("class", "charButton");
            insertDiv.attr("char", i);
            // create the name <p> in the character div
            var insertP = $("<p>");
            insertP.text(charArray[i].name);
            insertDiv.append(insertP);
            // create the image in the character div
            var insertImg = $("<img>");
            insertImg.attr("src", charArray[i].pic);
            insertDiv.append(insertImg);
            // create the HP <p> in the character div
            var insertP = $("<p>");
            insertP.text(charArray[i].liveHP);
            insertDiv.append(insertP);
            // insert the character div into #selectChar
            manipulateDiv.append(insertDiv);
            //console.log(insertDiv);
        } 
        
        if (charArray[i].state === 3) { // for any characters w/ 3 state, build them into opponent div
            var manipulateDiv = $("#defender") // jquery - syncing the contents of the selectChar element to the manipulateDiv variable
            // create the new character div
            var insertDiv = $("<div>"); 
            insertDiv.attr("id", "char" + i);
            insertDiv.attr("class", "charButton");
            insertDiv.attr("char", i);
            // create the name <p> in the character div
            var insertP = $("<p>");
            insertP.text(charArray[i].name);
            insertDiv.append(insertP);
            // create the image in the character div
            var insertImg = $("<img>");
            insertImg.attr("src", charArray[i].pic);
            insertDiv.append(insertImg);
            // create the HP <p> in the character div
            var insertP = $("<p>");
            insertP.text(charArray[i].liveHP);
            insertDiv.append(insertP);
            // insert the character div into #selectChar
            manipulateDiv.append(insertDiv);
            //console.log(insertDiv);
        } 
        // get rid of the "Select Your Character" text if past state 0
        if (gameState !== 0) {
            $(".state0").attr("style", "display: none");
        }
        // display the attack button if we're in gameState 2:
        if (gameState == "2") {
            $("#attack").attr("style", "display: block");
        } else {
            $("#attack").attr("style", "display: none");
        }
        
    }
} // CLOSE updateScreen()

updateScreen(); // run function once to create the game


// CHARACTER CLICKS + GAMESTATES

$(document).on("click", ".charButton", function() { // watch for the click
// ^^ had to use this different "document" method to get this to work. based on: https://www.tutorialrepublic.com/faq/how-to-bind-click-event-to-dynamically-added-elements-in-jquery.php
// the click events weren't binding to the new buttons that were added to the DOM without this change
// previously had $(".charButton").on("click", function() {....})
// it would work on the first click but not the second due to the binding issue

    console.log("click");
    console.log("gameState: " + gameState);

    var arrayIndex = $(this).attr("char"); // access the array index for the clicked button
    console.log("arrayIndex: " + arrayIndex);
    var charState = charArray[arrayIndex].state; // get the character state for that array index
    console.log("current charState: " + charState);

    if (gameState == "0" && charState == 0) { // fresh start to game && confirming that an 'untouched' character was clicked
    
        charArray[arrayIndex].state = 1; // update state of selected character

        for (i=0; i<charArray.length; i++) { // loop through the character array
            if (charArray[i].state !== 1) { // push all other character states to 2
                charArray[i].state = 2;
            }
        }

        character = arrayIndex // set the 'character' variable for use in the attack

        gameState = "1"; // update the game state

        updateScreen();

        console.log("gameState: " + gameState);

        console.log(charArray);

    } 
    
    if (gameState == "1" && charState == 2) { // confirmed a character has been selected (gameState = 1) && confirming that an "available opponent" character was clicked

        $("#battleWinInfo").attr("style", "display: none"); // hide the "battle won" info in case we're coming back into gameState 2 from a win    
    
        charArray[arrayIndex].state = 3; // update state of selected character

        opponent = arrayIndex // set the 'opponent' variable to use in the attach

        gameState = "2"; // update the game state

        updateScreen();

        console.log("gameState: " + gameState);

        console.log(charArray);

    };

    // gameState 2 should actually only allow the "attack" button!!! MOVE TO DIFFERENT CLICK EVENT
    // actually everything below should be a different click event!
    
    // if (gameState == "3a") { // 3a - you lost the round/game - user action: reset the game
    //     // nothing should happen with character clicks in this state
    // } 
    
    // if (gameState == "3b") { // 3b - you won the round - logic needed: did you win the game, or did you win the round?
    //     // nothing should happen with character clicks in this state
    // } 
    
    // if (gameState == "3b0") { // 3b0 - you won the game - user action: reset the game
    //     // nothing should happen with character clicks in this state
    // } 
    
    // if (gameState == "3b1") { // 3b1 - you won the round - logic: put user back in state 1
    //     // nothing should happen with character clicks in this state
    // } 

});


$(document).on("click", "#attack", function() { // watch for the click on attack button

    console.log("Attack!");

    if (gameState == "2") { // confirm we're in stage 2 - opponent selected aka active round - user action: fight
        // subtract my liveAP from opponent liveHP
        charArray[opponent].liveHP = charArray[opponent].liveHP - charArray[character].liveAP;
        console.log("Opponent HP: " + charArray[opponent].liveHP);
        // subtract opponent ap from my liveHP
        charArray[character].liveHP = charArray[character].liveHP - charArray[opponent].ap;
        console.log("Character HP: " + charArray[character].liveHP);
        // check for win or loss for the round
        if (charArray[character].liveHP < 1) { // you've lost the battle (and the game)
            console.log("YOU LOST");
            $("#loseInfo").attr("style", "display: block"); // hide on-screen attack info
            $("#attackInfo").attr("style", "display: none"); // hide on-screen attack info
            $("#attack").attr("style", "display: none");
            gameState = "3a";
        } else if (charArray[opponent].liveHP < 1) { // you've won the battle
            charArray[opponent].state = 4;// set opponent state to defeated
            console.log("YOU WON THE BATTLE");
            // need to figure out if we've defeated everyone:
            stillPlaying = false; // reset stillPlaying
            console.log("stillPlaying: " + stillPlaying)
            for (i=0;i<charArray.length;i++) { // loop through character array and look for any players that are still a state 2
                if (charArray[i].state == 2) {
                    stillPlaying = true; // set stillPlaying to true b/c there are still characters to fight
                }
            };
            console.log("checked array, stillPlaying: " + stillPlaying)
            // did you win the war?
            if (stillPlaying == false) { // if you won the war
                console.log("war win logic is triggering")
                $("#attackInfo").attr("style", "display: none"); // hide on-screen attack info
                $("#attack").attr("style", "display: none"); // hide on-screen attack info
                $("#warWinInfo").attr("style", "display: block"); // display on-screen war win info
                $("#defender").empty(); // clear the last defender out
            } else { // do this because you've only won the battle:
                $("#attackInfo").attr("style", "display: none"); // hide on-screen attack info
                $("#attack").attr("style", "display: none"); // hide on-screen attack info
                $("#defender").empty(); // remove the opponent from the defender div
                $(".opponentName").text(charArray[opponent].name);
                $("#battleWinInfo").attr("style", "display: block"); // display on-screen battle win info
                gameState = "1";
                // increment my character's liveAP after every attack:
                charArray[character].liveAP = charArray[character].liveAP + charArray[character].ap;
                console.log("Your liveAP: " + charArray[character].liveAP)      
                updateScreen();
            }
        } else { // do nothing but update the screen because no win/loss happened
            console.log("WE'RE JUST UPDATING THE SCREEN");
            $(".opponentName").text(charArray[opponent].name);
            $(".yourAttack").text(charArray[character].liveAP);
            $(".theirAttack").text(charArray[opponent].ap);
            $("#attackInfo").attr("style", "display: block");
            updateScreen();
            // increment my character's liveAP after every attack:
            charArray[character].liveAP = charArray[character].liveAP + charArray[character].ap;
            console.log("Your liveAP: " + charArray[character].liveAP)            
        }
    } 

});


$(document).on("click", "#restart", function() { // watch for the click on reset button
    resetGame();
});