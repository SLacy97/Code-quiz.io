function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show options
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
}

// create questions
var questions = [
  new Question(
    "what is javascript",
    [
      "A Shakespearan script",
      "A programming language with object-oriented capabilities that allows you to build interactivity into static HTML pages",
      "C++",
    ],
    "A programming language with object-oriented capabilities that allows you to build interactivity into static HTML pages"
  ),
  new Question(
    "Which data type is NOT supported by JavaScript?",
    ["null", "JQuery", "bootstrap"],
    "bootstrap"
  ),
  new Question(
    "What are the features of JavaScript?",
    [
      "It is complementary to and integrated with Java",
      "It aids in the decoration process for Css",
      "It helps with HTML Processing ",
    ],
    "It is complementary to and integrated with Java"
  ),
  new Question(
    "True or False: JavaScript is a case-sensitive language.",
    ["True", "False"],
    "True"
  ),
  new Question(
    "What is Closure in regard to JavaScript?",
    [
      "Created whenever a variable that is defined outside the current scope is accessed from within some inner scope.",
      "A procedure for ending a debate and taking a vote; cloture.",
    ],
    "Created whenever a variable that is defined outside the current scope is accessed from within some inner scope."
  ),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
