// this will initialize the scores
function memory() {
sessionStorage.oScore = 0;
sessionStorage.pScore = 0;

    if (sessionStorage.oScore == undefined) {
        sessionStorage.oScore = 0;
    }
    document.getElementById("oScore").innerHTML = sessionStorage.oScore;

    if (sessionStorage.pScore == undefined) {
        sessionStorage.pScore = 0;
    }
    document.getElementById("pScore").innerHTML = sessionStorage.pScore;
} // end of memory()



// game() will be run each time that a button is clicked
function game(x) {
// set player choice to game() argument
    let playerC = x;
    let oppC = "";
// opponent's choice
    let y = Math.ceil(Math.random() * 3);
    switch (y) {
        case 1:
            oppC = "rock";
            break;
        case 2:
            oppC = "paper";
            break;
        case 3:
            oppC = "scissors";
            break;
    }
    document.getElementById("o-img").src = "svg/" + oppC + ".svg";

// compares choices
let oScoreTemp = sessionStorage.oScore;
let pScoreTemp = sessionStorage.pScore;

    switch (playerC) {
        case "rock":
            switch (oppC) {
                case "rock":
                    document.getElementById("result").innerHTML = "It's a Tie";
                    break;
                case "paper":
                    document.getElementById("result").innerHTML = "You Won";
                    pScoreTemp++;
                    break;
                case "scissors":
                    document.getElementById("result").innerHTML = "You Lost";
                    oScoreTemp++;
                    break;
            }
            break;
        case "paper":
            switch (oppC){
                case "rock":
                    document.getElementById("result").innerHTML = "You Won";
                    pScoreTemp++;
                    break;
                case "paper":
                    document.getElementById("result").innerHTML = "It's a Tie";
                    break;
                case "scissors":
                    document.getElementById("result").innerHTML = "You Lost";
                    oScoreTemp++;
                    break;
            }
            break;
        case "scissors":
            switch (oppC){
                case "rock":
                    document.getElementById("result").innerHTML = "You Lost";
                    oScoreTemp++;
                    break;
                case "paper":
                    document.getElementById("result").innerHTML = "You Won";
                    pScoreTemp++;
                    break;
                case "scissors":
                    document.getElementById("result").innerHTML = "It's a Tie";
                    break;
            }
            break;
    }

    document.getElementById("oScore").innerHTML = oScoreTemp;
    document.getElementById("pScore").innerHTML = pScoreTemp;
    sessionStorage.oScore = oScoreTemp;
    sessionStorage.pScore = pScoreTemp;

} //end of game()

// resets all scores to 0
function reset() {
document.getElementById("result").innerHTML = "It's a Tie";
sessionStorage.pScore = 0;
    document.getElementById("pScore").innerHTML = sessionStorage.pScore;
sessionStorage.oScore = 0;
    document.getElementById("oScore").innerHTML = sessionStorage.pScore;
document.getElementById("o-img").src = "svg/mystery.svg";
}