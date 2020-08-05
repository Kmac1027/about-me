'use strict';

var userName = prompt('what was your name again?')
alert('Thanks ' + userName + ' lets start the quiz!')

var questionOne = prompt('What is my favorite instruments to play?')
// console.log(questionOne, 'test');
if (questionOne.toLowerCase() === 'bagpipes'){
  alert('THAT IS CORRECT!!!')
  document.write('<li>For question one you answered ' + questionOne + '. THAT IS CORRECT!!!!</li>')
} else {
  alert('I\'m sorry, that is incorrect')
  document.write('<li>For question one you answered ' + questionOne + '. that was incorrect</li>')
}
var questionTwo = prompt('What is name of the band i play in?')
// console.log(questionTwo, 'test');
if (questionTwo.toLowerCase() === 'deathbreaker'){
  alert('THAT IS CORRECT!!!')
  document.write('<li>For question one you answered ' + questionTwo + '. THAT IS CORRECT!!!!</li>')
}else {
  alert('I\'m sorry, that is incorrect')
  document.write('<li>For question one you answered ' + questionTwo + '. that was incorrect</li>')
}
var questionThree = prompt('What label is my band currently signed to?')
// console.log(questionThree, 'test');
if (questionThree.toLowerCase() === 'facedown' || questionThree.toLowerCase() === 'facedown records'){
  alert('THAT IS CORRECT!!!')
  document.write('<li>For question one you answered ' + questionThree + '. THAT IS CORRECT!!!!</li>')
}else {
  alert('I\'m sorry, that is incorrect')
  document.write('<li>For question one you answered ' + questionThree + '. that was incorrect</li>')
}
var questionFour = prompt('How many years have we been touring the USA?')
// console.log(questionFour, 'test');
if (questionFour.toLowerCase() === '5' || questionFour.toLowerCase() === 'five' ){
  alert('THAT IS CORRECT!!!')
  document.write('<li>For question one you answered ' + questionFour + '. THAT IS CORRECT!!!!</li>')
}else {
  alert('I\'m sorry, that is incorrect')
  document.write('<li>For question one you answered ' + questionFour + '. that was incorrect</li>')
}
var questionFive = prompt('What is the name of the record we just released on Facedown Records?')
// console.log(questionFive, 'test');
if (questionFive.toLowerCase() === 'isolate'){
  alert('THAT IS CORRECT!!!')
  document.write('<li>For question one you answered ' + questionFive + '. THAT IS CORRECT!!!!</li>')
}else {
  alert('I\'m sorry, that is incorrect')
  document.write('<li>For question one you answered ' + questionFive + '. that was incorrect</li>')
}

alert('Thanks for taking the time to learn about me ' + userName + '. Send me a link to a page where i can learn about you! Lets see how you did on the Quiz')