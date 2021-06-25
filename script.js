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

function playMessageWin(cpu, player) {
    return "You Win! " + player + " beats " + cpu + "!";
}
function playMessageDraw(both) {
    return "You both played " + both + "! It's a Draw!";
}
function playMessageLose(cpu, player) {
    return "You Lose! " + cpu + " beats " + player + "!";
}
function win(cpu, player, playerScore) {
    let resultDiv = document.getElementById("results")
    let para = document.createElement("p")
    para.textContent = playMessageWin(cpu, player)
    resultDiv.appendChild(para);
    return playerScore++;
}
function lose(cpu, player, cpuScore) {
    let resultDiv = document.getElementById("results")
    let para = document.createElement("p")
    para.textContent = playMessageLose(cpu, player)
    resultDiv.appendChild(para);
    return cpuScore++;
}
function draw(cpu) {
    let resultDiv = document.getElementById("results")
    let para = document.createElement("p")
    para.textContent = playMessageDraw(cpu)
    resultDiv.appendChild(para);
}

let scoreDiv = document.getElementById("score");
let playerScore = 0;
let cpuScore = 0;

document.getElementById("rock").addEventListener("click", function() { playRound(computerPlay(), "Rock")});
document.getElementById("paper").addEventListener("click", function() { playRound(computerPlay(), "Paper")});
document.getElementById("scissors").addEventListener("click", function() { playRound(computerPlay(), "Scissors")});


function playRound(cpuMove, playerMove) {
    if (playerMove === "Rock") {
        if (cpuMove === "Scissors") {
            win(cpuMove, playerMove)
            playerScore += 1;
        } else if (cpuMove === "Rock") {
            draw(cpuMove)
        } else {
            lose(cpuMove, playerMove)
            cpuScore += 1;
        }
    } else if (playerMove === "Paper") {
        if (cpuMove === "Scissors") {
            lose(cpuMove, playerMove, cpuScore);
            cpuScore += 1;
        } else if (cpuMove === "Rock") {
            win(cpuMove, playerMove, playerScore);
            playerScore += 1;
        } else {
            draw(cpuMove);
        }
    } else if (playerMove === "Scissors") {
        if (cpuMove === "Scissors") {
            draw(cpuMove);
        } else if (cpuMove === "Rock") {
            lose(cpuMove, playerMove, cpuScore);
            cpuScore += 1;
        } else {
            win(cpuMove, playerMove, playerScore);
            playerScore += 1;
        }
    } else {
        return "invalid";
    }

    updateScore()
} 

function updateScore() {
    document.querySelector('#score-value').textContent = `${playerScore} - ${cpuScore}`;
}