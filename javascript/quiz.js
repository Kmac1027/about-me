'use strict';

var questionOne = prompt('What is my favorite instruments to play?')
// console.log(questionOne, 'test');
if (questionOne.toLowerCase() === 'bagpipes'){
  alert('THAT IS CORRECT!!!')
  document.write('For question one you answered ' + questionOne + '. THAT IS CORRECT!!!!')
} else {
  alert('I\'m sorry, that is incorrect')
  document.write('For question one you answered ' + questionOne + '. that was incorrect')
}
var questionTwo = prompt('What is name of the band i play in?')
// console.log(questionTwo, 'test');
if (questionTwo.toLowerCase() === 'deathbreaker'){
  alert('THAT IS CORRECT!!!')
  document.write('For question one you answered ' + questionTwo + '. THAT IS CORRECT!!!!')
}else {
  alert('I\'m sorry, that is incorrect')
  document.write('For question one you answered ' + questionTwo + '. that was incorrect')
}
var questionThree = prompt('What label is my band currently signed to?')
// console.log(questionThree, 'test');
if (questionThree.toLowerCase() === 'facedown' || questionThree.toLowerCase() === 'facedown records'){
  alert('THAT IS CORRECT!!!')
  document.write('For question one you answered ' + questionThree + '. THAT IS CORRECT!!!!')
}else {
  alert('I\'m sorry, that is incorrect')
  document.write('For question one you answered ' + questionThree + '. that was incorrect')
}
var questionFour = prompt('How many years have we been touring the USA?')
// console.log(questionFour, 'test');
if (questionFour.toLowerCase() === '5' || questionFour.toLowerCase() === 'five' ){
  alert('THAT IS CORRECT!!!')
  document.write('For question one you answered ' + questionFour + '. THAT IS CORRECT!!!!')
}else {
  alert('I\'m sorry, that is incorrect')
  document.write('For question one you answered ' + questionFour + '. that was incorrect')
}
var questionFive = prompt('What is the name of the record we just released on Facedown Records?')
// console.log(questionFive, 'test');
if (questionFive.toLowerCase() === 'isolate'){
  alert('THAT IS CORRECT!!!')
  document.write('For question one you answered ' + questionFive + '. THAT IS CORRECT!!!!')
}else {
  alert('I\'m sorry, that is incorrect')
  document.write('For question one you answered ' + questionFive + '. that was incorrect')
}