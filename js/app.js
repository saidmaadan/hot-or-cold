$(document).ready(function(){

	/*--- On page load create a new game ---*/
	newGame();
	$('.new').click(function(e){
  e.preventDefault();
  newGame();
  });

  /*--- Display information modal box ---*/
  $(".what").click(function(){
  $(".overlay").fadeIn(1000);
  });

	/*--- Hide information modal box ---*/
  $("a.close").click(function(){
  $(".overlay").fadeOut(1000);
  });
 
  $('#guessButton').click(function(e){
  userNum(e);
  $('#userGuess').focus();
  });
  $(this).keydown(function(e){
  if (e.keyCode === 13){
  userNum();
  }
  });
});


/*--- Declared Variables ---*/
var userGuess;
var guessCount;
var randNum;
var guess;

/*--- Submit User guess---*/
function userNum(e){
e.preventDefault();
userGuess = $('#userGuess').val();
$('#userGuess').val('');
guess = checkUserGuess(userGuess);
if (guess){
guessCount++;
counts(guessCount);
$('ul#guessList').append('<li>' + userGuess + '</li>');
guess = guessResult(Math.abs(randNum - userGuess));
} else {
	return true;
}
}

 /* Create a New Game*/
function newGame(){
randNum = Math.floor((Math.random() * 100) + 1);
guessCount = 0;
counts(guessCount);
$('#guessList').empty();
feedBack('Make your guess!');
// reset();
// focus();
}

  /* User guess result*/
function guessResult(userNum){
	lastGuess = userNum;
if (userNum === randNum){
	feedBack('Congratulations! You Won!!!');
} else if (userNum <= 10){
	feedBack('You are freezing cold');
} else if (userNum <= 25){
	feedBack('You are cold');
} else if (userNum <= 40){
	feedBack('You are getting warm');
} else if (userNum > 40 || userNum <= 60) {
	feedBack('You are getting hot');
}  else {
	feedBack('You are hot');
}
}

/* Check for valid user guess*/
function checkUserGuess(userGuess){
 if (isNaN(userGuess)){
feedBack("Enter numbers only");
return false;

} else if (userGuess > 100 || userGuess < 1) {
feedBack("Not too fast! Enter number between 1 to 100");
	return false;
} else {
	return true;
}
}
  /*--- Declare feedback for #feedback ---*/
function feedBack(feedback){
$('#feedback').text(feedback);
}
function counts(count){
$('#count').text(guessCount);
}
function reset() {
$('#userGuess').val('');
}
function focus() {
$("#userGuess").focus();
}










