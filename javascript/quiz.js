'use strict';

var userName = prompt('what was your name again?');
alert('Thanks ' + userName + ' lets start the quiz!');
var finalScore = 0;

function questionOne() {
  var questionOne = prompt('What is my favorite instruments to play?');
  // console.log(questionOne, 'test');
  if (questionOne.toLowerCase() === 'bagpipes') {
    alert('THAT IS CORRECT!!!');
    finalScore++;
    document.write('<li>For question one you answered ' + questionOne + '. THAT IS CORRECT!!!!</li>');
  } else {
    alert('I\'m sorry, that is incorrect');
    document.write('<li>For question one you answered ' + questionOne + '. that was incorrect</li>');
  }
}
questionOne();

function questionTwo() {
  var questionTwo = prompt('What is name of the band i play in?');
  // console.log(questionTwo, 'test');
  if (questionTwo.toLowerCase() === 'deathbreaker') {
    alert('THAT IS CORRECT!!!');
    finalScore++;
    document.write('<li>For question two you answered ' + questionTwo + '. THAT IS CORRECT!!!!</li>');
  } else {
    alert('I\'m sorry, that is incorrect')
    document.write('<li>For question two you answered ' + questionTwo + '. that was incorrect</li>');
  }
}
questionTwo();


function questionThree(){
  var questionThree = prompt('What label is my band currently signed to?');
  // console.log(questionThree, 'test');
  if (questionThree.toLowerCase() === 'facedown' || questionThree.toLowerCase() === 'facedown records') {
    alert('THAT IS CORRECT!!!');
    finalScore++;
    document.write('<li>For question there you answered ' + questionThree + '. THAT IS CORRECT!!!!</li>');
  } else {
    alert('I\'m sorry, that is incorrect');
    document.write('<li>For question three you answered ' + questionThree + '. that was incorrect</li>');
  }
}
questionThree();

function questionFour() {
  var questionFour = prompt('How many years have we been touring the USA?');
  // console.log(questionFour, 'test');
  if (questionFour.toLowerCase() === '5' || questionFour.toLowerCase() === 'five') {
    alert('THAT IS CORRECT!!!');
    finalScore++;
    document.write('<li>For question four you answered ' + questionFour + '. THAT IS CORRECT!!!!</li>');
  } else {
    alert('I\'m sorry, that is incorrect');
    document.write('<li>For question four you answered ' + questionFour + '. that was incorrect</li>');
  }
}
questionFour();

function questionFive() {
  var questionFive = prompt('What is the name of the record we just released on Facedown Records?');
  // console.log(questionFive, 'test');
  if (questionFive.toLowerCase() === 'isolate') {
    alert('THAT IS CORRECT!!!');
    finalScore++;
    document.write('<li>For question five you answered ' + questionFive + '. THAT IS CORRECT!!!!</li>');
  } else {
    alert('I\'m sorry, that is incorrect');
    document.write('<li>For question five you answered ' + questionFive + '. that was incorrect</li>');
  }
}
questionFive();

// loops

function questionSix(){
  var correctAnswer = '5';
  var i = 0;
  while (i < 4) {
    var userAnswer = prompt('The Legend of Dragoon was placed at what number on my top 10 favorite Video Games list?');
    if (userAnswer === correctAnswer) {
      alert('DING DING DING, THAT IS CORRECT!!!');
      finalScore++;
      document.write('<li>For question six you answered ' + userAnswer + '. THAT IS CORRECT!!!!</li>');
      break;
    } if (i === 3 && userAnswer !== correctAnswer) {
      alert('Im sorry, the correct answer is number 5');
      document.write('<li>For question six you answered ' + userAnswer + '. that was incorrect</li>');
      break;
    } if (userAnswer < correctAnswer) {
      alert('Incorrect, too low, try again');
    } if (userAnswer > correctAnswer) {
      alert('Incorrect, too high, try again');
    } i++;
  }
}
questionSix();

// // Nested Loop

// setting the array

function questionSeven() {
  var favGame = ['the legend of zelda: ocorina of time', 'chroner', 'the legend of zelda: link\'s awakening', 'final fantasy 7', 'lunar: silver star story complete', 'lunar 2: eternal blue complete', 'the legend of zelda: breath of the wild', 'the legend of zelda'];


  var count = 0;

  // open while loop
  while (count < 6) {

    var questionSeven = prompt('Other than the Legend of Dragoon, can you name another game from my top 10 list?');


    for (var j = 0; j < favGame.length; j++) {    // open nested for loop inside while loop
      if (questionSeven.toLowerCase() === favGame[j]) {  // checking the user answer to all possible answers in array
        alert('CORRECT!!!!!!!');
        alert('the rest of the list is ' + favGame )
        finalScore++;
        document.write('<li>For question seven you answered ' + questionSeven + '. THAT IS CORRECT!!!!</li>');
        count = 6; // if the answer is correct the count is set to 6 to get out of the while loop
        break;    // and the break gets us out of the for loop
      }
      if (count === 5 && questionSeven.toLowerCase() !== favGame[j]) { // if the answer is incorrect on last try, print to screen
        // alert('sorry no more tries');
        alert('Sorry, no more tries, the rest of the list is ' + favGame);
        document.write('<li>For question seven you answered ' + questionSeven + '. that was Incorrect, refer to home page to see top 10 list of games.</li>');
        count = 6;
        break;
      }
    }

    if (count !== 6) {            // if the answer is incorrect
      alert('sorry, Try again');
    }
    count++;                  // adding to the count for the while loop
  }
}
questionSeven();


document.write(userName + ", you got " + finalScore + " out of 7 correct.");

alert('Thanks for taking the time to learn about me ' + userName + '. You final score is ' + finalScore + ' out of 7. Send me a link to a page where i can learn about you! Lets see how you did on the Quiz');
