





// Hide start quiz information on click of 'start quiz' button



// // Add buttons
// var optionsButton1 = document.createElement('button');
// optionsButton1.id = 'optionsButton1';
// optionsButton1.innerHTML = questionNumber.answerOptions[0];
// document.getElementById('choices').appendChild(optionsButton1);
// optionsButton1.addEventListener('click', function(){
//   mode.style.display = 'none';
// });

// var optionsButton2 = document.createElement('button');
// optionsButton2.id = 'optionsButton2';
// optionsButton2.innerHTML = questionNumber.answerOptions[1];
// document.getElementById('choices').appendChild(optionsButton2);
// optionsButton2.addEventListener('click', function(){
//   mode.style.display = 'none';
//   modeChoices.style.display = 'none';
// });



// var optionsButton4 = document.createElement('button');
// optionsButton4.id = 'optionsButton4';
// document.getElementById('choices').appendChild(optionsButton4);
// optionsButton4.addEventListener('click', function(){
//   mode.style.display = 'none';
// });

// // Run question 
// function runQuestion(questionNumber) {
//     // Question plus answers displayed
//         mode.style.display = 'block';
//         document.getElementById('question-title').innerHTML = questionNumber.question;

//         // Add buttons and remove if clicked
//         var optionsButton3 = document.createElement('button');
// optionsButton3.id = 'optionsButton3';
// optionsButton3.innerHTML = questionNumber.answerOptions[2];
// document.getElementById('choices').appendChild(optionsButton3);
// optionsButton3.addEventListener('click', function(){
//   mode.style.display = 'none';
// });

      


        // Answer options
        // var optionsButton1 = document.createElement('button');
        // optionsButton1.id = 'answerButton1';
        // optionsButton1.innerHTML = questionNumber.answerOptions[0];
        // document.getElementById('choices').appendChild(optionsButton1);
        // // if first clicked goes blank
        // var answerButton1 = document.getElementById('answerButton1');
        // answerButton1.addEventListener('click', function(){
        //     mode.style.display = 'none';
        // });

        // var optionsButton2 = document.createElement('button');
        // optionsButton2.id = 'answerButton2';
        // optionsButton2.innerHTML = questionNumber.answerOptions[1];
        // document.getElementById('choices').appendChild(optionsButton2);
        // // if first clicked goes blank
        // var answerButton2 = document.getElementById('answerButton2');
        // answerButton2.addEventListener('click', function(){
        //     mode.style.display = 'none';
        // });
//}


// var startScreen = document.getElementById('start-screen');
// var startButton = document.getElementById('start');
// var question = document.getElementById('question-title');
// var startMode = document.querySelector('.start');
// var questionMode = document.querySelector('.hide');
// var choicesMode = document.querySelector('.choices');

// // Create buttons
// var optionsButton1 = document.createElement('button');
// document.getElementById('choices').appendChild(optionsButton1);
// var optionsButton2 = document.createElement('button');
// document.getElementById('choices').appendChild(optionsButton2);
// var optionsButton3 = document.createElement('button');
// document.getElementById('choices').appendChild(optionsButton3);
// var optionsButton4 = document.createElement('button');
// document.getElementById('choices').appendChild(optionsButton4);


// function showQuestion(questionNumber) {
//       questionMode.style.display = 'block';
//       question.innerHTML = questionNumber.question;

//       optionsButton1.innerHTML = questionNumber.answerOptions[0];
//       optionsButton2.innerHTML = questionNumber.answerOptions[1];
//       optionsButton3.innerHTML = questionNumber.answerOptions[2];
//       optionsButton4.innerHTML = questionNumber.answerOptions[3];

//       choicesMode.addEventListener('click', function(){
//         questionMode.style.display = 'none';
//         showQuestion(question2);
//         });
// }



// // Start quiz
// function game() {
//   startButton.addEventListener('click', function(){
//     startMode.style.display = 'none';
//     questions.forEach(showQuestion);
//   });
  
// }

// game();

// choices.addEventListener('click', function(){
//     if (mode === 'hide') {
//         mode = 'unhide';
//         questions.setAttribute('class', 'unhide');
//     } else {
//         mode = 'hide';
//         questions.setAttribute('class', 'hide');
//     }
// });







// var optionsButton = document.createElement('button');
// document.getElementById('choices').appendChild(optionsButton);


// function addQuestion(questions) {
//   questionMode.style.display = 'block';
//   questionTitle.innerHTML = questions.question;
//   optionsButton1.innerHTML = questions.answerOptions[0];
//   optionsButton2.innerHTML = questions.answerOptions[1];
//   optionsButton3.innerHTML = questions.answerOptions[2];
//   optionsButton4.innerHTML = questions.answerOptions[3];
// }



  

// var elementClicked = false;

// // Start quiz
  

// // Question 1
// function addQuestion(questions) {
//   for (var i=0; i < questions.length; i++) {
//   questionMode.style.display = 'block';
//   questionTitle.innerHTML = questions.question;
//   optionsButton1.innerHTML = questions.answerOptions[0];
//   optionsButton2.innerHTML = questions.answerOptions[1];
//   optionsButton3.innerHTML = questions.answerOptions[2];
//   optionsButton4.innerHTML = questions.answerOptions[3];
//   if (elementClicked) continue;
//   }
 
// }
  


  

  // addClick(addQuestion(question1));
  // addClick(addQuestion(question2));

var startScreen = document.getElementById('start-screen');
var startButton = document.getElementById('start');
var startMode = document.querySelector('.start');

var questionMode = document.querySelector('.hide');
questionMode.style.display = 'none';






var currentQuestion = 0;
var correctAnswers = 0;





// Create result paragraph;
var resultMessage = document.createElement('p');
resultMessage.id = 'result';
document.getElementById('questions').appendChild(resultMessage);


// Start button click
startButton.addEventListener('click', function(){
  startMode.style.display = 'none';
});


function showQuestion() {
  questionMode.style.display = 'block';
  var questionTitle = document.getElementById('question-title');
  questionTitle.innerHTML = questions[currentQuestion].question;

  // Create buttons
  var optionsButton1 = document.createElement('button');
  document.getElementById('choices').appendChild(optionsButton1);
  optionsButton1.innerHTML = questions[currentQuestion].answerOptions[0];
  optionsButton1.addEventListener('click', function(){
    checkAnswer(0);
  }); 
  var optionsButton2 = document.createElement('button');
  document.getElementById('choices').appendChild(optionsButton2);
  optionsButton2.innerHTML = questions[currentQuestion].answerOptions[1];
  optionsButton2.addEventListener('click', function(){
    checkAnswer(1);
  }); 
  var optionsButton3 = document.createElement('button');
  document.getElementById('choices').appendChild(optionsButton3);
  optionsButton3.innerHTML = questions[currentQuestion].answerOptions[2];
  optionsButton3.addEventListener('click', function(){
    checkAnswer(2);
  }); 
  var optionsButton4 = document.createElement('button');
  document.getElementById('choices').appendChild(optionsButton4);
  optionsButton4.innerHTML = questions[currentQuestion].answerOptions[3];
  optionsButton4.addEventListener('click', function(){
    checkAnswer(3);
  }); 

  var result = document.getElementById('result');
  result.innerHTML = '';
}

function checkAnswer(selected) {
  var result = document.getElementById('result');
  if (selected === questions[currentQuestion].correctAnswer) {
    result.innerHTML = 'Correct!';
  } else {
    result.innerHTML = 'Incorrect!';
  }
}

var count = 60;
var timer = setInterval(function() {
  count--;
  console.log(count);
  if (count === 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
}, 1000);



showQuestion();