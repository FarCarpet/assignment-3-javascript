
var gamePieces = ["Rock", "Paper", "Scissors", "Dynamite"];


function ask(userThrow){
     userThrow = prompt("Do you choose Rock, Paper, Scissors, or Dynamite ?");
    if (userThrow != null) {
            if (userThrow == "Rock") {
                 userThrow = "Rock";
            }else if (userThrow == "Paper") {
                 userThrow = "Paper";
            }else if (userThrow == "Scissors") {
                 userThrow = "Scissors";
            }else if (userThrow == "Dynamite") {
                 userThrow = "Dynamite";
            }else{
                alert("I'm sorry it appears you entered an invalid throw.");
            }
        }else{
            alert("I'm sorry it appears you entered an invalid throw.");
            }
    return userThrow;
    }

userThrow = ask(userThrow);


var game = gamePieces.length;

var Rock = 0;
var Paper = 1;
var Scissors = 2;
var Dynamite = 3;

var result = "";

function getRandomGamePiece(max){
        return Math.floor(Math.random() * Math.floor(max));
}

computerChoice = getRandomGamePiece(game);

if (computerChoice == 0) {
        // console.log("Rock");
        computerChoice = "Rock";

    }else if (computerChoice == 1) {
        // console.log("Paper");
        computerChoice = "Paper";
    }else if (computerChoice == 2) {
        // console.log("Scissors");
        computerChoice = "Scissors";
    }else {
        // console.log("Dynamite");
        computerChoice = "Dynamite";
    }

    // console.log(userThrow);

    var result = whoWins(computerChoice, userThrow);

    // console.log(result); -- for testing

function whoWins(computerChoice, userThrow){

    if (computerChoice === userThrow){
    return "The result is a tie " + "<br>" + "Computer: " + computerChoice + "<br>" + "Player: " + userThrow;

    }//Computer picks Rock
    if (computerChoice === "Rock") {
        if(userThrow === "Paper"){
            return "User wins! " + "<br>" + "Computer: " + computerChoice + "<br>" + "Player: " + userThrow;

        }else if (userThrow === "Scissors") {
            return "Computer wins! " + "<br>" + "Computer: " + computerChoice + "<br>" + "Player: " + userThrow;

        }else { // else the throw was dynamite
            return "User wins! " + "<br>" + "Computer: " + computerChoice + "<br>" + "Player: " + userThrow;

        }
    }
    //Computer picks Paper
    if (computerChoice === "Paper") {
        if(userThrow === "Rock"){
            return "Computer wins! " + "<br>" + "Computer: " + computerChoice + "<br>" + "Player: " + userThrow;

        }else if (userThrow === "Scissors") {
            return  "User wins! " + "<br>" + "Computer: " + computerChoice + "<br>" + "Player: " + userThrow;

        }else { // else the throw was dynamite
            return  "User wins! " + "<br>" + "Computer: " + computerChoice + "<br>" + "Player: " + userThrow;

        }
    }//Computer picks Scissors
    if (computerChoice === "Scissors") {
        if(userThrow === "Rock"){
            return "User wins! " + "<br>" + "Computer: " + computerChoice + "<br>" + "Player: " + userThrow;

        }else if (userThrow === "Paper") {
            return "Computer wins! " + "<br>" + "Computer: " + computerChoice + "<br>" + "Player: " + userThrow;

        }else { // else the throw was dynamite
            return "Computer wins! " + "<br>" + "Computer: " + computerChoice + "<br>" + "Player: " + userThrow;

        }
    }//Computer picks Dynamite
    if (computerChoice === "Dynamite") {
        if(userThrow === "Rock"){
            return "Computer wins! " + "<br>" + "Computer: " + computerChoice + "<br>" + "Player: " + userThrow;

        }else if (userThrow === "Paper") {
            return "Computer wins! " + "<br>" + "Computer: " + computerChoice + "<br>" + "Player: " + userThrow;

        }else { // else the throw was Scissors
            return "User wins! " + "<br>" + "Computer: " + computerChoice + "<br>" + "Player: " + userThrow;

        }
    }

};

$("#results").html(result);
