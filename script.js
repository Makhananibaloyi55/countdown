// script.js
let timeLeft = 10; // seconds
const timerDisplay = document.getElementById("timer");

const countdown = setInterval(() => {
  timeLeft--;
  timerDisplay.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    timerDisplay.textContent = "Time's up!";
  }
}, 1000);
