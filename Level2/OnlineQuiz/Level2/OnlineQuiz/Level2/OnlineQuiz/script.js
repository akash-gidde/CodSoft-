const quizData = [
  {
    question: "HTML stands for?",
    a: "Hyper Text Markup Language",
    b: "High Text Machine Language",
    c: "Hyperlinks and Text Markup Language",
    correct: "a"
  },
  {
    question: "Which language is used for styling?",
    a: "HTML",
    b: "CSS",
    c: "Java",
    correct: "b"
  }
];

let current = 0;
let score = 0;

function loadQuiz() {
  document.getElementById("question").innerText = quizData[current].question;
  document.getElementById("a").innerText = quizData[current].a;
  document.getElementById("b").innerText = quizData[current].b;
  document.getElementById("c").innerText = quizData[current].c;
}

function checkAnswer(answer) {
  if (answer === quizData[current].correct) {
    score++;
  }

  current++;

  if (current < quizData.length) {
    loadQuiz();
  } else {
    document.getElementById("quiz").innerHTML =
      `<h2>Quiz Finished</h2><p>Your Score: ${score}</p>`;
  }
}

loadQuiz();
