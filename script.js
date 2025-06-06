let score = 0;
let timeLeft = 5; 
let timerRunning = false;

// Sélection des éléments HTML
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const button = document.getElementById("clickButton");

// Fonction de mise à jour du score
function incrementScore() {
    if (timerRunning) {  
        score++;
        scoreDisplay.textContent = "Score : " + score;
    }
}

// Fonction de démarrage du chrono
function startTimer() {
    if (timerRunning) return; // Empêcher de relancer le chrono

    timerRunning = true;
    let interval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = "Temps restant : " + timeLeft + "s";

        if (timeLeft <= 0) {
            clearInterval(interval); // Arrêter le chrono
            timerDisplay.textContent = "⏳ Temps écoulé !";
            button.disabled = true; // Désactiver le bouton
        }
    }, 1000);
}

// Événements
button.addEventListener("click", incrementScore);
window.addEventListener("load", startTimer);
