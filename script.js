var $ = function(id) {
  return document.getElementById(id);
}

var lebowskiVocabWords = ["thejesus", "marmot", "goldbricker", "theeagles",
  "nihilists", "autobahn", "walter", "vietnam", "bowling", "therug", "strumpet",
  "logjammin", "creedence", "bunny", "ringer", "brandt", "markitzero", "pederast",
  "caucasian"];
var randoWord = Math.floor(Math.random()* lebowskiVocabWords.length);
var answer = lebowskiVocabWords[randoWord];
var myLength = answer.length;
var display = [myLength];
var win = myLength;
var letters = answer.split('');
var attemptsLeft = 10;
var output = '';
var userLetter = '';

var setup = function() {
  for (var i = 0; i < answer.length; i++) {
    display[i] = '_ ';
    output = output + display[i];
    console.log(answer);
  }
  document.getElementById('uncommonWord').innerHTML = output;
  output = '';
}

var submit = function() {
  output = '';
  userLetter = $('letter').value;

  $('letter').value = '';
  for (var i = 0; i < answer.length; i++) {
    if (userLetter.toLowerCase() == letters[i]) {
      display[i] = userLetter.toUpperCase();
      win--;
    }
    output = output + display[i] + ' ';
  }
  document.getElementById('uncommonWord').innerHTML = output;
  output = '';
  attemptsLeft--;

  if (win < 1) {
    document.getElementById('guesses').innerHTML = "I like your style, Dude. You win.";
  } else if (attemptsLeft > 0 && attemptsLeft < 11) {
    document.getElementById('guesses').innerHTML = "You have " + attemptsLeft + " guesses left to tie the room together.";
  } else {
    document.getElementById('guesses').innerHTML = "This is not Nam. There are rules. You lose.";

  }
}

window.onload = function() {
  setup();
  $('submit').onclick = submit;
}
