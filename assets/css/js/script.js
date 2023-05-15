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

