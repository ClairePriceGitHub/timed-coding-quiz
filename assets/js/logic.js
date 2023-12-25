
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
var startScreen = document.getElementById('start-screen');
var startButton = document.getElementById('start');
var startMode = document.querySelector('.start');
var mode = document.querySelector('.hide');

// var optionsButton = document.createElement('button');
//     optionsButton.id = 'x';

// function createButton() {
//     optionsButton.id = 'a';
//     optionsButton.innerHTML = quizQuestion.answerOptions[0];
//     document.getElementById('choices').appendChild(optionsButton);
// }

// function runQuestion(quizQuestion) {
//     mode.style.display = 'block';
//     document.getElementById('question-title').innerHTML = quizQuestion.question;
//     createButton();
// }

// function hideQuestion() {
   
// }


// Start quiz
startButton.addEventListener('click', function(){
   
    startMode.style.display = 'none';
    runQuestion();
});

// x.addEventListener('click', function(){
//     mode.style.display = 'hide';
//     quizQuestion = question2;
//     runQuestion(quizQuestion);
// })

// Run question 
function runQuestion() {
    // Question plus answers displayed
        mode.style.display = 'block';
        document.getElementById('question-title').innerHTML = question1.question;
        // Answer options
        for (var j=0; j < question1.answerOptions.length; j++){
            var optionsButton = document.createElement('button');
            optionsButton.id = 'answerButton';
            optionsButton.innerHTML = question1.answerOptions[j];
            document.getElementById('choices').appendChild(optionsButton);
        }   
        // if first clicked goes blank
        var answerButton = document.getElementById('answerButton');
        answerButton.addEventListener('click', function(){
            mode.style.display = 'none';
        });
}














// Hide question on click of answer option button


// answerButton.addEventListener('click', function(){
//     questions.style.display = 'none';
// })






// choices.addEventListener('click', function(){
//     if (mode === 'hide') {
//         mode = 'unhide';
//         questions.setAttribute('class', 'unhide');
//     } else {
//         mode = 'hide';
//         questions.setAttribute('class', 'hide');
//     }
// });