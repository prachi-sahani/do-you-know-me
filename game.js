//make a game
var readlineSync = require('readline-sync');

var score = 0;
var questionAnswerArray=[{
    question:'Where do I live? ',
    answer:'India'
},
{
    question:'Where do I work? ',
    answer:'Infosys'
},
{
  question:'How much work experience do I have? ',
  answer:'2years'
}];

var highScore =[{
  name: 'Om',
  score:3
  },
  {
    name:'Bindu',
    score:2
}];

function welcome(){
  var userName = readlineSync.question("What's your name? ")
  console.log(`Welcome ${userName} to 'Do you know Prachi?'`);
}

function play(question, answer){
    var userAnswer = readlineSync.question(question);
    if(userAnswer === answer){
        console.log('Right!');
        score++;
    }
    else{
        console.log('Wrong!')
    }
    console.log(`Current Score: ${score}`);
    console.log('-------------------------');
}

function game(){
  for(var i=0; i<questionAnswerArray.length;i++){
      play(questionAnswerArray[i].question,questionAnswerArray[i].answer)
  }
}

function showScore(){
  console.log(`Yayyyyy! You scored: ${score}`);
}

function showAllParticipantsScores(){
  console.log("Check out the high scores, if you should be there ping me and I'll update it");
  for(var i of highScore){
    console.log(`${i.name}: ${i.score}`)
  }
}

welcome();
game();
showScore();
showAllParticipantsScores();