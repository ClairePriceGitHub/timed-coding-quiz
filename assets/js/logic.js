
// var count = 60;
// var timer = setInterval(function() {
//   count--;
//   console.log(count);
//   if (count === 0) {
//     clearInterval(timer);
//     console.log("Time's up!");
//   }
// }, 1000);





// Hide start quiz information on click of 'start quiz' button
var startScreen = document.getElementById('start-screen');
var startButton = document.getElementById('start');
var startMode = document.querySelector('.start');
var mode = document.querySelector('.hide');
startButton.addEventListener('click', function(){
    startMode.style.display = 'none';
    runQuestion();
});

// Run question 
function runQuestion() {
    for (var i=0; i < questions.length; i++) {
        mode.style.display = 'block';
        document.getElementById('question-title').innerHTML = question1.question;

        for (var j=0; j < question1.answerOptions.length; j++){
            var optionsButton = document.createElement('button');
            optionsButton.innerHTML = question1.answerOptions[j];
            document.getElementById('choices').appendChild(optionsButton);
        }
    }
}





// // Hide question on click of answer option button
// var questions = document.getElementById('questions');
// var answerButton = document.getElementById('choices');

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