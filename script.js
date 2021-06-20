function computerPlay() {
    let ranNum = Math.floor(Math.random()*3 ) +1;
    if (ranNum === 1) {
        return "Rock";
    } else if (ranNum === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function playMessageWin(cpu, player) {
    return "You Win! " + player + " beats " + cpu;
}
function playMessageDraw(both) {
    return "You both played " + both + "! It's a Draw!";
}
function playMessageLose(cpu, player) {
    return "You Lose! " + cpu + " beats " + player;
}
function playRound(cpuMove, playerMove) {
    if (playerMove === "Rock") {
        if (cpuMove === "Scissors") {
            return "win";
        } else if (cpuMove === "Rock") {
            return "draw";
        } else {
            return "lose";
        }
    } else if (playerMove === "Paper") {
        if (cpuMove === "Scissors") {
            return "lose";
        } else if (cpuMove === "Rock") {
            return "win";
        } else {
            return "draw";
        }
    } else if (playerMove === "Scissors") {
        if (cpuMove === "Scissors") {
            return "draw";
        } else if (cpuMove === "Rock") {
            return "lose";
        } else {
            return "win";
        }
    } else {
        return "invalid";
    }
}
function game() {
    let playerScore = 0;
    let cpuScore = 0;

    for (i = 0; i < 5; i++) {
        let computerOut = computerPlay();
        let playerInput = capitalizeFirstLetter(window.prompt("Your move: "));
        let roundResult = playRound(computerOut, playerInput);
        if (roundResult === "win") {
            playerScore++
            console.log(playMessageWin(computerOut, playerInput));
        } else if (roundResult === "lose") {
            cpuScore++
            console.log(playMessageLose(computerOut, playerInput));
        } else if (roundResult === "draw") {
            console.log(playMessageDraw(computerOut));
        } else {
            console.log("Invalid move")
        }
        console.log(roundResult);
    }
    let gameRes = "Game result: " + playerScore + "-" + cpuScore;
    console.log(gameRes);
}
game()