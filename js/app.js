console.log("hello"); 

// ~~~~~~~~~~~~Variables~~~~~~~~~~~~ 

var scorpionChosen = false; 
var scorpionFight = null;
var subZeroChosen = false;
var subzeroFight = null;
var liukangChosen = false;
var liukangFight = null;

var playerOneButton = null; 
var playerOnePick = false;
var playerOneBlock = null;
var playerOneAttack = null;

var playerTwoAttack = null; 
var playerTwoBlock = null 
var playerTwoPick = false;


var yourFighterSelect = document.getElementById("yourFighterSelect")
var myFighterSelect = document.getElementById("myFighterSelect")

var characterSelected = []; 



//end game conditions 
function endGame(){
    if (characterSelected[0].hp <= 0 && characterSelected[1].hp > 0){
        myFighterSelect.style.borderColor = "red" 
        yourFighterSelect.style.borderColor = "green"

        //removing box from the battle arena 
        document.getElementById("myFighterSelect").remove()
        
        console.log("player 1 loses")
    } else if (characterSelected[0].hp > 0 && characterSelected[1].hp <= 0) {
        yourFighterSelect.style.borderColor = "red" 
        myFighterSelect.style.borderColor = "green"

         //removing box from the battle arena 
        document.getElementById("yourFighterSelect").remove()
        console.log("player 2 loses")
    } else if (characterSelected[0].hp === 0 && characterSelected[1].hp === 0 ){
        yourFighterSelect.style.borderColor = "yellow"
        myFighterSelect.style.borderColor = "yellow"
        console.log("draw")
    }
    
} 


 



// liuKang object 
var liukangFighterObj = {
    player: 0, 
    name: "Liu Kang", 
    hp: 100, 
    damage: 100,
    block: 10,
    alive: true,

    attacks: function(){
        if (liukangFighterObj.player === 1) {
            playerOneAttack = true; 
                console.log(playerOneAttack, "p1 chose attack"); 

        }
        else if (liukangFighterObj.player === 2 ){
            playerTwoAttack = true; 
            console.log(playerTwoAttack, "p2 chose attck")
        }
        },              
    defend: function(){
        if (liukangFighterObj.player === 1){
            playerOneBlock = true; 
            console.log(playerOneBlock, "p1 chose block")
        }
        else if(liukangFighterObj.player === 2){
            playerTwoBlock = true; 
            console.log(playerTwoBlock,"p2 chose block")
        }
    },

}; 



// subZero Object
var  subZeroFighterObj = {
    player: 0, 
    name: "Sub Zero", 
    hp: 100,
    damage: 100, 
    block: 10, 
    status: true,

    attacks: function(){
        if (subZeroFighterObj.player === 1) {
            playerOneAttack = true; 
                console.log(playerOneAttack, "p1 chose attack"); 

        }
        else if (subZeroFighterObj.player === 2 ){
            playerTwoAttack = true; 
            console.log(playerTwoAttack, "p2 chose attck")
        }
        },              
    defend: function(){
        if (subZeroFighterObj.player === 1){
            playerOneBlock = true; 
            console.log(playerOneBlock, "p1 chose block")
        }
        else if(subZeroFighterObj.player === 2){
            playerTwoBlock = true; 
            console.log(playerTwoBlock,"p2 chose block")
        }
    },
    
    
   
};

// scorpion object
var  scorpionFighterObj = {
    player: 0, 
    name: "Scorpion",
    hp: 100, 
    damage: 100, 
    block: 10, 
    status: true,

    attacks: function(){
        if (scorpionFighterObj.player === 1) {
            playerOneAttack = true; 
                console.log(playerOneAttack, "p1 chose attack"); 

        }
        else if (scorpionFighterObj.player === 2 ){
            playerTwoAttack = true; 
            console.log(playerTwoAttack, "p2 chose attck")
        }
        },              
    defend: function(){
        if (scorpionFighterObj.player === 1){
            playerOneBlock = true; 
            console.log(playerOneBlock, "p1 chose block")
        }
        else if(scorpionFighterObj.player === 2){
            playerTwoBlock = true; 
            console.log(playerTwoBlock,"p2 chose block")
        }
    },

}; 
//hp checker. 
function checkHp(){
    if (characterSelected[1].hp <= 0 ) {
            characterSelected[1].hp = 0;
}   if (characterSelected[0].hp <= 0 ) {
            characterSelected[0].hp = 0;
    
} 
}

//battle function that allows player to select fight or block. 
function battle(){
    
    if(playerOneAttack && playerTwoAttack){
        console.log("both player attacked")
            playerOneAttack = null; 
            playerTwoAttack = null;

            characterSelected[1].hp -= characterSelected[0].damage
            characterSelected[0].hp -= characterSelected[1].damage
            console.log( characterSelected);
            
            checkHp();
    
            
    } 
    if(playerOneAttack && playerTwoBlock){
        console.log("player 1 attacked player 2 blocked")
            playerOneAttack = null; 
            playerTwoBlock = null; 
            characterSelected[1].hp -=(characterSelected[0].damage - characterSelected[1].block)
            console.log(characterSelected)

              
            checkHp();
    }  
    if(playerOneBlock && playerTwoAttack){
        console.log("player 1 blocked and p2 attacked")
            playerOneBlock = null; 
            playerTwoAttack = null;
            characterSelected[0].hp -=(characterSelected[1].damage - characterSelected[0].block)
            console.log(characterSelected)

              
            checkHp();
    }
    if(playerOneBlock&& playerTwoBlock){
        console.log("both players block")
            playerOneBlock= null; 
            playerTwoBlock = null;


}}



//hp function that dynamically changes the hp. 
function hpChanger(){
    if(characterSelected[0].name==="Liu Kang"){
        document.getElementById("liuKangHealth").innerHTML = characterSelected[0].hp
    } else if (characterSelected[1].name==="Liu Kang"){
        document.getElementById("liuKangHealth").innerHTML = characterSelected[1].hp   
    }
    if(characterSelected[0].name==="Scorpion"){
        document.getElementById("scorpionHealth").innerHTML = characterSelected[0].hp
    } else if (characterSelected[1].name === "Scorpion"){
        document.getElementById("scorpionHealth").innerHTML = characterSelected[1].hp
    }
    if(characterSelected[0].name==="Sub Zero"){
        document.getElementById("subZeroHealth").innerHTML = characterSelected[0].hp
    } else if (characterSelected[1].name==="Sub Zero"){
        document.getElementById("subZeroHealth").innerHTML = characterSelected[1].hp
    }

}

//Fight Button that enables both characters to attack after choice has been selected. 
document.getElementById("battleBtn").addEventListener("click", function(){ 
    battle(); 
    hpChanger(); 
    endGame();
})

//player one attack
document.getElementById('playerOneAttack').addEventListener('click', function() {
    characterSelected[0].attacks()
   
    
})
//player one block 
document.getElementById('playerOneBlock').addEventListener('click', function() {
    characterSelected[0].defend()
  
    
})
// player two attack
document.getElementById('playerTwoAttack').addEventListener('click', function() {
    characterSelected[1].attacks()
  
    
})
//player two block 
document.getElementById("playerTwoBlock").addEventListener('click', function() {
    characterSelected[1].defend()
  
    
})



var fighters = {
    liuKang: liukangFighterObj,
    subZero: subZeroFighterObj,
    scorpion: scorpionFighterObj,
}




// liuKang fighter selecter
document.getElementById("liuKangFighterBox").addEventListener("click", function(){
    if(playerOnePick === false && liukangChosen === false){
        playerOnePick = true;
        liukangFighterObj.player = 1;
            document.getElementById("myFighterSelect").appendChild(document.getElementById("liuKangFighterBox"))
            liukangChosen = true; 
    }   else if ( playerOnePick === true && playerTwoPick === false && liukangChosen === false){
            document.getElementById("yourFighterSelect").appendChild(document.getElementById("liuKangFighterBox"))
            playerTwoPick = true; 
            liukangFighterObj.player = 2;  
            //  if (playerOnePick === true && playerTwoPick === true && liukangChosen === false){
            //     document.getElementById("liukangFighter").remove()  
    }
   
})



// subZero fighter selecter
    document.getElementById("subZeroFighterBox").addEventListener("click", function(){
        if(playerOnePick === false && subZeroChosen === false){
            playerOnePick = true;
            subZeroFighterObj.player = 1; 
                document.getElementById("myFighterSelect").appendChild(document.getElementById("subZeroFighterBox"))
                subZeroChosen = true; 
                console.log("sub zero has been chosen")
        }   else if (playerOnePick === true && playerTwoPick === false && subZeroChosen === false){
                document.getElementById("yourFighterSelect").appendChild(document.getElementById("subZeroFighterBox"))                
                playerTwoPick = true; 
                subZeroFighterObj.player = 2;
                console.log("sub zero has been chosen")
        }        
})


// scoropion Fighter selecter. 
        document.getElementById("scorpionFighterBox").addEventListener("click", function(){
            if (playerOnePick === false && scorpionChosen === false){
                playerOnePick = true;
                scorpionFighterObj.player = 1; 
                console.log(scorpionFighterObj.player)
                    document.getElementById("myFighterSelect").appendChild(document.getElementById("scorpionFighterBox"))
                    scorpionChosen = true; 
            } else if ( playerOnePick === true && playerTwoPick === false && scorpionChosen === false){
                    document.getElementById("yourFighterSelect").appendChild(document.getElementById("scorpionFighterBox"))                
                    playerTwoPick = true; 
                    scorpionFighterObj.player = 2; 
                console.log(scorpionFighterObj.player)   
                console.log(characterSelected)
                console.log("scorpion has been chosen")
                    //  if (playerOnePick === true && playerTwoPick === true && subZeroChosen === false){
                    //     document.getElementById("subZeroFighter").remove() }
            }
})



//once the characters are chosen. Change the background image to the fight scene 
var fightScene = function(){
console.log("Prepare to Fight", fightScene);
    document.body.classList.replace("menu","fight");
};

//removes the click function so person cannot click again, and then inits the fight scene
var initGame = function (){
    console.log("game is started")
    var characters = document.getElementsByClassName("character")
    for (var character of characters){
        character.removeEventListener("click", selectCharacter) 
    } 

    fightScene(); 
};



//starts the click function where it sees which characters are being selected
document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Loaded");
        var characters = document.getElementsByClassName("character")
        for (var character of characters){
            character.addEventListener("click", selectCharacter)
        }

});


//pushes the click function into the empty array
function selectCharacter(e) {
        console.log(e.target.id)
        characterSelected.push(fighters[e.target.id]);
        console.log(characterSelected);
        if (characterSelected.length === 2) {
            initGame();
        }
}; 
