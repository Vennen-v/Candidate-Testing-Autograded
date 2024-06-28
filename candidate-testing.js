const input = require("readline-sync");

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";

//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? ",
];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  candidateName = input.question("What is your name? ");

  return candidateName;
  // TODO 1.1b: Ask for candidate's name //
}

function askQuestion() {
  candidateAnswers[0] = input.question(questions[0]);
  console.log(`Your answer: ${candidateAnswers[0]}`);
  console.log(`Correct answer: ${correctAnswers[0]}`);

  candidateAnswers[1] = input.question(questions[1]);
  console.log(`Your answer: ${candidateAnswers[1]}`);
  console.log(`Correct answer: ${correctAnswers[1]}`);

  candidateAnswers[2] = input.question(questions[2]);
  console.log(`Your answer: ${candidateAnswers[2]}`);
  console.log(`Correct answer: ${correctAnswers[2]}`);

  candidateAnswers[3] = input.question(questions[3]);
  console.log(`Your answer: ${candidateAnswers[3]}`);
  console.log(`Correct answer: ${correctAnswers[3]}`);

  candidateAnswers[4] = input.question(questions[4]);
  console.log(`Your answer: ${candidateAnswers[4]}`);
  console.log(`Correct answer: ${correctAnswers[4]}`);

  return candidateAnswers;
}
// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //

  let grade; //TODO 3.2 use this variable to calculate the candidates score.
  let correct = 0;
  let incorrect = 0;

  if (candidateAnswers[0].toLowerCase() == correctAnswers[0].toLowerCase()) {
    correct += 1;
  } else {
    incorrect = +1;
  }
  if (candidateAnswers[1].toLowerCase() == correctAnswers[1].toLowerCase()) {
    correct += 1;
  } else {
    incorrect = +1;
  }
  if (candidateAnswers[2] == correctAnswers[2]) {
    correct += 1;
  } else {
    incorrect = +1;
  }
  if (candidateAnswers[3].toLowerCase() == correctAnswers[3].toLowerCase()) {
    correct += 1;
  } else {
    incorrect = +1;
  }
  if (candidateAnswers[4] == correctAnswers[4]) {
    correct += 1;
  } else {
    incorrect = +1;
  }

  grade = (correct / 5) * 100;

  console.log(
    `>>> Overall Grade: ${grade}% (${correct} of 5 responses correct) <<<`
  );

  if (correct >= 4) {
    console.log(">>> Status: PASSED <<<");
  } else {
    console.log(">>> Status: FAILED <<<");
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Hello ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram,
};
