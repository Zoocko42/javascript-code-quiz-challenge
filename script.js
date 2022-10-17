//MAJOR VARIABLE DECLARATIONS
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
//These are the Question Two elements.
var questTwoTitle = document.createElement("h1");
var questTwoButtons = document.createElement("div");
var q2Opt1 = document.createElement("button");
var q2Opt2 = document.createElement("button");
var q2Opt3 = document.createElement("button");
var q2Opt4 = document.createElement("button");
// These are the Question Three elements.
var questThreeTitle = document.createElement("h1");
var questThreeButtons = document.createElement("div");
var q3Opt1 = document.createElement("button");
var q3Opt2 = document.createElement("button");
var q3Opt3 = document.createElement("button");
var q3Opt4 = document.createElement("button");
// These are the Question Four elements.
var questFourTitle = document.createElement("h1");
var questFourButtons = document.createElement("div");
var q4Opt1 = document.createElement("button");
var q4Opt2 = document.createElement("button");
var q4Opt3 = document.createElement("button");
var q4Opt4 = document.createElement("button");
// These are the Question Five elements.
var questFiveTitle = document.createElement("h1");
var questFiveButtons = document.createElement("div");
var q5Opt1 = document.createElement("button");
var q5Opt2 = document.createElement("button");
var q5Opt3 = document.createElement("button");
var q5Opt4 = document.createElement("button");
// These are elements/variables of the score.
var rightAnswers = 0;
var scoreTitle = document.createElement("h1");
var scoreReadout = document.createElement("p");
var scoreInteract = document.createElement("div");
var initialsLabel = document.createElement("label");
var initialsEntry = document.createElement("input");
var submitButton = document.createElement("button");
// These are the High Score Page elements.
var quizScore = (rightAnswers * 20);
var playerInit = "";
var playerScore = {};
var highScoreAmount = 10;
var highScoresList = []
var hiScoreTitle = document.createElement("h1");
var hiScoreList = document.createElement("ol");
var goBackBtn = document.createElement("button");
var clearScoresBtn = document.createElement("button");


//TEXT CONTENT
// Header text content
highScoreLink.textContent = "View Highscores";
timer.textContent = "Time: 0";
// Landing Page text content
landTitle.textContent = "Coding Quiz Challenge!";
landExplanation.textContent = "Welcome to the coding quiz! You will be asked to answer a series of questions within a set time limit. But watch out! If you answer a question incorrectly, you will incur a ten-second penalty.";
startButton.textContent = "Start!"
// Question one text content
questOneTitle.textContent = "Which of the following is not a conditional statement?"
q1Opt1.textContent = "if"
q1Opt2.textContent = "unless" //Correct
q1Opt3.textContent = "else"
q1Opt4.textContent = "else if"
// Question two text content
questTwoTitle.textContent = "What is the DOM?"
q2Opt1.textContent = "Data Object Model"
q2Opt2.textContent = "Document Organization Map"
q2Opt3.textContent = "Data Overview Model"
q2Opt4.textContent = "Document Object Model" //Correct
// Question three text content
questThreeTitle.textContent = "In what format is data saved to local storage?"
q3Opt1.textContent = "JSON"
q3Opt2.textContent = "Boolean"
q3Opt3.textContent = "String" //Correct
q3Opt4.textContent = "Module"
// Question four text content
questFourTitle.textContent = "Which of the following is not a Javascript method?"
q4Opt1.textContent = ".cut" //Correct
q4Opt2.textContent = ".sort"
q4Opt3.textContent = ".slice"
q4Opt4.textContent = ".replace"
// Question five text content
questFiveTitle.textContent = "Which of these are JavaScript arithmetic operators?"
q5Opt1.textContent = "++" //Correct
q5Opt2.textContent = "And"
q5Opt3.textContent = "+-"
q5Opt4.textContent = "All of the above."
// Score page text content
scoreTitle.textContent = "Quiz complete!"
scoreReadout.textContent = "Your score this time is: " + rightAnswers + "!"
initialsLabel.textContent = "Please enter your initials below!"
submitButton.textContent = "Submit!"
// High Score page 
hiScoreTitle.textContent = "Highscores"
goBackBtn.textContent = "Go Back"
clearScoresBtn.textContent = "Clear Highscores"

//APPENDS
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
//Appends for question two.
body.appendChild(questTwoBox);
questTwoBox.appendChild(questTwoTitle);
questTwoBox.appendChild(questTwoButtons);
questTwoButtons.appendChild(q2Opt1);
questTwoButtons.appendChild(q2Opt2);
questTwoButtons.appendChild(q2Opt3);
questTwoButtons.appendChild(q2Opt4);
//Appends for question three.
body.appendChild(questThreeBox);
questThreeBox.appendChild(questThreeTitle);
questThreeBox.appendChild(questThreeButtons);
questThreeButtons.appendChild(q3Opt1);
questThreeButtons.appendChild(q3Opt2);
questThreeButtons.appendChild(q3Opt3);
questThreeButtons.appendChild(q3Opt4);
//Appends for question four.
body.appendChild(questFourBox);
questFourBox.appendChild(questFourTitle);
questFourBox.appendChild(questFourButtons);
questFourButtons.appendChild(q4Opt1);
questFourButtons.appendChild(q4Opt2);
questFourButtons.appendChild(q4Opt3);
questFourButtons.appendChild(q4Opt4);
//Appends for question five.
body.appendChild(questFiveBox);
questFiveBox.appendChild(questFiveTitle);
questFiveBox.appendChild(questFiveButtons);
questFiveButtons.appendChild(q5Opt1);
questFiveButtons.appendChild(q5Opt2);
questFiveButtons.appendChild(q5Opt3);
questFiveButtons.appendChild(q5Opt4);
//Appends for Score page.
body.appendChild(scoreBox);
scoreBox.appendChild(scoreTitle);
scoreBox.appendChild(scoreReadout);
scoreBox.appendChild(scoreInteract);
scoreInteract.appendChild(initialsLabel);
scoreInteract.appendChild(initialsEntry);
scoreInteract.appendChild(submitButton);
//Appends for High Score page.
body.appendChild(hiScoresBox);
hiScoresBox.appendChild(hiScoreTitle);
hiScoresBox.appendChild(hiScoreList);
hiScoresBox.appendChild(goBackBtn);
hiScoresBox.appendChild(clearScoresBtn);


//ATTRIBUTE SETTINGS
// Styling for the header.
quizHeader.setAttribute("style", "display: flex; justify-content: space-between;");
timer.setAttribute("style", "margin-top: 0px;");
highScoreLink.setAttribute("href", "#hiScoresBox")
// Styling for the landing page.
landPageBox.setAttribute("id", "landPage");
// landPageBox.setAttribute("style", "display: none");
landTitle.setAttribute("style", "text-align: center;");
landExplanation.setAttribute("style", "text-align: center; font-size: 19px; width: 50%; margin-left: 25%;");
startButton.setAttribute("style", "position: absolute; left: 48%; color: white; background-color: purple");
// Styling for question one.
questOneBox.setAttribute("id", "questOne");
questOneBox.setAttribute("style", "display: none");
questOneTitle.setAttribute("style", "text-align: center;");
questOneButtons.setAttribute("style", "display: flex; position: absolute; flex-direction: column; left: 36%; width: 25%")
q1Opt1.setAttribute("style", "color: white; background-color: purple");
q1Opt2.setAttribute("style", "color: white; background-color: purple");
q1Opt3.setAttribute("style", "color: white; background-color: purple");
q1Opt4.setAttribute("style", "color: white; background-color: purple");
// Styling for question two.
questTwoBox.setAttribute("id", "questTwo");
questTwoBox.setAttribute("style", "display: none");
questTwoTitle.setAttribute("style", "text-align: center;");
questTwoButtons.setAttribute("style", "display: flex; position: absolute; flex-direction: column; left: 36%; width: 25%")
q2Opt1.setAttribute("style", "color: white; background-color: purple");
q2Opt2.setAttribute("style", "color: white; background-color: purple");
q2Opt3.setAttribute("style", "color: white; background-color: purple");
q2Opt4.setAttribute("style", "color: white; background-color: purple");
//Styling for question three.
questThreeBox.setAttribute("id", "questThree");
questThreeBox.setAttribute("style", "display: none");
questThreeTitle.setAttribute("style", "text-align: center;");
questThreeButtons.setAttribute("style", "display: flex; position: absolute; flex-direction: column; left: 36%; width: 25%")
q3Opt1.setAttribute("style", "color: white; background-color: purple");
q3Opt2.setAttribute("style", "color: white; background-color: purple");
q3Opt3.setAttribute("style", "color: white; background-color: purple");
q3Opt4.setAttribute("style", "color: white; background-color: purple");
//Styling for question four.
questFourBox.setAttribute("id", "questFour");
questFourBox.setAttribute("style", "display: none");
questFourTitle.setAttribute("style", "text-align: center;");
questFourButtons.setAttribute("style", "display: flex; position: absolute; flex-direction: column; left: 36%; width: 25%")
q4Opt1.setAttribute("style", "color: white; background-color: purple");
q4Opt2.setAttribute("style", "color: white; background-color: purple");
q4Opt3.setAttribute("style", "color: white; background-color: purple");
q4Opt4.setAttribute("style", "color: white; background-color: purple");
//Styling for question five.
questFiveBox.setAttribute("id", "questFive");
questFiveBox.setAttribute("style", "display: none");
questFiveTitle.setAttribute("style", "text-align: center;");
questFiveButtons.setAttribute("style", "display: flex; position: absolute; flex-direction: column; left: 36%; width: 25%")
q5Opt1.setAttribute("style", "color: white; background-color: purple");
q5Opt2.setAttribute("style", "color: white; background-color: purple");
q5Opt3.setAttribute("style", "color: white; background-color: purple");
q5Opt4.setAttribute("style", "color: white; background-color: purple");
// Style for Score page.
scoreBox.setAttribute("id", "scoreBox");
scoreBox.setAttribute("style", "display: none; text-align: center;");
scoreTitle.setAttribute("style", "text-align: center;")
scoreReadout.setAttribute("style", "text-align: center; font-size: 19px;");
scoreInteract.setAttribute("style", "display: flex; position: absolute; flex-direction: column; left: 25%; width: 50%");
initialsLabel.setAttribute("for", "initialsEntry");
initialsLabel.setAttribute("style", "width: 100%; display: flex; justify-content: center; font-size: 19px;");
initialsEntry.setAttribute("id", "initialsEntry");
initialsEntry.setAttribute("name", "initialsEntry");
initialsEntry.setAttribute("style", "width: 65%; display: flex; position: relative; left: 15%; justify-content: center; margin: 2%;");
submitButton.setAttribute("style", "width: 65%; color: white; background-color: purple; display: flex; position: relative; left: 15.5%; justify-content: center; margin: 2%;");
// Style for High Scores Page.
hiScoresBox.setAttribute("id", "hiScoresBox");
hiScoresBox.setAttribute("style", "display: none; text-align: center;");
hiScoreTitle.setAttribute("style", "text-align: center;");
// hiScoreList.setAttribute("style", "");
goBackBtn.setAttribute("style", "width: 25%; color: white; background-color: purple; display: flex; position: relative; left: 35%; justify-content: center; margin: 2%;")
clearScoresBtn.setAttribute("style", "width: 25%; color: white; background-color: purple; display: flex; position: relative; left: 35%; justify-content: center; margin: 2%;");

// FUNCTIONS
//This function controls the countdown clock.
function countdown() {
    timeRem = 75
    var timeCount = setInterval(function() {;
        timeRem--;
        timer.textContent = "Time: " + timeRem;
        if (timeRem === 0) {
            clearInterval(timeCount);
            landPageBox.style.display = "none";
            questOneBox.style.display = "none";
            questTwoBox.style.display = "none";
            questThreeBox.style.display = "none";
            questFourBox.style.display = "none";
            questFiveBox.style.display = "none";
            hiScoresBox.style.display = "none";
            scoreBox.style.display = "block";
            // This ensures that when the time reaches zero whatever score was reached is logged.
            quizScore = (rightAnswers * 20);
            scoreReadout.textContent = "Your score this time is: " + quizScore + "%!"   
        }
    }, 1000);
}

    //This function saves the scores to storage.
    function saveScoresToStorage (score) {
        highScoresList = JSON.parse(localStorage.getItem("scores")) || [];
        if ((score.score != undefined)) {
            highScoresList.push(score);
        }
        localStorage.setItem("scores", JSON.stringify(highScoresList));
    }

function makeScoreList (root, arr) {
    var listItem;
    root.appendChild(hiScoreList);
    arr.forEach(function(item) {
        if (Array.isArray(item)) {
            makeScoreList(listItem, item);
            return;
        };
        listItem = document.createElement('li');
        listItem.textContent= `Player: ${item.initials} \n Score: ${item.score}`;
        listItem.setAttribute("style", "text-align: center; font-size: 19px;");
        hiScoreList.appendChild(listItem);
    });
};

//This moves to the high scores page when players click on the "View Highscores," link.
//Known error; if the quiz is initiated jumps to the "Score," page instead. Clicking link from Score page should go to the HighScores page.
highScoreLink.onclick = function (event) {
    event.preventDefault();
    if ((hiScoresBox.style.display == "none") && (timeRem == 0)) {
    landPageBox.style.display = "none";
    questOneBox.style.display = "none";
    questTwoBox.style.display = "none";
    questThreeBox.style.display = "none"; 
    questFourBox.style.display = "none";
    questFiveBox.style.display = "none";
    scoreBox.style.display = "none";
    hiScoresBox.style.display = "block";
    timeRem = 1;
    saveScoresToStorage (playerScore);
    highScoresList.sort((a,b) => b.score - a.score);
    console.log(highScoresList);
    makeScoreList(hiScoresBox, highScoresList);
    } else {
        location.reload();
    }
}



// This initiates the quiz.
startButton.onclick = function (event) {
    event.preventDefault();
    landPageBox.style.display = "none";
    questOneBox.style.display = "block";
    countdown();
}
// This command activates when the *correct* option is selected for Question One.
q1Opt2.onclick = function (event) {
    event.preventDefault();
    questOneBox.style.display = "none";
    questTwoBox.style.display = "block";
    rightAnswers++;
    console.log(rightAnswers);
}

//The following commands activate when the *wrong* option is selected for Question One.
q1Opt1.onclick = function (event) {
    event.preventDefault();
    questOneBox.style.display = "none";
    questTwoBox.style.display = "block";
    timeRem = timeRem - 10;
    console.log(rightAnswers);
}
q1Opt3.onclick = function (event) {
    event.preventDefault();
    questOneBox.style.display = "none";
    questTwoBox.style.display = "block";
    timeRem = timeRem - 10;
    console.log(rightAnswers);
}

q1Opt4.onclick = function (event) {
    event.preventDefault();
    questOneBox.style.display = "none";
    questTwoBox.style.display = "block";
    timeRem = timeRem - 10;
    console.log(rightAnswers);
}

// This command activates when the *correct* option is selected for Question Two.
q2Opt4.onclick = function (event) {
    event.preventDefault();
    questTwoBox.style.display = "none";
    questThreeBox.style.display = "block";
    rightAnswers++;
    console.log(rightAnswers);
}

// These commands activate when the *wrong* option is selected for Question Two.
q2Opt1.onclick = function (event) {
    event.preventDefault();
    questTwoBox.style.display = "none";
    questThreeBox.style.display = "block";
    timeRem = timeRem - 10;
    console.log(rightAnswers);
}
q2Opt2.onclick = function (event) {
    event.preventDefault();
    questTwoBox.style.display = "none";
    questThreeBox.style.display = "block";
    timeRem = timeRem - 10;
    console.log(rightAnswers);
}
q2Opt3.onclick = function (event) {
    event.preventDefault();
    questTwoBox.style.display = "none";
    questThreeBox.style.display = "block";
    timeRem = timeRem - 10;
    console.log(rightAnswers);
}

// This command activates when the correct option is selected for Question Three.
q3Opt3.onclick = function (event) {
    event.preventDefault();
    questThreeBox.style.display = "none";
    questFourBox.style.display = "block";
    rightAnswers++;
    console.log(rightAnswers);
}

// These commands activate when the *wrong* options are selected for Question Three.
q3Opt1.onclick = function (event) {
    event.preventDefault();
    questThreeBox.style.display = "none";
    questFourBox.style.display = "block";
    timeRem = timeRem - 10;
    console.log(rightAnswers);
}
q3Opt2.onclick = function (event) {
    event.preventDefault();
    questThreeBox.style.display = "none";
    questFourBox.style.display = "block";
    timeRem = timeRem - 10;
    console.log(rightAnswers);
}
q3Opt4.onclick = function (event) {
    event.preventDefault();
    questThreeBox.style.display = "none";
    questFourBox.style.display = "block";
    timeRem = timeRem - 10;
    console.log(rightAnswers);
}

// This command activates when the correct option is selected for Question Four.
q4Opt1.onclick = function (event) {
    event.preventDefault();
    questFourBox.style.display = "none";
    questFiveBox.style.display = "block";
    rightAnswers++;
    console.log(rightAnswers);
}

// These commands activate when the *wrong* option is selected for Question Four.
q4Opt2.onclick = function (event) {
    event.preventDefault();
    questFourBox.style.display = "none";
    questFiveBox.style.display = "block";
    timeRem = timeRem - 10;
    console.log(rightAnswers);
}
q4Opt3.onclick = function (event) {
    event.preventDefault();
    questFourBox.style.display = "none";
    questFiveBox.style.display = "block";
    timeRem = timeRem - 10;
    console.log(rightAnswers);
}
q4Opt4.onclick = function (event) {
    event.preventDefault();
    questFourBox.style.display = "none";
    questFiveBox.style.display = "block";
    timeRem = timeRem - 10;
    console.log(rightAnswers);
}
// This command activates when the correct option is selected for Question Five.
q5Opt1.onclick = function (event) {
    event.preventDefault();
    timeRem = 1;
    questFiveBox.style.display = "none";
    scoreBox.style.display = "block";
    rightAnswers++;
    quizScore = (rightAnswers * 20);
    console.log(rightAnswers);
    scoreReadout.textContent = "Your score this time is: " + quizScore + "%!"
}

// These commands activate when the *wrong* option is selected for Question Five.
q5Opt2.onclick = function (event) {
    event.preventDefault();
    timeRem = 1;
    questFiveBox.style.display = "none";
    scoreBox.style.display = "block";
    quizScore = (rightAnswers * 20);
    console.log(rightAnswers);
    scoreReadout.textContent = "Your score this time is: " + quizScore + "%!"
}
q5Opt3.onclick = function (event) {
    event.preventDefault();
    timeRem = 1;
    questFiveBox.style.display = "none";
    scoreBox.style.display = "block";
    quizScore = (rightAnswers * 20);
    console.log(rightAnswers);
    scoreReadout.textContent = "Your score this time is: " + quizScore + "%!"
}
q5Opt4.onclick = function (event) {
    event.preventDefault();
    timeRem = 1;
    questFiveBox.style.display = "none";
    scoreBox.style.display = "block";
    console.log(rightAnswers);
    scoreReadout.textContent = "Your score this time is: " + quizScore + "%!"
}
// This controls the actions of what happens when the the player hits, "Submit" on the score page.
submitButton.onclick = function (event) {
    event.preventDefault();
    //Moves to hi Scores page
    scoreBox.style.display = "none";
    hiScoresBox.style.display = "block";
    // Sets Initials
    if (initialsEntry.value != "") {
    playerInit = initialsEntry.value;
    } else {
        playerInit = "Anon"
    }
    playerScore = {
        initials: playerInit,
        score: quizScore
    }
    saveScoresToStorage (playerScore);
    highScoresList.sort((a,b) => b.score - a.score);
    console.log(highScoresList);

    makeScoreList(hiScoresBox, highScoresList);
}


// This sends the user back to the first page when they hit, "Go Back".
goBackBtn.onclick = function (event) {
    event.preventDefault();
    location.reload();
}

// This will clear all high scores.
clearScoresBtn.onclick = function (event) {
    event.preventDefault();
    localStorage.clear();
    location.reload();
}
