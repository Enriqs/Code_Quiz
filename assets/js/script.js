var startButton = document.querySelector(".start-button");
var ol_1 = document.querySelector(".answers1");
var ol_2 = document.querySelector(".answers2");
var ol_3 = document.querySelector(".answers3");
var ol_4 = document.querySelector(".answers4");
var ol_5 = document.querySelector(".answers5");
var submitButton = document.querySelector(".submit");
var initials = document.querySelector(".initials");


var header = document.querySelector("header");
var q1 = document.querySelector(".q1");
var q2 = document.querySelector(".q2");
var q3 = document.querySelector(".q3");
var q4 = document.querySelector(".q4");
var q5 = document.querySelector(".q5");
var highscores = document.querySelector(".highscores");
var answer = document.querySelector("#answer");
var value = document.querySelector("#value");
var x=0; // Sum of values


var quiz = document.querySelector(".quiz");
var end = document.querySelector(".end");

// Time variables
var timerElement = document.querySelector(".timer-count");
var timer;
var timerCount;
var y=true; // will work like a loop of while


// Button clicked
var clicked;
var reply_click = function()
{
  clicked=this.innerHTML;
  console.log(clicked);
}
document.getElementById('1').onclick = reply_click;
document.getElementById('2').onclick = reply_click;
document.getElementById('3').onclick = reply_click;
document.getElementById('4').onclick = reply_click;
document.getElementById('5').onclick = reply_click;
document.getElementById('6').onclick = reply_click;
document.getElementById('7').onclick = reply_click;
document.getElementById('8').onclick = reply_click;
document.getElementById('9').onclick = reply_click;
document.getElementById('10').onclick = reply_click;
document.getElementById('11').onclick = reply_click;
document.getElementById('12').onclick = reply_click;
document.getElementById('13').onclick = reply_click;
document.getElementById('14').onclick = reply_click;
document.getElementById('15').onclick = reply_click;
document.getElementById('16').onclick = reply_click;
document.getElementById('17').onclick = reply_click;
document.getElementById('18').onclick = reply_click;
document.getElementById('19').onclick = reply_click;
document.getElementById('20').onclick = reply_click;

// Start Quiz

startButton.addEventListener("click",function(){
  header.style.display = "none";
  q1.style.display = "block";
  timerCount = 25;
  startTimer();
})

if (y===true){
ol_1.addEventListener("click", function(){
  q1.style.display = "none";
  q2.style.display = "block";
  if (clicked==="alerts"){
    answer.textContent = "Correct!!";
    x=x+5;
  } else {
    answer.textContent = "Incorrect!!";
    timerCount = timerCount-5;
  }
  
});
}

if (y===true){
ol_2.addEventListener("click", function(){
  q2.style.display = "none";
  q3.style.display = "block";
  if (clicked==="parentheses"){
    answer.textContent = "Correct!!";
    x=x+5;
  } else {
    answer.textContent = "Incorrect!!";
    timerCount = timerCount-5;
  }
  
});
}

if (y===true){
ol_3.addEventListener("click", function(){
  q3.style.display = "none";
  q4.style.display = "block";
  if (clicked==="all of the above"){
    answer.textContent = "Correct!!";
    x=x+5;
  } else {
    answer.textContent = "Incorrect!!";
    timerCount = timerCount-5;
  }
});
}


if (y===true){
ol_4.addEventListener("click", function(){
  q4.style.display = "none";
  q5.style.display = "block";
  if (clicked==="quotes"){
    answer.textContent = "Correct!!";
    x=x+5;
  } else {
    answer.textContent = "Incorrect!!";
    timerCount = timerCount-5;
  }
});
}


if (y===true){
ol_5.addEventListener("click", function(){
  q5.style.display = "none";
  end.style.display = "block";
  if (clicked==="console.log"){
    answer.textContent = "Correct!!";
    x=x+5;
  } else {
    answer.textContent = "Incorrect!!";
    timerCount = timerCount-5;
  }
  value.textContent = x+timerCount;
  y=false;
});
}

end.addEventListener("click", function(){
  end.style.display = "none";
  highscores.style.display = "block";
});


function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    if (y===true){
    timerCount--;
    timerElement.textContent = timerCount;
    // Tests if time has run out
    if (timerCount === 0) {
      y=false;
      timerCount=0;
      return
    }
  }
  else{
    return
  }
  }, 1000);
}
