

var startButton = document.getElementById('start');
var startMode = document.querySelector('.start');
var questionMode = document.querySelector('.hide');

var currentQuestion = 0;
var correctAnswers = 0;
var score = 0;

// Create buttons
var optionsButton1 = document.createElement('button');
optionsButton1.id = 'button1';
document.getElementById('choices').appendChild(optionsButton1);
var optionsButton2 = document.createElement('button');
optionsButton2.id = 'button2';
document.getElementById('choices').appendChild(optionsButton2);
var optionsButton3 = document.createElement('button');
optionsButton3.id = 'button3';
document.getElementById('choices').appendChild(optionsButton3);
var optionsButton4 = document.createElement('button');
optionsButton4.id = 'button4';
document.getElementById('choices').appendChild(optionsButton4);

// Create result paragraph
var resultParagraph = document.createElement('p');
resultParagraph.id = 'result';
document.getElementById('questions').appendChild(resultParagraph);



// Start button click / hide start information / unhide questions
startButton.addEventListener('click', function(){
  startMode.style.display = 'none';
  questionMode.style.display = 'block';
  // Start timer
  var count = 61;
  var timer = setInterval(function() {
    count--;
    if (count === 0) {
      clearInterval(timer);
      console.log("Time's up!");
      alert('Out of time!');
      location.reload()
    } else {
      var time = document.getElementById('time');
      time.innerHTML = count;
    }
  }, 1000);
});

getElementById

function showQuestion() {
  // Add text to question title
  var questionTitle = document.getElementById('question-title');
  questionTitle.innerHTML = questions[currentQuestion].question;

  // Append buttons
  optionsButton1.innerHTML = questions[currentQuestion].answerOptions[0];
  optionsButton1.addEventListener('click', function(){
    checkAnswer(0);
  }); 
  optionsButton2.innerHTML = questions[currentQuestion].answerOptions[1];
  optionsButton2.addEventListener('click', function(){
    checkAnswer(1);
  }); 
  optionsButton3.innerHTML = questions[currentQuestion].answerOptions[2];
  optionsButton3.addEventListener('click', function(){
    checkAnswer(2);
  }); 
  optionsButton4.innerHTML = questions[currentQuestion].answerOptions[3];
  optionsButton4.addEventListener('click', function(){
    checkAnswer(3);
  }); 

  // Create empty result papragraph underneath answer choices
 
  var result = document.getElementById('result');
  result.innerHTML = '';
}




function checkAnswer(selected) {
  var result = document.getElementById('result');
  if (selected === questions[currentQuestion].correctAnswer) {
    result.innerHTML = 'Correct!';
    score++;
  } else {
    result.innerHTML = 'Incorrect!';
  }
  nextQuestion();
}


// setTimeout(() => {
//   currentQuestion++;
//   if (currentQuestion < questions.length) {
//     var removeButton1 = document.getElementById('button1');
//     document.getElementById('choices').removeChild(removeButton1);
//     var removeButton2 = document.getElementById('button2');
//     document.getElementById('choices').removeChild(removeButton2);
//     var removeButton3 = document.getElementById('button3');
//     document.getElementById('choices').removeChild(removeButton3);
//     var removeButton4 = document.getElementById('button4');
//     document.getElementById('choices').removeChild(removeButton4);
//     showQuestion();
//   } else {
//     endscreen();
//   }
// }, 5000);


function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    // var removeButton1 = document.getElementById('button1');
    // document.getElementById('choices').removeChild(removeButton1);
    // var removeButton2 = document.getElementById('button2');
    // document.getElementById('choices').removeChild(removeButton2);
    // var removeButton3 = document.getElementById('button3');
    // document.getElementById('choices').removeChild(removeButton3);
    // var removeButton4 = document.getElementById('button4');
    // document.getElementById('choices').removeChild(removeButton4);
    showQuestion();
  } else {
    endscreen();
  }
}


function endscreen() {
  var finalScore = document.getElementById('final-score');
  finalScore.innerHTML = score;
}

// var count = 60;
// var timer = setInterval(function() {
//   count--;
//   console.log(count);
//   if (count === 0) {
//     clearInterval(timer);
//     console.log("Time's up!");
//   }
// }, 1000);



showQuestion();