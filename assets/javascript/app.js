$(document).ready(function() {

var correct;
var incorrect;
var unanswered;
var questionNum;
var time;
var countdown;
var trivia = {
	"What is Sen's real name in Spirited Away?": ["Rika","Chihiro","Ana","Kumiko"], 
	"In which movie can you ride the Cat Bus?": ["Howl's Moving Castle","Spirited Away","Castle in the Sky","My Neighbor Totoro"],
	"Haku is a ______ spirit.": ["River","Sun","Fire","Dark"],
	"Which movie is about a witch learning magic in the big city?": ["Kiki's Delivery Service","The Cat Returns","Princess Mononoke","Porco Rosso"],
	"What is Calcifer in Howl's Moving Castle?": ["An Old Woman","A Wizard","A Fire Demon","A Scarecrow"],
	"Princess Mononoke was raised by ______.": ["Her Siblings","Wolves","Demons","Her Stepmother"]
	};
var images = ["assets/images/chihiro.gif","assets/images/totoro.gif","assets/images/haku.gif","assets/images/kiki.gif","assets/images/howl.gif","assets/images/mononoke.gif"];
var questions = Object.keys(trivia);
var rightAnswer = ["Chihiro","My Neighbor Totoro","River","Kiki's Delivery Service","A Fire Demon","Wolves"];

function initialize() {
	questionNum = 0;
	score = 0;
	correct = 0;
	incorrect = 0;
	unanswered = 0;
};

function clearButtons() {
	$("#options").empty(); 
}

function newQuestion() {
	if (questionNum == questions.length) {
		endGame();
	}
	else {	
		startTime();
		var q = questions[questionNum];
		$("#question").text(q);
		clearButtons();
		for (var i = 0; i < 4; i++) {
			$("#options").append("<button class='choice' id='choice"+i+"' />");
			$("#choice"+i).text(trivia[q][i]);
			$("#choice"+i).attr("data-name",trivia[q][i]);
		};
		questionNum++;
	}
};


function startTime() {
	time = 29;
	$("#time").text("Time remaining: 30 seconds");
	countdown = setInterval(function() {
		$("#time").text("Time remaining: " + time + " seconds");

		if (time === 0) {
			clearInterval(countdown);
			unanswered++;
			$("#question").text("Out of time! The correct answer is " + rightAnswer[questionNum-1] + ".");
			answerPage();
		}
		else {
			time--;
		}
	}, 1000);
};

function answerPage() {
	clearButtons();
	$("#options").html("<img src='" + images[questionNum-1] + "'>");
	setTimeout(newQuestion, 4000);
};

function endGame() {
	clearInterval();
	$("#question").text("All done, here's how you did!");
	$("#options").html("<p>Correct: " + correct);
	$("#options").append("<p>Incorrect: " + incorrect);
	$("#options").append("<p>Unanswered: " + unanswered);
	$("#options").append("<br><button id='resetBtn'>Try Again");	
};

function reset() {
	initialize();
	clearButtons();
	newQuestion();
};

$(document).on("click", "#startBtn", function() {
	initialize();
	newQuestion();
});

$(document).on("click", ".choice", function() {
	clearInterval(countdown);
	if ($(this).attr("data-name") === rightAnswer[questionNum-1]) {
		correct++;
		$("#question").text("Correct!");
	}
	else if ($(this).attr("data-name") != rightAnswer[questionNum-1]) {
		incorrect++;
		$("#question").html("Nope! The correct answer is " + rightAnswer[questionNum-1] + ".");
	}
	answerPage();
});

$(document).on("click","#resetBtn", function() {
	reset();
});

}); 

