const questions = [
    "What is HTML?",
    "What is CSS?",
    "What is JavaScript?",
    "What is the DOM?"
];

let current = 0;

const card = document.getElementById("card");
const ques = document.getElementById("ques");

const tmp = document.getElementById("tmp");
const questmp = document.getElementById("questmp");

ques.textContent = questions[current];
questmp.textContent = questions[current+1];

card.addEventListener("click", () => {

    // move card away
    card.classList.add("exit");

    // wait for animation
    card.addEventListener("transitionend", () => {

        // go to next question
        current++;

        if (current >= questions.length) {
            current = 0;
        }

        // change text
        ques.textContent = questions[current];

        // bring card back
        card.classList.add("no-transition")
        card.classList.remove("exit");
        card.offsetHeight;
        card.classList.remove("no-transition");
        questmp.textContent = questions[current+1];
    }, { once: true });
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}
