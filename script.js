// Main Variable and Element Declarations, yay!
var body = document.body;
var quizHeader = document.createElement("header");
var highScoreLink = document.createElement("a");
var timer = document.createElement("p")
var quizTitle = document.createElement("h1");
var quizExplanation = document.createElement("p");
var startButton = document.createElement("button");

// Text content sections.
highScoreLink.textContent = "View Highscores";
timer.textContent = "Time: 0";
quizTitle.textContent = "Coding Quiz Challenge!";
quizExplanation.textContent = "Welcome to the coding quiz! You will be asked to answer a series of questions within a set time limit. But watch out! If you answer a question incorrectly, you will incur a ten-second penalty.";
startButton.textContent = "Start!"

// Appending to the document.
body.appendChild(quizHeader);
quizHeader.appendChild(highScoreLink);
quizHeader.appendChild(timer);
body.appendChild(quizTitle);
body.appendChild(quizExplanation);
body.appendChild(startButton);
