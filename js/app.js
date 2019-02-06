console.log("hello"); 

// ~~~~~~~~~~~~Variables~~~~~~~~~~~~ 
var scoropionFighterObj 
var scorpionChosen = false; 
var scorpionFight = null;

var subZeroFigherObj = null; 
var subZeroChosen = false;
var subzeroFight = null;

var liukangFighterObj = null; 
var liukangChosen = false;
var liukangFight = null;



var playerOnePick = false;
var playerTwoPick = false;
var yourFighter = null;
var myFighterSelect = null; 
var characterSelected = []; 



// liuKang object 

var liukangFighterObj = {
    Name: "Liu Kang", 
    Health: 100, 
    Damage: 30,
    Block: 25,
}


// subZero Object

var subZeroFighterObj = {
    Name: "Sub Zero", 
    Health: 100,
    Damage: 15, 
    Block: 35, 
}

// scorpion 

var scoropionFighterObj = {
    name: "Scorpion",
    Health: 100, 
    Damage: 40, 
    Block: 20, 
}









// liuKang fighter selecter
document.getElementById("liuKangFighterBox").addEventListener("click", function(){
    if(playerOnePick === false && liukangChosen === false){
        playerOnePick =true;
            document.getElementById("myFighterSelect").appendChild(document.getElementById("liuKangFighterBox"))
            liukangChosen = true; 
    }   else if ( playerOnePick === true && playerTwoPick === false && liukangChosen === false){
            document.getElementById("yourFighterSelect").appendChild(document.getElementById("liuKangFighterBox"))
            playerTwoPick = true; 
            //  if (playerOnePick === true && playerTwoPick === true && liukangChosen === false){
            //     document.getElementById("liukangFighter").remove()  
    }
        
})
// subZero fighter selecter
    document.getElementById("subZeroFighterBox").addEventListener("click", function(){
        if(playerOnePick === false && subZeroChosen === false){
            playerOnePick = true;
                document.getElementById("myFighterSelect").appendChild(document.getElementById("subZeroFighterBox"))
                subZeroChosen = true; 
        }   else if (playerOnePick === true && playerTwoPick === false && subZeroChosen === false){
                document.getElementById("yourFighterSelect").appendChild(document.getElementById("subZeroFighterBox"))                
                playerTwoPick = true; 
        }        
})
// scoropion Fighter selecter. 
        document.getElementById("scorpionFighterBox").addEventListener("click", function(){
            if(playerOnePick === false && subZeroChosen === false){
                playerOnePick =true;
                    document.getElementById("myFighterSelect").appendChild(document.getElementById("scorpionFighterBox"))
                    subZeroChosen = true; 
            }   else if ( playerOnePick === true && playerTwoPick === false && subZeroChosen === false){
                    document.getElementById("yourFighterSelect").appendChild(document.getElementById("scorpionFighterBox"))                
                    playerTwoPick = true; 
                    //  if (playerOnePick === true && playerTwoPick === true && subZeroChosen === false){
                    //     document.getElementById("subZeroFighter").remove() }
            }
})



//once the characters are chosen. Change the background image to the fight scene 
var fightScene = function(){
console.log("Prepare to Fight", fightScene);
    document.body.classList.replace("menu","fight");

};

var initGame = function (){
    console.log("game is started")
    var characters = document.getElementsByClassName("character")
    for (var character of characters){
        character.removeEventListener("click", selectCharacter) 
    } 

    fightScene(); 
};




document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Loaded");
        var characters = document.getElementsByClassName("character")
        for (var character of characters){
            character.addEventListener("click", selectCharacter)
        }

 
});



function selectCharacter(e) {
     
        characterSelected.push(e.target);
        console.log(characterSelected);
        if (characterSelected.length === 2) {
            initGame();
        }
    
}
