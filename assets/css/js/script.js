const start_btn = document.querySelector(".start-btn");
const quiz_box = document.querySelector(".quiz-box");
const timer = document.querySelector(".timer");
const timer_sec = document.querySelector(".timer-sec");
const options = document.querySelector(".options");
let quizTime = 7;
const question_text = [
  {
        question: "What was the first national park in the United States?",
        id:0,
        a:"Yellow Stone National Park", isCorrect: False,
        b:"Great Smoky Mountains National Park", isCorrect: False,
        c:"Arches National Park", isCorrect: True,
        d:"Grand Canyon National Park", isCorrect: False,
  },
       
  }
    //{
        //question:"What park has the tallest mountain in north america",
        //a:"Rockies National Park",
        //b:"Grand Teton National Park",
        //c:"Denali National Park",
      //  d:"Yosemite",
    //    correct:"d",
  //  }//
]

function startQuizTime() {
  // set the textContent of timer_sec when the quiz begins
  timer_sec.textContent = quizTime;
  timer_sec.setAttribute("id", "someIdValue");
  console.log(timer_sec.classList);

  // let's call our set interval function
  const intervalId = setInterval(function() {
    if(quizTime == 0) {
      alert('Quiz time is finished');
      clearInterval(intervalId);
      // right now, all your doing is displaying some alert message, but
      // you can do other stuff too, like run some custom function here
      // myCustomFunction();
      return null;
    }
    quizTime = quizTime - 1;
    timer_sec.textContent = quizTime;
  }, 1000)
}

function beginQuiz() {
  console.log('quiz started');
  quiz_box.classList.toggle("hide");
}
function buildQuiz(){
  const output = [];

  question_text.forEach(
    (currentQuestion, questionNumber) => {
      const answers = [];

      for(letter in currentQuestion.answers){
        

        answers.push(
          `<label>`
          <input type="radio" name=
        )
      }

    }
  )
}


// define a function, no big deal
// function mySpecialFunction() {
//   console.log('You clicked the start button');
//   timer_sec.textContent = "59";
// }

//start_btn.addEventListener("click", mySpecialFunction);
start_btn.addEventListener("click", startQuizTime);
//the below is equivalent to the line above
start_btn.addEventListener("click", beginQuiz);

// so is this
// start_btn.addEventListener("click", () => {
//   console.log('You clicked the start button');
//   console.log('Great job');
// }); 

