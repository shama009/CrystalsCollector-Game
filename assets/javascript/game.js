// variables
var randomNumber=0;
var crystalRandomNumber=0;
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
    // Assign each crystal with appropriate random number.
// crystal1=generateRandomNum(1,12);
// $("#img1").attr("data-crystalvalue",crystal1);
// crystal2=generateRandomNum(1,12);
// $("#img2").attr("data-crystalvalue",crystal2);
// crystal3=generateRandomNum(1,12);
// $("#img3").attr("data-crystalvalue",crystal3);
// crystal4=generateRandomNum(1,12);
// $("#img4").attr("data-crystalvalue",crystal4);

//Creating multiple crystals each with their own unique number value.
  var numberOfCrystals = ["assets/images/ruby.jpg", "assets/images/ruby.jpg", "assets/images/ruby.jpg", "assets/images/ruby.jpg"];


  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOfCrystals.length; i++) {
   
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", numberOfCrystals[i]);
    console.log(imageCrystal);
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // Generate random value for each crystal
    crystalRandomNumber=generateRandomNum(1,12);
    imageCrystal.attr("data-crystalvalue", crystalRandomNumber);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {
    
        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
        
        var crystalValue = ($(this).attr("data-crystalvalue"));
        alert(crystalValue);
  });

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
