const questions = [
   {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: 2,
   },
   {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: 1,
   },
   {
      question: "What is the largest ocean on Earth?",
      choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: 3,
   },
   {
      question: "Who wrote 'To Kill a Mockingbird'?",
      choices: [
         "Harper Lee",
         "Mark Twain",
         "Ernest Hemingway",
         "F. Scott Fitzgerald",
      ],
      answer: 0,
   },
   {
      question: "What is the smallest prime number?",
      choices: ["0", "1", "2", "3"],
      answer: 2,
   },
   {
      question: "What gas do plants use for photosynthesis?",
      choices: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
      answer: 3,
   },
   {
      question: "What is the hardest natural substance on Earth?",
      choices: ["Gold", "Iron", "Diamond", "Platinum"],
      answer: 2,
   },
   {
      question: "What year did the Titanic sink?",
      choices: ["1912", "1905", "1920", "1898"],
      answer: 0,
   },
   {
      question: "What is the main ingredient in guacamole?",
      choices: ["Tomato", "Avocado", "Pepper", "Onion"],
      answer: 1,
   },
   {
      question: "What is the chemical symbol for gold?",
      choices: ["Au", "Ag", "Pb", "Fe"],
      answer: 0,
   },
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quizContainer");
const scoreElement = document.getElementById("score");
const nextQuestionButton = document.getElementById("nextQuestion");

function loadQuestion() {
   quizContainer.innerHTML = ""; // Clear previous question
   const currentQuestion = questions[currentQuestionIndex];

   // Create and append the question element
   const questionElement = document.createElement("p");
   questionElement.textContent = currentQuestion.question;
   quizContainer.appendChild(questionElement);

   // Create and append the answer buttons
   currentQuestion.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.classList.add("answer");
      button.dataset.index = index;
      button.textContent = choice;
      button.addEventListener("click", handleAnswerClick);
      quizContainer.appendChild(button);
   });
}

function handleAnswerClick(event) {
   const index = parseInt(event.target.dataset.index);
   const correctIndex = questions[currentQuestionIndex].answer;

   // Check if the clicked answer is correct
   if (index === correctIndex) {
      event.target.classList.add("correct");
      score++;
      scoreElement.textContent = `Score: ${score}`;
   } else {
      event.target.classList.add("incorrect");
   }

   // Disable further clicks on the current question
   document.querySelectorAll(".answer").forEach((button) => {
      button.removeEventListener("click", handleAnswerClick);
   });
}

function handleNextQuestion() {
   currentQuestionIndex++;
   if (currentQuestionIndex < questions.length) {
      loadQuestion();
   } else {
      quizContainer.innerHTML = `Game Over! Your final score is ${score}.`;
      nextQuestionButton.textContent = "Play Again";
      nextQuestionButton.addEventListener("click", () => {
         location.reload();
      });
   }
}

nextQuestionButton.addEventListener("click", handleNextQuestion);

// Load the first question
loadQuestion();
