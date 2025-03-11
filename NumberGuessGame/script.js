"use strict";

let score = 20;
let highscore = 0;

let randomNumber = Math.floor(Math.random() * 20) + 1; //random number generation b/w 1-20
// function to update message
const setMessage = (message) => {
    document.querySelector(".message").textContent = message;
}
//listen for button click
document.querySelector(".check").addEventListener("click", () => {

    let guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        setMessage("Guess a number between 1 - 20");

    }
    else if (guess == randomNumber) {       //conditions to check guess with random number
        setMessage(" Correct Number");
        document.querySelector(".number").textContent = randomNumber;
        document.body.style.backgroundColor = ("#60b347");

        if (score > highscore) {              //update highscore
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;

        }
    }

    else {
        setMessage(guess > randomNumber ? "Too High" : "Too Low");
        score--;
        document.querySelector(".score").textContent = score;

        if (score == 0) setMessage(" You lost");
    }

    document.querySelector(".again").addEventListener("click", () => {

        score = 20;
        randomNumber = Math.floor(Math.random() * 20) + 1;
        setMessage("Start Guessing");
        document.querySelector(".score").textContent = score;
        document.querySelector(".number").textContent = "?";
        document.querySelector(".guess").textContent = "";
        document.body.style.backgroundColor = "#222";

    })

})