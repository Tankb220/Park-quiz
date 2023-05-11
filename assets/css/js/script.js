//const quizData =[
    //{
        //question: "What was the first national park in the United States?",
        //a:"Yellow Stone National Park",
        //b:"Great Smoky Mountains National Park",
        //c:"Arches National Park",
        //d:"Grand Canyon National Park",
      //  correct: "a",
    //},
    //{
        //question:"What park has the tallest mountain in north america",
        //a:"Rockies National Park",
        //b:"Grand Teton National Park",
        //c:"Denali National Park",
      //  d:"Yosemite",
    //    correct:"d",
  //  }//
//]

const start_btn = document.querySelector(".start-btn");
const quiz_box = document.querySelector(".quiz-box");
const timer = document.querySelector(".timer");
const timer_sec = document.querySelector(".timer-left");
const qestion_text = document.querySelector(".question-text");
const options = document.querySelector(".options");

start_btn.onclick= ()=>{
    startTimer(60);
    startTimerLIne(0);
}

