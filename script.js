let score = 0;
let timeLeft = 5; 
let timerRunning = false;

const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const button = document.getElementById("clickButton");

function incrementScore() {
    if (timerRunning) {  
        score++;
        scoreDisplay.textContent = "Score : " + score;
    }
}

function startTimer() {
    if (timerRunning) return;

    timerRunning = true;
    let interval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = "Temps restant : " + timeLeft + "s";

        if (timeLeft <= 0) {
            clearInterval(interval); 
            timerDisplay.textContent = "⏳ Temps écoulé !";
            button.disabled = true; 
        }
    }, 1000);
}

button.addEventListener("click", incrementScore);
window.addEventListener("load", startTimer);
