
var count = 60;
var timer = setInterval(function() {
  count--;
  console.log(count);
  if (count === 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
}, 1000);


//var quizButton = document.querySelector('start');
///function turnQuizButtonLilac() {
    //quizButton.style.backgroundColor = 'lilac';
//}
//quizButton.onclick = turnQuizButtonLilac;

var startScreen = document.querySelector('#start-screen');
var startButton = document.querySelector('#start');

var startMode = 'unhide';

startButton.onclick = function() {
    startMode = 'hide';
    startScreen.setAttribute('click', 'hide');
};


var questions = document.querySelector('#questions');
var choices = document.querySelector('#choices');

var mode = 'hide';

choices.addEventListener('click', function(){
    if (mode === 'hide') {
        mode = 'unhide';
        questions.setAttribute('class', 'unhide');
    } else {
        mode = 'hide';
        questions.setAttribute('class', 'hide');
    }
});

