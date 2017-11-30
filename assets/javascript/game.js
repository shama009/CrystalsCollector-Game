
$(document).ready(function () {
    // variables
    var randomNumber;
    var crystalRandomNumber;
    var wins = 0;
    var loses = 0;
    var scoreCounter = 0;
    // function to generate a random number for a range.
    function generateRandomNum(min, max) {

        var random = Math.floor(Math.random() * ((max - min) + 1) + min);
        return random;
    }
    function reset(){
    // score counter is set to zero.
      scoreCounter = 0;
     $("#score-counter").text(scoreCounter);

    // generate a random number between 19 - 120.
    randomNumber = generateRandomNum(19, 120);
    // display random number generated
    $("#random-number").text(randomNumber);

    // crytals should have random value generated between  1 - 12.
    // Assign each crystal with appropriate random number.

    //Creating multiple crystals each with their own unique number value.
    var numberOfCrystals = ["assets/images/blue.jpg", "assets/images/purple.jpg", "assets/images/yellow.jpg", "assets/images/red.jpg"];


    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < numberOfCrystals.length; i++) {

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", numberOfCrystals[i]);

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // Generate random value for each crystal
        crystalRandomNumber = generateRandomNum(1, 12);
        imageCrystal.attr("data-crystalvalue", crystalRandomNumber);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal);
    }
        //  // reset the result message
        //  $("#result-message").text("");

}
    // Call reset function to start game
     reset();
    // This time, our click event applies to every single crystal on the page. Not just one.
    $(".crystal-image").on("click", function () {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        scoreCounter += crystalValue;
        // display total score to user as the user clicks on a crystal
        $("#score-counter").text(scoreCounter);
        // if total score equals random number then user wins i.e number of wins is incremented by 1 and prints "You won!"
        // if total score exceeds random number then user loses i.e number of loses is incremented by 1 and prints "You lose!"
        if (scoreCounter === randomNumber) {
            $("#result-message").text("You win!!");
            wins++;
            // reset the random numbers to play again
            reset();

        }

        else if (scoreCounter > randomNumber) {
            $("#result-message").text("You lose!!");
            loses++;
            // reset the random numbers to play again
            reset();
        }
        $("#wins").text(wins);
        $("#loses").text(loses);

    });

});




function reset() {
    // generate a random number between 19 - 120.
    randomNumber = generateRandomNum(19, 120);
    // crytals should have random value generated between  1 - 12.
    crystal1 = generateRandomNum(1, 12);
    crystal2 = generateRandomNum(1, 12);
    crystal3 = generateRandomNum(1, 12);
    crystal4 = generateRandomNum(1, 12);


}
// Assign random value generated to each crystal image
// As user clicks on crystals total score gets updated.
// the total score adds up with crystal values until it equals or exceeds random number 

// if user wins or loses game restarts i.e total score and score counter are reset to zero, new random number is generated and all the crystals will have four new hidden values.
// The app should show the number of games the player wins and loses.
//
