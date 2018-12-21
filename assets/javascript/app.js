// on window load 
window.onload = function() {
  $(".start").on("click", start);
  $("#timer").text("Time left: " + time);
  $(".submit").on("click", endGame);
  clockRunning = false;
  $(".question1").text("What color is the sky?");
  $(".question2").text("What color is the grass?");
  $(".question3").text("How many days are in a year?");
  $(".question4").text("What's the shortest month of the year?");
  $(".question5").text("what is 5-2?")
}

// variables
var intervalId;
var time = 10;
var clockRunning = false;
var correctAnswers = 0;
var wrongAnswers = 0;

// start button function
function start() {
  clearInterval(intervalId);
  clockRunning = true;
  intervalId = setInterval(decrement, 1000);
  $("#timer").text("Time left: " + time);
}

// timer function
 function decrement() {
   time--;
   $("#timer").text("Time left: " + time);
   if (time === 0) {
     endGame();
   }
 }

// stops timer
 function endGame () {
   clearInterval(intervalId);

   for (let i = 0; i < answers.length; i++) {
     
     if ($(`input[name="Q${i+1}"]:checked`).val() === answer[i].correctAnswers) {
       correctAnswers++;
       }
       else {
         wrongAnswers++;
       }
   }
 }

var answers = [{
  answers:  ["Red", "Blue", "Green", "Yellow"],
  correctAnswers: "Blue"},
  
    {answers: ["Red", "Blue", "Green", "Yellow"],
    correctAnswers: "Green"},
    {
      answers: ["600", "1250", "1738", "365"],
      correctAnswers: "365"},
      {
        answers: ["January", "December", "July", "February"],
        correctAnswers: "February"
      },
      {
        answers: ["0", "1", "2", "-3"],
        correctAnswers: "2"
      }];

   


  





 