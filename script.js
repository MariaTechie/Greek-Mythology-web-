// List of all questions
const allQuestions = [
    { question: "Who is the king of the Greek gods?", options: ["Poseidon", "Zeus", "Hades", "Apollo"], answer: "Zeus" },
    { question: "What is the name of the three-headed dog that guards the underworld?", options: ["Cerberus", "Chimera", "Hydra", "Medusa"], answer: "Cerberus" },
    { question: "Which hero killed the Minotaur?", options: ["Heracles", "Theseus", "Achilles", "Odysseus"], answer: "Theseus" },
    { question: "Who is the goddess of wisdom?", options: ["Hera", "Aphrodite", "Artemis", "Athena"], answer: "Athena" },
    { question: "Who stole fire from the gods and gave it to humans?", options: ["Prometheus", "Hermes", "Apollo", "Hephaestus"], answer: "Prometheus" },
    { question: "What is the name of the river that separates the living world from the underworld?", options: ["Lethe", "Styx", "Erebus", "Acheron"], answer: "Styx" },
    { question: "Who is the god of war?", options: ["Ares", "Hermes", "Apollo", "Dionysus"], answer: "Ares" },
    { question: "Which goddess was born from sea foam?", options: ["Hera", "Artemis", "Athena", "Aphrodite"], answer: "Aphrodite" },
    { question: "Who is the ruler of the underworld?", options: ["Zeus", "Poseidon", "Hades", "Ares"], answer: "Hades" },
    { question: "Who is the Greek god of the sea?", options: ["Zeus", "Hades", "Poseidon", "Apollo"], answer: "Poseidon" },
    { question: "Which hero completed the Twelve Labors?", options: ["Perseus", "Theseus", "Heracles", "Jason"], answer: "Heracles" },
    { question: "What is the name of the winged horse in Greek mythology?", options: ["Pegasus", "Griffin", "Hippogriff", "Chimera"], answer: "Pegasus" },
    { question: "Who was cursed to turn everything he touched into gold?", options: ["Perseus", "Midas", "Orpheus", "Minos"], answer: "Midas" },
    { question: "Who is the goddess of the hunt?", options: ["Athena", "Hera", "Artemis", "Demeter"], answer: "Artemis" },
    { question: "Who is the messenger of the gods?", options: ["Apollo", "Hermes", "Dionysus", "Ares"], answer: "Hermes" },
    { question: "What was the name of the labyrinth builder?", options: ["Minos", "Daedalus", "Icarus", "Theseus"], answer: "Daedalus" },
    { question: "Which Titan was punished by holding up the sky?", options: ["Kronos", "Atlas", "Prometheus", "Oceanus"], answer: "Atlas" },
    { question: "Who is the goddess of love and beauty?", options: ["Athena", "Artemis", "Hera", "Aphrodite"], answer: "Aphrodite" },
    { question: "What was Pandora given that unleashed all evils upon the world?", options: ["A book", "A sword", "A jar", "A box"], answer: "A box" },
    { question: "Who was chained to a rock and had his liver eaten by an eagle?", options: ["Prometheus", "Perseus", "Atlas", "Orpheus"], answer: "Prometheus" },
    { question: "Who was the mother of Achilles?", options: ["Hera", "Thetis", "Aphrodite", "Athena"], answer: "Thetis" },
    { question: "What is the name of the Trojan prince who kidnapped Helen?", options: ["Hector", "Paris", "Achilles", "Odysseus"], answer: "Paris" },
    { question: "Who was the wife of Hades?", options: ["Athena", "Demeter", "Persephone", "Hera"], answer: "Persephone" },
    { question: "What is the name of the one-eyed giants in Greek mythology?", options: ["Minotaur", "Cyclops", "Chimera", "Gorgons"], answer: "Cyclops" },
    { question: "Who was the hero of the Trojan War known for his anger?", options: ["Odysseus", "Achilles", "Hector", "Paris"], answer: "Achilles" },
    { question: "Which Greek hero traveled home after the Trojan War for ten years?", options: ["Achilles", "Odysseus", "Hercules", "Perseus"], answer: "Odysseus" },
    { question: "What is the name of the snake-haired Gorgon?", options: ["Stheno", "Euryale", "Medusa", "Chimera"], answer: "Medusa" },
    { question: "Which hero slayed Medusa?", options: ["Theseus", "Perseus", "Achilles", "Heracles"], answer: "Perseus" },
    { question: "Who is the goddess of the harvest?", options: ["Demeter", "Hera", "Artemis", "Athena"], answer: "Demeter" },
    { question: "Which god rules over music, the sun, and prophecy?", options: ["Zeus", "Dionysus", "Apollo", "Hermes"], answer: "Apollo" },
    { question: "Who was the first woman created by the gods?", options: ["Hera", "Pandora", "Persephone", "Aphrodite"], answer: "Pandora" },
    { question: "What was the name of Achilles' best friend?", options: ["Hector", "Paris", "Patroclus", "Odysseus"], answer: "Patroclus" },
    { question: "Which hero led the Argonauts?", options: ["Theseus", "Jason", "Perseus", "Heracles"], answer: "Jason" },
    { question: "Who was the king of the gods before Zeus?", options: ["Poseidon", "Kronos", "Ouranos", "Hades"], answer: "Kronos" },
    { question: "Which Greek city was known for its military strength?", options: ["Athens", "Sparta", "Thebes", "Delphi"], answer: "Sparta" },
    { question: "Who designed the Trojan Horse?", options: ["Achilles", "Hector", "Odysseus", "Menelaus"], answer: "Odysseus" },
    { question: "What is the name of the underworld’s ferryman?", options: ["Charon", "Thanatos", "Erebus", "Hades"], answer: "Charon" },
    { question: "Which creature has the body of a lion, wings, and the head of a human?", options: ["Sphinx", "Chimera", "Minotaur", "Griffin"], answer: "Sphinx" },
    { question: "Who is the god of wine and festivity?", options: ["Apollo", "Hermes", "Dionysus", "Ares"], answer: "Dionysus" },
    { question: "What was the name of the shield used by Athena and Zeus?", options: ["Aegis", "Aspis", "Scutum", "Clypeus"], answer: "Aegis" },
    { question: "Which hero tamed Pegasus?", options: ["Heracles", "Bellerophon", "Theseus", "Jason"], answer: "Bellerophon" },
    { question: "Which god punished Sisyphus to roll a boulder uphill forever?", options: ["Hades", "Zeus", "Poseidon", "Thanatos"], answer: "Hades" },
    { question: "Which hero was dipped into the River Styx as a baby?", options: ["Odysseus", "Achilles", "Perseus", "Heracles"], answer: "Achilles" }
];


// Retrieve saved data from localStorage
let savedQuestions = JSON.parse(localStorage.getItem("quizQuestions"));
let savedIndex = parseInt(localStorage.getItem("currentQuestionIndex")) || 0;
let score = parseInt(localStorage.getItem("quizScore")) || 0;

// Pick 10 random questions if none are saved
let questions = savedQuestions || pickRandomQuestions();
document.getElementById("score").innerText = score;

// Function to pick random questions and save them
function pickRandomQuestions() {
    let shuffled = allQuestions.sort(() => 0.5 - Math.random()); // Shuffle
    let selected = shuffled.slice(0, 10);
    localStorage.setItem("quizQuestions", JSON.stringify(selected)); // Save in localStorage
    return selected;
}

// Function to load questions
function loadQuestion() {
    if (savedIndex >= questions.length) {
        playEndSound(); // Play sound first
        setTimeout(() => {
            alert("Quiz Finished! Your final score is: " + score + "/10");
            document.getElementById("restart-btn").style.display = "block"; // Show restart button
        }, 100); // Small delay to ensure the sound starts playing
        return;
    }

    const questionData = questions[savedIndex];
    document.getElementById("question").innerText = `Question ${savedIndex + 1}/10: ${questionData.question}`;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.classList.add("custom-radio");

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = option;
        input.id = `option${index}`;

        const span = document.createElement("span");
        span.innerText = option;

        label.appendChild(input);
        label.appendChild(span);
        answersDiv.appendChild(label);

        // Handle click event on answer
        label.addEventListener("click", () => {
            document.querySelectorAll(".custom-radio").forEach(el => el.classList.remove("selected"));
            label.classList.add("selected");
        });
    });

    document.getElementById("next-btn").style.display = "block";
}

// Function to handle answer validation
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    const correctAnswer = questions[savedIndex].answer;
    if (selectedOption.value === correctAnswer) {
        score += 1;
        localStorage.setItem("quizScore", score);
        confettiEffect(); // 🎉 Confetti effect on correct answer
    } else {
        shakeEffect(); // ❌ Shake effect on wrong answer
    }

    document.getElementById("score").innerText = score;
    savedIndex++;
    localStorage.setItem("currentQuestionIndex", savedIndex);

    setTimeout(loadQuestion, 500); // Wait before moving to the next question
}

// Confetti effect for correct answers
function confettiEffect() {
    const confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti");
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti-piece");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => confettiContainer.remove(), 3000);
}

// Shake effect for wrong answers
function shakeEffect() {
    const questionBox = document.getElementById("quiz-container");
    questionBox.classList.add("shake");
    setTimeout(() => questionBox.classList.remove("shake"), 500);
}
// Function to play sound based on final score
function playEndSound() {
    let sound = new Audio(score >= 5 ? "media/correct.mp3" : "media/wrong.mp3");
    sound.play();
}
// Event listener for Next button
document.getElementById("next-btn").addEventListener("click", checkAnswer);

// Allow pressing "Enter" key to go to next question
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

// Restart quiz
document.getElementById("restart-btn").addEventListener("click", function () {
    localStorage.removeItem("quizQuestions");
    localStorage.removeItem("currentQuestionIndex");
    localStorage.setItem("quizScore", 0);

    score = 0;
    savedIndex = 0;
    document.getElementById("score").innerText = score;
    questions = pickRandomQuestions(); // Pick new questions
    document.getElementById("restart-btn").style.display = "none"; // Hide restart button
    loadQuestion();
});

// Hide restart button initially
document.getElementById("restart-btn").style.display = savedIndex >= questions.length ? "block" : "none";

// Load first question
loadQuestion();
