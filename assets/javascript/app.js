$(document).ready(function() {

var correct;
var incorrect;
var unanswered;
var questionNum = 0;
var time = 30;
var countdown;
var trivia = { //maybe make the correct answer the 5th "answer" and if chosen = index[4] then correct
	"What is Sen's real name in Spirited Away?": ["Rika","Chihiro","Ana","Kumiko"], 
	"In which movie can you ride the Cat Bus?": ["Howl's Moving Castle","Spirited Away","Castle in the Sky","My Neighbor Totoro"],
	"question 3": ["a3","b3","c3","d3"]
};

// use API from slack channel!!!!!!!!1


var questions = Object.keys(trivia);

var rightAnswer = ["Chihiro","My Neighbor Totoro","c2"]; //maybe true false for each question?

function initialize() {
	questionNum = 0;
	score = 0;
	correct = 0;
	incorrect = 0;
	time = 30;
};

function clearButtons() {
	$("#options").html(""); //clears answers div... replace with gif and correct answer and stuff
}

function newQuestion() {
	//maybe when appending answers, give attribute of true or false
	// newTime();
	var q = questions[questionNum];
	$("#question").text(q);
	clearButtons();
	for (var i = 0; i < questions.length + 1; i++) {
		$("#options").append("<button class='choice' id='choice"+i+"' />");
		$("#choice"+i).text(trivia[q][i]);
		console.log(trivia[q][i]);
	};
	questionNum++;
	console.log(questionNum);
};

// function newQuestion() {
// 	newTime();
// 	for (var i = 0; i < questions.length + 1; i++) {
// 		var btn = $("<button>");
// 		btn.addClass("choice");
// 		btn.addId("choice"+i);// 
// 		btn.attr("answerVal", trivia[q][i]);
// 		btn.text(trivia[q][i]);
// 	    $("#choice"+i).append(btn);
// 	};
// 	questionNum++;
// 	console.log(questionNum);
// };


		//do this when creating buttons to be able to check value of button (to compare to correct)
         //https://stackoverflow.com/questions/487056/retrieve-button-value-with-jquery 

      //     function alertMovieName() {

      //   // YOUR CODE GOES HERE!!!
      //   console.log($(this).attr("data-name"));
      // }



function startTime() { //????????????
	countdown = setInterval()
	$("#time").html("<p>Time remaining: 30 seconds</p>") //ughhhh
};

function answerPage() {
	// if answer right/wrong, display Nope or Correct or Out of Time
	// if correct answer, correct++
	// display congrats/fail screen with right answer
	// if (time == 0) {
	// 	unanswered++;
	// }
	setTimeout(newQuestion, 5000); //doesn't show next question until 5 secs
};

function endGame() {
	//show correct, incorrect, and unanswered
	//clear answers div
	//start over button
};

$("#startBtn").on("click", function() {
	newQuestion();
});

$(".choice").on("click", function() {
	// answerPage();
	// if (questionNum >= questions.length) {
	// 	endGame();
	// }
	console.log("choice click works!");
}); // close button click



}); // document ready 

