(function(){
    "use strict";
    //craps
//     Below is a list of the various bets you can make at craps. Pass Line Bet -
//     You win if the first roll is a natural (7, 11) and lose if it is craps (2, 3, 12).
//     If a point is rolled (4, 5, 6, 8, 9, 10) it must be repeated before a 7 is thrown
//     in order to win. If 7 is rolled before the point you lose.

//     var play = true;
    var rollAgain = false;
    var bank = 5;
    var i = 0;
    var play = document.getElementById('playCraps');
    displayBank();

// if (typeof play === "number" ){

    var roll = function (x, y) {
        if (bank === 0){
            alert("you are out of money");
            bust();
        } else {
            var bet = parseFloat(prompt("you have $" + bank + ", how much do you want to bet?"));
            x = Math.floor(Math.random() * (6) + 1);
            y = Math.floor(Math.random() * (6) + 1);
            var total = x + y;
            console.log("you rolled a " + x + " and " + y + " for a total of " + total);
            alert("you rolled a " + x + " and " + y + " for a total of " + total);

            if (total === 7 || total === 11) {
                alert("a first roll of " + total + " means you win!");
                bank += bet;
                // displayBank();

                alert("you have $" + bank);
            } else if (total === 2 || total === 3 || total === 12) {
                console.log("a first roll of " + total + " means you lose!");
                alert("a first roll of " + total + " means you lose!");
                bank -= bet;
                displayBank();
                alert("you have $" + bank);
            } else {
                console.log("a first roll of " + total + " means roll again");
                alert("a first roll of " + total + " means roll again");
                secondRoll();
            }

            function secondRoll() {
                var rollAgain = true;
                while (rollAgain === true) {
                    var xx = Math.floor(Math.random() * (6) + 1);
                    var yy = Math.floor(Math.random() * (6) + 1);
                    var totalTwo = xx + xx;
                    if (total === totalTwo) {
                        alert("the first roll of " + total + " and this roll of " + totalTwo + " match. This means you win!");
                        bank += bet;
                        rollAgain = false;
                        // document.getElementById("gameText").innerHTML = "Bank $" + bank ;
                        alert("you have $" + bank);
                    } else if (totalTwo === 7 || totalTwo === 2 || totalTwo === 11) {
                        console.log("you rolled " + totalTwo + ". This means you lose!");
                        alert("you rolled " + totalTwo + ". This means you lose!");
                        bank -= bet;
                        rollAgain = false;
                        alert("you have $" + bank);
                    } else {
                        console.log("you rolled " + totalTwo + ". This means roll again");
                        alert("you rolled " + totalTwo + ". This means roll again");
                        rollAgain = true;
                    }

                }

            }
            displayBank();
        }
    }
// } else {
//     alert("Thanks for stopping by");
// }

    function displayBank(){
        if (bank === 0){
            bust();
            document.getElementById("bankAmount").innerHTML = "Bank $" + bank ;

        } else {
            document.getElementById("bankAmount").innerHTML = "Bank $" + bank ;
            console.log(bank);
        }
    }

    document.getElementById("playCraps").addEventListener("click", roll);

    $('#playCraps').click(function() {
        // $(this).css( 'background-color','yellow'); //need to figure out
        $(this).html( '<p>Roll Again?</p>');

    });

    function bust(){
        $('#bankAmount').css('background-color','red');
    }



})();