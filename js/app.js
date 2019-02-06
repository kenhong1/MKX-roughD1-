console.log("hello"); 

// ~~~~~~~~~~~~Variables~~~~~~~~~~~~ 

var scorpionChosen = false; 
var scorpionFight = null;

var subZeroChosen = false;
var subzeroFight = null;

var liukangChosen = false;
var liukangFight = null;

var playerOnePick = false;
var playerTwoPick = false;
var yourFighter = null;
var characterSelected = []; 


// document.getElementById("liukangFighter").addEventListener("click", function(){
//     if (playerOnePick === false && liukangChosen === false) {
//         playerOnePick = true; 
//         document.getElementById("myFighterSelect").appendChild(document.getElementById("liukangFighter"))
//         liukangChosen = true;  
//     } 

document.getElementById("liukangFighter").addEventListener("click", function(){
    if(playerOnePick === false && liukangChosen === false){
        playerOnePick =true;
            document.getElementById("myFighterSelect").appendChild(document.getElementById("liukangFighter"))
            liukangChosen = true; 
    }   else if ( playerOnePick === true && playerTwoPick === false && liukangChosen === false){
            document.getElementById("yourFighterSelect").appendChild(document.getElementById("liukangFighter"))
            playerTwoPick = true; 
            //  if (playerOnePick === true && playerTwoPick === true && liukangChosen === false){
            //     document.getElementById("liukangFighter").remove() }
                
    }
        
    })

    document.getElementById("subZeroFighter").addEventListener("click", function(){
        if(playerOnePick === false && subZeroChosen === false){
            playerOnePick =true;
                document.getElementById("myFighterSelect").appendChild(document.getElementById("subZeroFighter"))
                subZeroChosen = true; 
        }   else if ( playerOnePick === true && playerTwoPick === false && subZeroChosen === false){
                document.getElementById("yourFighterSelect").appendChild(document.getElementById("subZeroFighter"))                
                playerTwoPick = true; 
                
            }
            
        })

        // function removeSubZero(){
        //     if (playerOnePick === true && playerTwoPick === true && subZeroChosen === false){
        //         document.getElementById("subZeroFighter").remove() }
        //     }

        document.getElementById("scorpionFighter").addEventListener("click", function(){
            if(playerOnePick === false && subZeroChosen === false){
                playerOnePick =true;
                    document.getElementById("myFighterSelect").appendChild(document.getElementById("scorpionFighter"))
                    subZeroChosen = true; 
            }   else if ( playerOnePick === true && playerTwoPick === false && subZeroChosen === false){
                    document.getElementById("yourFighterSelect").appendChild(document.getElementById("scorpionFighter"))                
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
