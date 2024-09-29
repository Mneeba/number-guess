var randomNumber = Math.floor(Math.random() * 100) + 1;
var feedback = document.getElementById("feedback");
var guessButton = document.getElementById("guessButton");

guessButton.addEventListener("click", () => {
    var guess = Number(document.getElementById("guessInput").value);
    
    if (guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a number between 1 and 100.";
    } else if (guess > randomNumber) {
        feedback.textContent = "Too high! Try again.";
    } else if (guess < randomNumber) {
        feedback.textContent = "Too low! Try again.";
    } else {
        feedback.textContent = "Congratulations! You've guessed the number!";
    }
});
