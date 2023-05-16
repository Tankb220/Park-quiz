//questions //
const questions = [
  {
    questionText: "What was the first National park in the United States?",
    options:  [
      "1. Arches ", 
    "2. Grand Canyon", 
    "3. Yellowstone", 
    "4. Zion"],
    answer: "3. Yellowstone",
  },
  {
    questionText: "Which park has the tallest mountain in North America?",
    options: [
      "1. Great Smoky Mountains",
      "2. Yosemite",
      "3. Death Valley",
      "4. Denali",
    ],
    answer: "4. Denali",
  },
  {
    questionText:
      "Which park has the deepest lake in the United States?",
    options: [
      "1. Crater Lake",
      "2. Acadia",
      "3. Grand Canyon",
       "4. MOunt Rainer"],
    answer: "1. Crater Lake",
  },
  {
    questionText:
      "Which park has the world's longest known cave system",
    options: [
      "1. Hot Springs",
      "2. Bryce Canyon",
      "3. Carlbad Caverns",
      "4. Mammoth Cave",
    ],
    answer: "4. Mammoth Cave",
  },
  {
    questionText:
      "Which park was establish in 2020 and is the deepest gorge east of the Mississippi River",
    options: [
      "1. New River Gorge",
       "2. Great Smokey Mountains", 
       "3. Shenadoah", 
       "4. Cuyahoga Valley"],
    answer: "1. New River Gorge",
  },
];

const startCard = document.querySelector("#start");
const questionCard = document.querySelector("#question-hidden");
const scoreCard = document.querySelector("#score-hidden");
const leaderboardCard = document.querySelector("#leaderboard-hidden");


function hideCards() {
  startCard.setAttribute("hidden", true);
  questionCard.setAttribute("hidden", true);
  scoreCard.setAttribute("hidden", true);
  leaderboardCard.setAttribute("hidden", true);
}

const resultDiv = document.querySelector("#resultdiv");
const resultText = document.querySelector("#result-text");

//hide result div//
function hideResultText() {
  resultDiv.style.display = "none";
}

//these variables are required globally//
var intervalID;
var time;
var currentQuestion;

document.querySelector("#start-button").addEventListener("click", startQuiz);

function startQuiz() {
  //hide any visible cards, show  question card//
  hideCards();
  questionCard.removeAttribute("hidden");

  //assign 0 to currentQuestion when start  is clicked, then display a question on the page//
  currentQuestion = 0;
  displayQuestion();

  //set total time depending on number of questions//
  time = questions.length * 10;

  //executes function "countdown" every 1000ms to update time and display on page//
  intervalID = setInterval(countdown, 1000);

  displayTime();
}

//if time runs out then end quiz//
function countdown() {
  time--;
  displayTime();
  if (time < 1) {
    endQuiz();
  }
}

//display time on page//
const timeDisplay = document.querySelector("#time");
function displayTime() {
  timeDisplay.textContent = time;
}

//display the question and answer options for the current question//
function displayQuestion() {
  let question = questions[currentQuestion];
  let options = question.options;

  let h2QuestionElement = document.querySelector("#question-text");
  h2QuestionElement.textContent = question.questionText;

  for (let i = 0; i < options.length; i++) {
    let option = options[i];
    let optionButton = document.querySelector("#option" + i);
    optionButton.textContent = option;
  }
}