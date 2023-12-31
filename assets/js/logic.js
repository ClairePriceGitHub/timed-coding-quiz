var startButton = document.getElementById('start');
var startMode = document.querySelector('.start');
var questionMode = document.querySelector('.hide');
var questionTitle = document.getElementById('question-title');
var endScreenMode = document.getElementById('end-screen');
var finalScore = document.getElementById('final-score');
var submitButton = document.getElementById('submit');
//var highScores = document.getElementById('highscores');
var timer = document.querySelector('.timer');
// Set timer to start at 60
var time = document.getElementById('time');
time.innerHTML = 60;


// Create buttons
var optionsButton1 = document.createElement('button');
optionsButton1.id = 'optionsButton1';
document.getElementById('choices').appendChild(optionsButton1);
var optionsButton2 = document.createElement('button');
optionsButton2.id = 'optionsButton2';
document.getElementById('choices').appendChild(optionsButton2);
var optionsButton3 = document.createElement('button');
optionsButton3.id = 'optionsButton3';
document.getElementById('choices').appendChild(optionsButton3);
var optionsButton4 = document.createElement('button');
optionsButton4.id = 'optionsButton4';
document.getElementById('choices').appendChild(optionsButton4);

// Create result paragraph
var resultParagraph = document.createElement('p');
resultParagraph.id = 'result';
document.getElementById('questions').appendChild(resultParagraph);
var result = document.getElementById('result');
result.innerHTML = '';

// Create high scores list


var count = 60;
var currentQuestion = 0;
// var chosenAnswer = 0;
var score = 0;
var scoreCorrect = 10;
var scoreIncorrect = -10;



function startQuiz() {
  // Start button click: hide start information / unhide questions
  startButton.addEventListener('click', function(){
    startMode.style.display = 'none';
    questionMode.style.display = 'block';
    // Start timer
    var timer = setInterval(function() {
      count--;
      if (count === 0) {
        clearInterval(timer);
        alert('You are out of time!');
        location.reload()
      } else {
        time.innerHTML = count;
      }
    }, 1000);
  });
  showQuestion(currentQuestion);
}


function showQuestion(currentQuestion) {
  result.style.display = 'none';
  questionTitle.innerHTML = questions[currentQuestion].question;
  // Append buttons
  optionsButton1.innerHTML = questions[currentQuestion].answerOptions[0];
  optionsButton2.innerHTML = questions[currentQuestion].answerOptions[1];
  optionsButton3.innerHTML = questions[currentQuestion].answerOptions[2];
  optionsButton4.innerHTML = questions[currentQuestion].answerOptions[3];
  optionsButton1.addEventListener('click', function(){
    checkAnswer(0, currentQuestion);
    result.style.display = 'block';
  });
  optionsButton2.addEventListener('click', function(){
    checkAnswer(1, currentQuestion);
    result.style.display = 'block';
  });
  optionsButton3.addEventListener('click', function(){
    checkAnswer(2, currentQuestion);
    result.style.display = 'block';
  });
  optionsButton4.addEventListener('click', function(){
    checkAnswer(3, currentQuestion);
    result.style.display = 'block';
  });
}


function checkAnswer(index, currentQuestion) {
  if (index === questions[currentQuestion].correctAnswer) {
    result.innerHTML = 'Correct!';
    score = score + scoreCorrect;
    console.log(score);
  } else {
    result.innerHTML = 'Incorrect!';
    score = score + scoreIncorrect;
    console.log(score);
  }
  nextQuestion(currentQuestion);
}


// function nextQuestion(currentQuestion) {
//   if (currentQuestion === questions.length) {
//     endScreen();
//   } else {
//     currentQuestion += 1;
//   }
//   showQuestion(currentQuestion);
// }

function nextQuestion(currentQuestion) {
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
  } else {
    endScreen();
  }
  showQuestion(currentQuestion);
}


function endScreen() {
  questionMode.style.display = 'none';
  timer.style.display = 'none';
  endScreenMode.style.display = 'block';
  finalScore.innerHTML = score;
  submitButton.addEventListener('click', function(){
    logHighScore();
  });
}


startQuiz();