let xTurn = true;

function changeMark(buttonID) {
    let currentMark = document.getElementById(buttonID).innerHTML;

    if (!currentMark) {
        if (xTurn) { 
            document.getElementById(buttonID).innerHTML = 'X'; 
            document.getElementById('currentPlayer').innerHTML = "O's turn"
            if (xTurn) { 
                document.getElementById(buttonID).setAttribute("style","color:green");
                document.getElementById('currentPlayer').setAttribute("style","color:white");
            }
     }
        else {
            document.getElementById(buttonID).innerHTML = 'O';
            document.getElementById('currentPlayer').innerHTML = "X's turn"
            if (!xTurn) {
            document.getElementById(buttonID).setAttribute("style", "color: white;");
            document.getElementById('currentPlayer').setAttribute("style","color:green");
            }
    }
    xTurn = !xTurn;
    checkWin();
            }
    }

function checkWin() {
    let message = "";
    // Calculates the outcome of the game by using the relational and logical expressions, along with the conditional statements, to identify the winner. The determination of the winner involves examing the values of three buttons across all nine potential winning combinations. If the values of the three buttons are "X", then X is declared the winner. Conversely, if the values are "O", then O is the winner.
    let a1 = document.getElementById("a1").innerHTML;
    let b1 = document.getElementById("b1").innerHTML;
    let c1 = document.getElementById("c1").innerHTML;

    let a2 = document.getElementById("a2").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;

    let a3 = document.getElementById("a3").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;

    // Top Row a1:c1 //
    if (a1 == b1 && b1 == c1 && a1 == "X") {
    message = "X wins the game!";
    }
        if (a1 == b1 && b1 == c1 && a1 == "O") {
        message = "O wins the game!";
        }

    else if (b1 == b2 && b2 == b3 && b1 == "X") {
        message = "X wins the game!";
    }
        if (b1 == b2 && b2 == b3 && b1 == "O") {
            message = "O wins the game!";
        }

    else if (c1 == c2 && c2 == c3 && c1 == "X") {
        message = "X wins the game!";
    }
     if (c1 == c2 && c2 == c3 && c1 == "O") {
        message = "O wins the game!";
    }

    // Second Row a2:c2 //
    else if (a2 == b2 && b2 == c2 && a2 ==  "X") {
        message = "X wins the game!";
    }
        if (a2 == b2 && b2 == c2 && a2 ==  "O") {
        message = "O wins the game!";
        }

    else if (a3 == b2 && b2 == c1 && a3 == "X") {
        message = "X wins the game!";
    }
        if (a3 == b2 && b2 == c1 && a3 == "O") {
        message = "O wins the game!";
        }

    else if (c3 == b2 && b2 == a1 && c3 == "X") {
        message = "X wins the game!";
        }
        if (c3 == b2 && b2 == a1 && c3 == "O") {
        message = "O wins the game!";
        }

    // Third Row a3:c3 //
    else if (a3 == b3 && b3 == c3 && a3 == "X") {
        message = "X wins the game!";
    }
        if (a3 == b3 && b3 == c3 && a3 == "O") {
        message = "O wins the game!";
        }
    
    else if (a3 == a2 && a2 == a1 && a3 == "X") {
        message = "X wins the game";
    }
        if (a3 == a2 && a2 == a1 && a3 == "O") {
        message = "O wins the game";
    }

    document.getElementById('message').innerHTML = message;
    // TODO: Complete the logic for the remaining win possibilities
    console.log(message);
    }

function resetGame() {
    message = "Resetting Game...";
    document.getElementById("a1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";

    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";

    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    document.getElementById('message').innerHTML = message;
    }