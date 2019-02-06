console.log("hello"); 

// ~~~~~~~~~~~~Variables~~~~~~~~~~~~ 

var scorpionChosen = null 
var scorpionFight = null

var subzeroChosen = null
var subzeroFight = null

var liukangChosen = null
var liukangFight = null 

var myFighter = null 
var yourFighter = null 
var characterSelected  = []; 





function fighterSelected(){
    


}
        


//once the characters are chosen. Change the background image to the fight scene 
var fightScene = function(){
console.log("Prepare to Fight", fightScene);
    document.body.classList.replace("menu","fight");

fighterSelected();

}



var initGame = function (){
    console.log("game is started")
    var characters = document.getElementsByClassName("character")
    for (var character of characters){
        character.removeEventListener("click", selectCharacter) 
    } 

    fightScene(); 
}




document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Loaded");
        var characters = document.getElementsByClassName("character")
        for (var character of characters){
            character.addEventListener("click", selectCharacter)
        }

 
})



function selectCharacter(e) {
     
        characterSelected.push(e.target);
        console.log(characterSelected);
        if (characterSelected.length === 2) {
            initGame();
        }
    
}
