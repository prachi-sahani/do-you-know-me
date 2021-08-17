//make a game
var readlineSync = require('readline-sync');

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

function welcome(){
  var userName = readlineSync.question("What's your name? ")
  console.log(`Welcome ${userName} to 'Do you know Prachi?'`);
}

function play(question, answer){
    var userAnswer = readlineSync.question(question);
    if(userAnswer === answer){
        console.log('Right!');
    }
    else{
        console.log('Wrong!')
    }
}

function game(){
  for(var i=0; i<questionAnswerArray.length;i++){
      play(questionAnswerArray[i].question,questionAnswerArray[i].answer)
  }
}

welcome();
game();