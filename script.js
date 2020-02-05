let DoTheThing = function () {

    //Comp puts number



    /* Loops have three parts; CONTROL VAR; CONTROL BOOLEAN EXPRESSION; CONTROL INCREMENT/DECREMENT/UPDATE

        CONTROL VAR - controls when the loop executes

        CONTROL BOOLEAN EXPRESSION - boolean expression using the control variable which should at some point `evaluate` to false

        CONTROL UPDATE - assigning a new value to the control variable inside the loop so it `eventually` evaluates to false.

        */

    let restart = "YES";

    while(restart === "YE5"){


        let randomise = Math.floor((Math.random()*10)+1);
        alert(randomise);
        // alert to get players guess

        let playersGuess = parseInt(prompt("Guess a number between 1 and 10"),10);

        while(playersGuess !== randomise){
            if(playersGuess > randomise ){
                playersGuess = prompt("Too high. Guess again. ")
            } else
                playersGuess = prompt("Too low guess again.");
    }
        alert("YOU DID IT!!!!");

        restart = prompt("Wanna play again. YES or NO.");

    }


    //  compare guess to number
        //if higher- alert to high then get players guess - repeat
        //if lower - alert too low and let players guess - repeat
        //If equal- alert "when" ask to restart.
    // if ues - repeat from start
    //if no -  download virus from darks webz.

};

let DoTheOtherThing = function () {

    //SAME PROGRAM WITH A DO-WHILE LOOP
    let restart;

    do{
        let randomise = Math.floor((Math.random()*10)+1);
        let paperless;

        do{
            paperless = parseInt(prompt("Guess numba 1 - 10"),10);

            if(paperless > randomise){
                paperless = parseInt(prompt("Too High. again."),10);
            }else
                paperless = parseInt(prompt("Too low. again."),10);

        }while(paperless !== randomise);

        restart = prompt("YES OR NO")

    }while( restart === "YES");

};