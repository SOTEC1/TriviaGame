window.onload = function() {
  $(".start").on("click", start);
  $("#timer").text("Time left: " + time);
  clockRunning = false;
}


var intervalId;
var time = 30;
var clockRunning = false;

function start() {
  clearInterval(intervalId);
  clockRunning = true;
  intervalId = setInterval(decrement, 1000);
  $("#timer").text("Time left: " + time);
  } 

 function decrement() {
   time--;
   $("#timer").text("Time left: " + time);
 }
 console.log(time);