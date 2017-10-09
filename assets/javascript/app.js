$(document).ready(function() {

var correct;
var incorrect;
var unanswered;
var questionNum = 0;
var time = 30;
var trivia = {
	"question 1": ["a1","b1","c1","d1"], 
	"question 2": ["a2","b2","c2","d2"],
	"question 3": ["a3","b3","c3","d3"]
};

var questions = Object.keys(trivia);

var correct = ["a1","b3","c2"]; //maybe true false for each question?

function initialize() {
	questionNum = 0;
	score = 0;
	newQuestion();
};

function newQuestion() {
	//test purposes -- real version should append into answers div
	//maybe when appending answers, give attribute of true or false
	//don't forget to give .choice and #choice0 class/id
	var q = questions[questionNum];
	$("#question").text(q);
	for (var i = 0; i < questions.length + 1; i++)
		$("#choice"+i).text(trivia[q][i]);
	questionNum++;
	console.log(questionNum);
};

function endGame() {
	//show correct, incorrect, and unanswered
	//clear answers div
	//start over button
};

$("button").on("click", function() {
	newQuestion();
	// if correct answer, correct++
	// display congrats/fail screen with right answer
	if (questionNum >= questions.length) {
		endGame();
	}
}); // choice click


function test() {
	$("#options").html(""); //clears answers div... replace with gif and correct answer and stuff
}



}); // document ready 


// start button
// blank div for answers which get appended when game starts (with class attribute .choice and classes #choice1 etc)
// when answer is clicked/end game, clear answers div

