const quizData = [
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "None"
    ],
    answer: 0
  },
  {
    question: "Which language is used for styling?",
    options: ["HTML", "Java", "CSS", "Python"],
    answer: 2
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;
  document.getElementById("opt0").innerText = q.options[0];
  document.getElementById("opt1").innerText = q.options[1];
  document.getElementById("opt2").innerText = q.options[2];
  document.getElementById("opt3").innerText = q.options[3];
}

function checkAnswer(selected) {
  if (selected === quizData[currentQuestion].answer) {
    document.getElementById("result").innerText = "Correct!";
  } else {
    document.getElementById("result").innerText = "Wrong!";
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    setTimeout(loadQuestion, 1000);
  } else {
    document.getElementById("result").innerText += " Quiz Completed!";
  }
}

loadQuestion();
