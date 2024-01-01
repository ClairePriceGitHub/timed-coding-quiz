var initials = document.getElementById('initials').value;
var highScoresLi = document.createElement('li');

function logHighScore() {
    highScoresLi.id = 'highScoresLi';
    highScoresLi.innerHTML = '';
    document.getElementById('highscores').appendChild('highScoresLi');
    highScoresLi.innerHTML = initials;
}