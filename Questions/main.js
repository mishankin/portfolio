var questions = [ 
  {
    question: "What is 50-49?",
    answer: 1
  },
  {
    question: "What is Jackie Chan's favorite drink?",
    answer: "watah"
  },
  {
    question: "What is Jackie Chan's favorite hotel?",
    answer: "hyatt"
  },
  {
    question: "What is the tenth letter in the alphabet?",
    answer: "J"
  },
  {
    question: "What is the sum of 4+6?",
    answer: "10"
  },
  {
    question: "Is this quiz easy?",
    answer: "no"
  },
  {
    question: "How many terms did Barack Obama serve as president?",
    answer: 2
  },
  {
    question: "How many tires are needed for a car to roll?",
    answer: 4
  },
  {
    question: "What is 10-11?",
    answer: -1
  },
  {
    question: "What is the capitol of California?",
    answer: "Sacramento"
  }

]

for(i = 0; i < questions.length; i++) {
  q = questions[i].question
  document.getElementById('question' + [i]).textContent = q
}

function testResults() {
  var correct = 0;
  var incorrect = 0;
  for(i = 0; i < questions.length; i++) { 
    var answer = questions[i].answer
    var guess = document.getElementById('answer' + [i]).value
    var questionSpot = document.getElementById('question' + [i])
    if(answer == guess) {
      questionSpot.className = 'correct'
      correct++
    } else {
      questionSpot.className = 'incorrect'
      incorrect++
    }
  }
  document.getElementById('correct').textContent = correct
  document.getElementById('incorrect').textContent = incorrect
}








