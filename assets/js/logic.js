
var count = 60;
var timer = setInterval(function() {
  count--;
  console.log(count);
  if (count === 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
}, 1000);





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




// // Start quiz
// startButton.addEventListener('click', function(){
   
//   startMode.style.display = 'none';
//   runQuestion(question1);
//   runQuestion(question2);
// });


var startScreen = document.getElementById('start-screen');
var startButton = document.getElementById('start');
var question = document.getElementById('question-title');
var startMode = document.querySelector('.start');
var questionMode = document.querySelector('.hide');
var choicesMode = document.querySelector('.choices');

// Create buttons
var optionsButton1 = document.createElement('button');
document.getElementById('choices').appendChild(optionsButton1);
var optionsButton2 = document.createElement('button');
document.getElementById('choices').appendChild(optionsButton2);
var optionsButton3 = document.createElement('button');
document.getElementById('choices').appendChild(optionsButton3);
var optionsButton4 = document.createElement('button');
document.getElementById('choices').appendChild(optionsButton4);

function showQuestion(questionNumber) {
      questionMode.style.display = 'block';
      question.innerHTML = questionNumber.question;
      optionsButton1.innerHTML = questionNumber.answerOptions[0];
      optionsButton2.innerHTML = questionNumber.answerOptions[1];
      optionsButton3.innerHTML = questionNumber.answerOptions[2];
      optionsButton4.innerHTML = questionNumber.answerOptions[3];
      choicesMode.addEventListener('click', function(){
        questionMode.style.display = 'none';
        showQuestion(question2);
        });
      
      // optionsButton2.addEventListener('click', function(){
      //   questionMode.style.display = 'none';
      // });
      // optionsButton3.addEventListener('click', function(){
      //   questionMode.style.display = 'none';
      // });
      // optionsButton4.addEventListener('click', function(){
      //   questionMode.style.display = 'none';
      // });
}




// optionsButton1.addEventListener('click', function(){
//   questionMode.style.display = 'none';
// });


// Start quiz


function game() {
  startButton.addEventListener('click', function(){
    startMode.style.display = 'none';
    showQuestion(question1);
  });
  
}

game();

// choices.addEventListener('click', function(){
//     if (mode === 'hide') {
//         mode = 'unhide';
//         questions.setAttribute('class', 'unhide');
//     } else {
//         mode = 'hide';
//         questions.setAttribute('class', 'hide');
//     }
// });