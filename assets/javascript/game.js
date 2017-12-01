
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
    function reset() {
        // remove the crystal elements i.e images (this is to avoid adding up more images on reset)
        $("#crystals").empty(); //bug-fix - on reset a new set of crystal images are appended
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

    }
    // Call reset function to start game
    reset();


});

