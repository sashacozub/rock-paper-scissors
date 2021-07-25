// Launch the welcome screen and get the game ready for choosing.
window.onload = function() {
    const beginGame = document.getElementById("buttonStart");
    beginGame.onclick = function() {
        const starterWindow = document.getElementById("welcomeScreen");
        starterWindow.setAttribute("class", "remove");
        playerChoice();
    };
}

let gameGoing = false;
let playerScoreTrack = 0;
let computerScoreTrack = 0;


// Main flow of the game, assigning choices getting results.
function playerChoice() {
    const buttonPressed = document.getElementsByClassName("img-btn");
    for (let i = 0; i < buttonPressed.length; i++) {
        buttonPressed[i].onclick = function(choice) {

            if (gameGoing === false) {
                gameGoing = true;
                let selection = choice.target;
                let finalPlayerAnswer = selection.id;
                
                let playerPick;
                let computerPick;
    
                playerPick = finalPlayerAnswer;
                computerPick = randomPick();
    
                if (playerPick === computerPick) {
                    gameDisplay("No one wins this time.");
                    textColor("even");
                } else if (playerPick === "rock" && computerPick === "scissors" ||
                        playerPick === "paper" && computerPick === "rock" ||
                        playerPick === "scissors" && computerPick === "paper") {
                            gameDisplay("YOU WIN!");
                            textColor("win");
                            resultsTrack("win");

                        } else {
                            gameDisplay("Computer wins...");
                            textColor("lose");
                            resultsTrack();
                        }
            }

            



        };
    }
}


// Determine computer's random choice.
function randomPick() {
    let pick;
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        pick = "rock";
        speechBubble("rock");
    } else if (number === 1) {
        pick = "paper";
        speechBubble("paper");
    } else {
        pick = "scissors";
        speechBubble("scissors");
    }
    return pick;
}


// Display the text showing who won this round.
function gameDisplay(text) {
    countingNums();
    const delayFunction = function() {
        const resultsScreen = document.getElementById("resultScreen");
        resultsScreen.innerHTML = text;
        gameGoing = false;
    };
    setTimeout(delayFunction, 2700);
}


// Display the computer's speech bubble with his choice.
function speechBubble(text) {
    clearBox(); // Remove previous answers.
    countingNums(); // The countdown numbers that appear before displaying the result.
    const delayFunction = function() {
        let robotSay = document.getElementById("robotSays");

        if (text === "rock") {
            let robotChoose = document.getElementById("robotRock");
            robotSay.setAttribute("class", "reveal");
            robotChoose.setAttribute("class", "robotChoice reveal");
        } else if (text === "paper") {
            let robotChoose = document.getElementById("robotPaper");
            robotSay.setAttribute("class", "reveal");
            robotChoose.setAttribute("class", "robotChoice reveal");
        } else {
            let robotChoose = document.getElementById("robotScissors");
            robotSay.setAttribute("class", "reveal");
            robotChoose.setAttribute("class", "robotScissors reveal");
        }
    };
    setTimeout(delayFunction, 2700);
}


function clearBox() {
    let robotSay = document.getElementById("robotSays");
    let robotRock = document.getElementById("robotRock");
    let robotPaper = document.getElementById("robotPaper");
    let robotScissors = document.getElementById("robotScissors");

    robotSay.setAttribute("class", "remove");
    robotRock.setAttribute("class", "remove");
    robotPaper.setAttribute("class", "remove");
    robotScissors.setAttribute("class", "remove");
}



// Change text color depending on the winner.
function textColor(color) {
    const delayFunction = function() {
        let text = document.getElementById("resultScreen");

        if (color === "win") {
            text.setAttribute("class", "win");
        } else if (color === "lose") {
            text.setAttribute("class", "lose");
        } else {
            text.setAttribute("class", "even");
        }
    };
    setTimeout(delayFunction, 2700);
}

function resultsTrack(track) {
    const delayFunction = function() {
        if (track === "win") {
            playerScoreTrack++;
            let addition = document.getElementById("playerScore");
            addition.innerHTML = playerScoreTrack;
        } else { 
            computerScoreTrack++;
            let addition = document.getElementById("computerScore");
            addition.innerHTML = computerScoreTrack;
        }
    };
    setTimeout(delayFunction, 2700);
}


function countingNums() {
    let numThree = document.getElementById("three");
    let numTwo = document.getElementById("two");
    let numOne = document.getElementById("one");

    let resultsText = document.getElementById("resultScreen");
    resultsText.innerHTML = "";

    function three() {
        numThree.setAttribute("class", "reveal");
    };
    function two() {
        numThree.setAttribute("class", "remove");
        numTwo.setAttribute("class", "reveal");
    };
    function one() {
        numTwo.setAttribute("class", "remove");
        numOne.setAttribute("class", "reveal");
        function lastNumber() {
            numOne.setAttribute("class", "remove");
        };
        setTimeout(lastNumber, 1000);
    };

    three();
    setTimeout(two, 700);
    setTimeout(one, 1700);
}