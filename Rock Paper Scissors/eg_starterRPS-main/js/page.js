function game(x) {
// set player choice to game() argument
    sessionStorage.playerC = x;
// opponent's choice
    var y = Math.ceil(Math.random() * 3);
    switch (y) {
        case 1:
            sessionStorage.oppC = "rock";
        case 2:
            sessionStorage.oppC = "paper";
        case 3:
            sessionStorage.oppC = "scissors";
    }
    document.getElementById("o-img").src = "img/" + sessionStorage.oppC + ".svg";

// compares choices
let sessionStorage.pScore = 0
let sessionStorage.oScore = 0
let sessionStorage.ties = 0
    switch (sessionStorage.playerC) {
        case "rock":
            switch (sessionStorage.oppC) {
                case "rock":
                    sessionStorage.ties++;
                case "paper":
                    sessionStorage.pScore++;
                case "scissors":
                    sessionStorage.oScore++;
            }
        case "paper":
            switch (sessionStorage.oppC){
                case "rock":
                    sessionStorage.pScore++;
                case "paper":
                    sessionStorage.ties++;
                case "scissors":
                    sessionStorage.oScore++;
            }
        case "scissors":
            switch (sessionStorage.oppC){
                case "rock":
                    sessionStorage.oScore++;
                case "paper":
                    sessionStorage.pScore++;
                case "scissors":
                    sessionStorage.ties++;
            }
    }






}