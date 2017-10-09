$(document).ready(function() {

var score = 0;
var questionNum = 1;
var time = 30;
var trivia = {
	questions: ["q1","q2","q3"],
	q1: ["a1","b1","c1","d1"], 
	q2: ["a2","b2","c2","d2"],
	q3: ["a3","b3","c3","d3"]
};

function initialize() {
	questionNum = 1;
	score = 0;
	//insert question1 + answers
};

function newQuestion() {
	$("#question").text(trivia.questions[questionNum]);
	questionNum++;
};

function endGame() {
	//your score is [score] of [questions.length + 1]
};

$(".choice").on("click", function() {
	newQuestion();
	// if correct answer, score++
	if (questionNum > trivia.questions.length) {
		endGame();
	}
});






});