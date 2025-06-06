let score = 0;
let rocketPosition = 0;
let gameStarted = false;

// Sélectionner les éléments HTML
const starterDisplay = document.getElementById("starter");
const rocket = document.getElementById("rocket");
const confetti = document.getElementById("confetti");
const button = document.getElementById("clickButton");

// 🔥 Déclencher le feu de départ avant de jouer
function startGame() {
    starterDisplay.textContent = "🟥";
    setTimeout(() => starterDisplay.textContent = "🟨", 1000);
    setTimeout(() => {
        starterDisplay.textContent = "🟩";
        button.disabled = false; // Active le bouton
        gameStarted = true;
    }, 2000);
}

// 🚀 Augmenter la hauteur de la fusée
function moveRocket() {
    if (!gameStarted) return;

    rocketPosition += 20; // La fusée monte
    rocket.style.bottom = rocketPosition + "px";

    if (rocketPosition >= 450) { // Si elle dépasse la ligne d'arrivée
        confetti.style.display = "block"; // Afficher les confettis 🎊
    }
}

// Écoute des événements
window.addEventListener("load", startGame);
button.addEventListener("click", moveRocket);
