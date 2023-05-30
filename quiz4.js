// Define an array to store the questions and answers
var questions = [];

// Function to add a new question to the array
function submitQuestion() {
  // Get the values of the input fields
  var question = document.getElementById("question").value;
  var option1 = document.getElementById("option1").value;
  var option2 = document.getElementById("option2").value;
  var option3 = document.getElementById("option3").value;
  var option4 = document.getElementById("option4").value;

  // Create an object for the question
  var newQuestion = {
    question: question,
    options: [option1, option2, option3, option4]
  };

  // Add the question to the array
  questions.push(newQuestion);

  // Clear the input fields
  document.getElementById("question").value = "";
  document.getElementById("option1").value = "";
  document.getElementById("option2").value = "";
  document.getElementById("option3").value = "";
  document.getElementById("option4").value = "";
}

// Function to display the quiz questions
function displayQuiz() {
  var quizDiv = document.getElementById("quiz");
  var html = "";
  if (questions.length === 0) {
    html = "<p>Please add questions to the quiz.</p>";
  } else {
    for (var i = 0; i < questions.length; i++) {
      html += "<h4>" + questions[i].question + "</h4>";
      for (var j = 0; j < questions[i].options.length; j++) {
        html += "<label><input type='radio' name='q" + i + "' value='" + questions[i].options[j] + "'> " + questions[i].options[j] + "</label><br>";
      }
    }
    quizDiv.innerHTML = html;
    window.location.href = "quiz3.html"; // Redirect to quiz3.html after displaying the questions
  }
}
