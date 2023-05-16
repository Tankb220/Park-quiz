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
      "Which park was established in 2020 and is the deepest gorge east of the Mississippi River",
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
//behaviour when an answer button is clicked: click  with id "quiz-options"//
//eventObject.target identifies the specific  element that was clicked on//
document.querySelector("#quiz-options").addEventListener("click", checkAnswer);


function optionIsCorrect(optionButton) {
  return optionButton.textContent === questions[currentQuestion].answer;
}

//if answer is incorrect, penalise time//
function checkAnswer(eventObject) {
  let optionButton = eventObject.target;
  resultDiv.style.display = "block";
  if (optionIsCorrect(optionButton)) {
    resultText.textContent = "Correct!";
    setTimeout(hideResultText, 1000);
  } else {
    resultText.textContent = "Incorrect!";
    setTimeout(hideResultText, 1000);
    if (time >= 10) {
      time = time - 10;
      displayTime();
    } else {
      //if time is less than 10,  end quiz//
    
      time = 0;
      displayTime();
      endQuiz();
    }
  }

  //increment current question by 1//
  currentQuestion++;
  //if we have not run out of questions then display next question, else end quiz//
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

//display scorecard and hide other divs//
const score = document.querySelector("#score");

//at end of quiz, clear the timer, hide any visible cards and display the scorecard //
function endQuiz() {
  clearInterval(intervalID);
  hideCards();
  scoreCard.removeAttribute("hidden");
  score.textContent = time;
}

const submitButton = document.querySelector("#submit");
const inputElement = document.querySelector("#initials");

//store user initials and score when submit button is clicked//
submitButton.addEventListener("click", storeScore);

function storeScore(event) {

  event.preventDefault();

  //check for input//
  if (!inputElement.value) {
    alert("Enter Initials before submitting");
    return;
  }

 
  let leaderboardItem = {
    initials: inputElement.value,
    score: time,
  };

  updateStoredLeaderboard(leaderboardItem);

 
  hideCards();
  leaderboardCard.removeAttribute("hidden");

  renderLeaderboard();
}

//updates the leaderboard//
function updateStoredLeaderboard(leaderboardItem) {
  let leaderboardArray = getLeaderboard();
  //update leaderboard item to leaderboard array//
  leaderboardArray.push(leaderboardItem);
  localStorage.setItem("leaderboardArray", JSON.stringify(leaderboardArray));
}

//get "leaderboardArray" from local storage (if it exists) and parse it into a javascript object ///
function getLeaderboard() {
  let storedLeaderboard = localStorage.getItem("leaderboardArray");
  if (storedLeaderboard !== null) {
    let leaderboardArray = JSON.parse(storedLeaderboard);
    return leaderboardArray;
  } else {
    leaderboardArray = [];
  }
  return leaderboardArray;
}

//display leaderboard //
function renderLeaderboard() {
  let sortedLeaderboardArray = sortLeaderboard();
  const highscoreList = document.querySelector("#highscore");
  highscoreList.innerHTML = "";
  for (let i = 0; i < sortedLeaderboardArray.length; i++) {
    let leaderboardEntry = sortedLeaderboardArray[i];
    let newListItem = document.createElement("li");
    newListItem.textContent =
      leaderboardEntry.initials + " - " + leaderboardEntry.score;
    highscoreList.append(newListItem);
  }
}

//sort leaderboard array from highest to lowest//
function sortLeaderboard() {
  let leaderboardArray = getLeaderboard();
  if (!leaderboardArray) {
    return;
  }

  leaderboardArray.sort(function (a, b) {
    return b.score - a.score;
  });
  return leaderboardArray;
}

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearHighscores);

//clear local storage and display empty leaderboard//
function clearHighscores() {
  localStorage.clear();
  renderLeaderboard();
}

const backButton = document.querySelector("#back");
backButton.addEventListener("click", returnToStart);


function returnToStart() {
  hideCards();
  startCard.removeAttribute("hidden");
}

//use link to view highscores from any point on the page//
const leaderboardLink = document.querySelector("#leaderboard-link");
leaderboardLink.addEventListener("click", showLeaderboard);

function showLeaderboard() {
  hideCards();
  leaderboardCard.removeAttribute("hidden");

  //stop countdown//
  clearInterval(intervalID);

  //assign undefined to time and display that, so that time does not appear on page//
  time = undefined;
  displayTime();

  //display leaderboard on leaderboard card//
  renderLeaderboard();
}