'use strict';

var userName = prompt('what was your name again?')
alert('Thanks ' + userName + ' lets start the quiz!')

var finalScore = 0;

var questionOne = prompt('Yes or No, the bagpipes are my favorite instrument to play')
// console.log(questionOne, 'test');
if (questionOne.toLowerCase() === 'yes'){
  alert('THAT IS CORRECT!!!')
  finalScore++
  document.write('<li>For question one you answered ' + questionOne + '. THAT IS CORRECT!!!! the bagpipes are my favorite instrument to play</li>')
} else {
  alert('I\'m sorry, that is incorrect')
  document.write('<li>For question one you answered ' + questionOne + '. that was incorrect, my favorite instrument to play is the bagpipes</li>')
}
var questionTwo = prompt('Yes or No, i Play in the band The Kansas City Shit Kickers')
// console.log(questionTwo, 'test');
if (questionTwo.toLowerCase() === 'no'){
  alert('THAT IS CORRECT!!!')
  finalScore++
  document.write('<li>For question one you answered ' + questionTwo + '. THAT IS CORRECT!!!! i play in the band Deathbreaker</li>')
}else {
  alert('I\'m sorry, that is incorrect')
  document.write('<li>For question one you answered ' + questionTwo + '. that was incorrect, i play in the band Deathbreaker</li>')
}
var questionThree = prompt('Yes or No, my band is currently signed to Solid State Records')
// console.log(questionThree, 'test');
if (questionThree.toLowerCase() === 'no'){
  alert('THAT IS CORRECT!!!')
  finalScore++
  document.write('<li>For question one you answered ' + questionThree + '. THAT IS CORRECT!!!! my band is not signed to Solid State Records, we are signed to Facedown Records</li>')
}else {
  alert('I\'m sorry, that is incorrect')
  document.write('<li>For question one you answered ' + questionThree + '. that was incorrect, my band is not signed to Solid State Records, we are signed to Facedown Records</li>')
}
var questionFour = prompt('yes or No, I have been touring with my band for 5 years?')
// console.log(questionFour, 'test');
if (questionFour.toLowerCase() === 'yes'){
  alert('THAT IS CORRECT!!!')
  finalScore++
  document.write('<li>For question one you answered ' + questionFour + '. THAT IS CORRECT!!!! I have been touring with my band for five years</li>')
}else {
  alert('I\'m sorry, that is incorrect')
  document.write('<li>For question one you answered ' + questionFour + '. that was incorrect, I have been touring with my band for five years</li>')
}
var questionFive = prompt('Yes or No, the name of the album my band just released is called \'Isolate\'')
// console.log(questionFive, 'test');
if (questionFive.toLowerCase() === 'yes'){
  alert('THAT IS CORRECT!!!')
  finalScore++
  document.write('<li>For question one you answered ' + questionFive + '. THAT IS CORRECT!!!! the name of the album my band just released is <i>Isolate</i></li>')
}else {
  alert('I\'m sorry, that is incorrect')
  document.write('<li>For question one you answered ' + questionFive + '. that was incorrect, the name of the album my band just released is <i>Isolate</i></li>')
}

// loops
var correctAnswer = '5';
var i = 0


while(i < 4){
  var userAnswer = prompt('The Legend of Dragoon was placed at what number on my top 10 favorite Video Games list?');
   if(userAnswer === correctAnswer){
      alert('DING DING DING, THAT IS CORRECT!!!');
      finalScore++
      document.write('<li>For question six you answered ' + userAnswer + '. THAT IS CORRECT!!!!</li>')
      break;
  } if(i === 3 && userAnswer !== correctAnswer){
       alert('Im sorry, the correct answer is number 5');
       document.write('<li>For question six you answered ' + userAnswer + '. that was incorrect</li>');
       break;
    } if (userAnswer < correctAnswer){
            alert('Incorrect, too low, try again');
    } if (userAnswer > correctAnswer){
            alert('Incorrect, too high, try again');
    } i++;
 }


// // Nested Loop

// setting the array
var favGame = ['the legend of zelda: ocorina of time', 'chrono trigger', 'the legend of zelda: link\'s awakening', 'final fantasy 7', 'lunar: silver star story complete', 'lunar 2: eternal blue complete', 'the legend of zelda: breath of the wild', 'the legend of zelda']


var count = 0;

// open while loop
while(count < 6){

var questionSeven = prompt('Other than the Legend of Dragoon, can you name another game from my top 10 list?');


for(var i = 0; i < favGame.length; i++){    // open nested for loop inside while loop
  if(questionSeven.toLowerCase() === favGame[i]){  // checking the user answer to all possible answers in array
    alert('CORRECT!!!!!!!')
    finalScore++
    document.write('<li>For question seven you answered ' + questionSeven + '. THAT IS CORRECT!!!!</li>');
    count = 6 // if the answer is correct the count is set to 6 to get out of the while loop
    break;    // and the break gets us out of the for loop
  } 
  if(count === 5 && questionSeven.toLowerCase() !== favGame[i]){ // if the answer is incorrect on last try, print to screen
    alert('sorry no more tries');
    document.write('<li>For question seven you answered ' + questionSeven + '. that was Incorrect, refer to home page to see top 10 list of games.</li>')
    count = 6
    break;
  }
 }

 if(count !== 6){            // if the answer is incorrect
   alert('sorry, Try again');
  }
 count++                  // adding to the count for the while loop
 }
alert('Thanks for taking the time to learn about me ' + userName + '. Send me a link to a page where i can learn about you! Lets see how you did on the Quiz')
