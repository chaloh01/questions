const startButton = document.getElementById('start-button')
const questionContainerElement = document.getElementById
('question-container')
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = getTime();

  var distance = countDownSeconds - now;
    
  var seconds = Math.floor((length % (10 * 6)) / 10);
    
  document.getElementById("demo").innerHTML = + seconds + "s ";
     
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
startButton.addEventListener("click", startGame)
let question = [
{
  question: 'Are you sure you want to',
  choice1: 'yes',
  choice2:  'maybe',
  choice3:  'no',
  choice4:  'other',
  answer:  'yes'
},

{
    question: 'A very useful tool used during development and debugging for bringing content to the debugger is',
    optionA: 'javascript',
    optiomB:  'for loop',
    optionC:  'terminal',
    optionD:  'console.log',
    answer:  'optionB'
  },


  {
    question: 'String values must be enclosed within ____ when being assigned to variables.',
    optionA: 'commas',
    optiomB:  'curly brackets',
    optionC:  'quotes',
    optionD:  'parenthesis',
    answer:  'curly brackets'
  },

  {
    question: 'Arrays in javascript can be used to store ____',
    choice1: 'numbers and strings',
    choice2:  'other arrays',
    choice3:  'booleans',
    choice4:  'all of the above',
    answer:  'all of the above'
  }
]

startGame = () => {
    wuestionCounter = 0;
    score = 0
    availableQuestions = {}
    generateNewQuestion()
}
 