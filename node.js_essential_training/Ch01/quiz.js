// Mini CLI Quiz using process.stdout and process.stdin

const questions = [
  { question: "What is Node.js? ", answer: "javascript runtime" },
  { question: "Which command installs packages? ", answer: "npm install" },
  { question: "Which engine does Node.js use? ", answer: "v8" },
];

let score = 0;
let i = 0;

function askQuestion() {
  if (i < questions.length) {
    process.stdout.write(questions[i].question);
  } else {
    process.stdout.write(
      `\nQuiz finished! Your score: ${score}/${questions.length}\n`
    );
    process.exit();
  }
}

process.stdin.on("data", (data) => {
  const userAnswer = data.toString().trim().toLowerCase();
  if (userAnswer === questions[i].answer) {
    process.stdout.write("Correct!\n\n");
    score++;
  } else {
    process.stdout.write(
      `Wrong! The correct answer is: ${questions[i].answer}\n\n`
    );
  }
  i++;
  askQuestion();
});

// Start the quiz
askQuestion();
