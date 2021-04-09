//Acquiring readline-sync package
var chalk = require('chalk');
var readlineSync = require('readline-sync');
console.log(chalk.bgCyanBright("OK let's start"));
console.log('\n');
var userName = readlineSync.question(
  chalk.bold.cyanBright("What's your good name? ")
);
console.log('\n');
console.log(
  chalk.bold.cyanBright('Ok ' + userName + " let's see how well you know me...")
);
console.log('\n');
var score = 0;
//Playtime function
function playtime(question, answer) {
  var userAnswer = readlineSync.question(chalk.bgMagenta(question));
  console.log('\n');
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgGreenBright('Correct'));
    score = score + 1;
  } else {
    console.log(chalk.bgRedBright('Wrong'));
    console.log(chalk.bold.greenBright('Correct answer is: ' + answer));
  }
  console.log(chalk.yellowBright('Current score: ' + score));
  console.log('\n');
}
//Array of objects
var questions = [
  {
    question: 'Where do I live?',
    answer: 'Bengaluru',
  },
  {
    question: 'Favourite Cricketer?',
    answer: 'Dhoni',
  },
  {
    question: 'What am I passionate about?',
    answer: 'Web Development',
  },
  {
    question: 'My favourite game?',
    answer: 'Cricket',
  },
  {
    question: 'My favourite movie?',
    answer: 'Top Gun',
  },
];
//Loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  playtime(currentQuestion.question, currentQuestion.answer);
}
console.log(
  chalk.bold.greenBright('Your final score:') + chalk.bold.green(score)
);
