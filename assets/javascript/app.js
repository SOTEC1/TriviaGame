// on window load 
window.onload = function begin() {
  $(".first").show()
  $(".game").hide()
  $(".end").hide()
  $(".start").on("click", start);
  $("#timer").text("Time left: " + time);
  $(".submit").on("click", endGame);
  $(".reset").on("click", reset);
  clockRunning = false;
}

// variables
var intervalId;
var time = 30;
var clockRunning = false;
var correctAnswers = 0;
var wrongAnswers = 0;



// start button function
function start() {
  clearInterval(intervalId);
  clockRunning = true;
  intervalId = setInterval(decrement, 1000);
  $("#timer").text("Time left: " + time);
  $(".start").hide()
  $(".game").show()
  $(".end").hide()
}

// timer function
function decrement() {
  time--;
  $("#timer").text("Time left: " + time);
  if (time === 0) {
    endGame();
  }
}

// end game function stops timer, runs players choices against correct answers, prints correct and wrong answers to final screen
function endGame() {
  clearInterval(intervalId);
// loop goes through players answers
  for (let i = 0; i < answers.length; i++) {
    if ($(`input[name="Q${i}"]:checked`).val() === answers[i].correctAnswers) {
      correctAnswers++;
    } else {
      wrongAnswers++;
    }
  }
  $(".start").hide()
  $(".game").hide()
  $(".end").show()
  $(".correct").text("Correct Answers: " + correctAnswers);
  $(".wrong").text("Wrong Answers: " + wrongAnswers)
}

// answers array
var answers = [{
    answers: ["Red", "Blue", "Green", "Yellow"],
    correctAnswers: "Blue"
  },

  {
    answers: ["Red", "Blue", "Green", "Yellow"],
    correctAnswers: "Green"
  },
  {
    answers: ["600", "1250", "1738", "365"],
    correctAnswers: "365"
  },
  {
    answers: ["January", "December", "July", "February"],
    correctAnswers: "February"
  },
  {
    answers: ["0", "1", "3", "-2"],
    correctAnswers: "3"
  }
];

// reset function
// reset "works" but when reset previous answers still displayed and after first game correct/wrong doesn't add up correctly
function reset() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  $(".first").hide()
  $(".game").show()
  $(".end").hide()
  $(".start").on("click", start);
  $("#timer").text("Time left: " + time);
  $(".submit").on("click", endGame);
  clockRunning = true;
  wrongAnswers = 0;
  correctAnswers = 0;
}