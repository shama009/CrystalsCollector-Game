// variables
var randomNumber=0;
var crystal1=0;
var crystal2=0;
var crystal3=0;
var crystal4=0;
var wins=0;
var loses=0;
var totalScore=0;
var scoreCounter=0;
// function to generate a random number for a range.
function generateRandomNum(min,max){
    
    var random= Math.floor(Math.random() * ((max-min)+1) + min);
    return random;
}

$(document).ready(function(){
    // generate a random number between 19 - 120.
randomNumber=generateRandomNum(19,120);
    // display random number generated
$("#random-number").text(randomNumber);
    // crytals should have random value generated between  1 - 12.
crystal1=generateRandomNum(1,12);

crystal2=generateRandomNum(1,12);
crystal3=generateRandomNum(1,12);
crystal4=generateRandomNum(1,12);
});




function reset(){
    // generate a random number between 19 - 120.
randomNumber=generateRandomNum(19,120);
// crytals should have random value generated between  1 - 12.
crystal1=generateRandomNum(1,12);
crystal2=generateRandomNum(1,12);
crystal3=generateRandomNum(1,12);
crystal4=generateRandomNum(1,12);
// total score and score counter are set to zero.
var totalScore=0;
var scoreCounter=0;
}
// Assign random value generated to each crystal image
// As user clicks on crystals total score gets updated.
// the total score adds up with crystal values until it equals or exceeds random number 
// if total score equals random number then user wins i.e number of wins is incremented by 1 and prints "You won!"
// if total score exceeds random number then user loses i.e number of loses is incremented by 1 and prints "You lose!"
// if user wins or loses game restarts i.e total score and score counter are reset to zero, new random number is generated and all the crystals will have four new hidden values.
// The app should show the number of games the player wins and loses.
//
