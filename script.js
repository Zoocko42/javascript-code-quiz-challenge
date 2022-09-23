var body = document.body;
// These variables are visible on all pages of the quiz.
var quizHeader = document.createElement("header");
var highScoreLink = document.createElement("a");
var timer = document.createElement("p");
var timeRem = 0;
// These div variables are used to create the different "pages" of the quiz.
var landPageBox = document.createElement("div");
var questOneBox = document.createElement("div");
var questTwoBox = document.createElement("div");
var questThreeBox = document.createElement("div");
var questFourBox = document.createElement("div");
var questFiveBox = document.createElement("div");
var scoreBox = document.createElement("div");
var hiScoresBox = document.createElement("div");
// These are the landing page elements.
var landTitle = document.createElement("h1");
var landExplanation = document.createElement("p");
var startButton = document.createElement("button");
// These are the Question One elements
var questOneTitle = document.createElement("h1");
var questOneButtons = document.createElement("div");
var q1Opt1 = document.createElement("button");
var q1Opt2 = document.createElement("button");
var q1Opt3 = document.createElement("button");
var q1Opt4 = document.createElement("button");

// Header text conent
highScoreLink.textContent = "View Highscores";
timer.textContent = "Time: 0";
// Landing Page text content
landTitle.textContent = "Coding Quiz Challenge!";
landExplanation.textContent = "Welcome to the coding quiz! You will be asked to answer a series of questions within a set time limit. But watch out! If you answer a question incorrectly, you will incur a ten-second penalty.";
startButton.textContent = "Start!"
// Question one text content
questOneTitle.textContent = "Which of the following is not a conditional statement?"
q1Opt1.textContent = "if"
q1Opt2.textContent = "unless"
q1Opt3.textContent = "else"
q1Opt4.textContent = "else if"


// Appending header to the document.
body.appendChild(quizHeader);
quizHeader.appendChild(highScoreLink);
quizHeader.appendChild(timer);
// Appends for the landing page.
body.appendChild(landPageBox);
landPageBox.appendChild(landTitle);
landPageBox.appendChild(landExplanation);
landPageBox.appendChild(startButton);
// Appends for question one.
body.appendChild(questOneBox);
questOneBox.appendChild(questOneTitle);
questOneBox.appendChild(questOneButtons);
questOneButtons.appendChild(q1Opt1);
questOneButtons.appendChild(q1Opt2);
questOneButtons.appendChild(q1Opt3);
questOneButtons.appendChild(q1Opt4);


// Styling for the header.
quizHeader.setAttribute("style", "display: flex; justify-content: space-between;");
timer.setAttribute("style", "margin-top: 0px;");
// Styling for the landing page.
landPageBox.setAttribute("id", "landPage");
// landPageBox.setAttribute("style", "display: none");
landTitle.setAttribute("style", "text-align: center;");
landExplanation.setAttribute("style", "text-align: center;");
startButton.setAttribute("style", "position: absolute; left: 47%");
// Styling for question one.
questOneBox.setAttribute("id", "questOne");
questOneBox.setAttribute("style", "display: none");
questOneTitle.setAttribute("style", "text-align: center;");
questOneButtons.setAttribute("style", "display: flex; position: absolute; flex-direction: column; left: 40%; width: 25%")
q1Opt1.setAttribute("style", "color: white; background-color: purple");
q1Opt2.setAttribute("style", "color: white; background-color: purple");
q1Opt3.setAttribute("style", "color: white; background-color: purple");
q1Opt4.setAttribute("style", "color: white; background-color: purple");


function countdown() {
    timeRem = 75
    var timeCount = setInterval(function() {;
        timeRem--;
        timer.textContent = "Time: " + timeRem;
        if (timeRem === 0) {
            clearInterval(timeCount);
        }
    }, 1000);
}


// This initiates the quiz.
startButton.onclick = function (event) {
    event.preventDefault();
    landPageBox.style.display = "none";
    questOneBox.style.display = "block";
    countdown();
}

