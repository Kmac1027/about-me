'use strict';

var userName = prompt('what was your name again?')
alert('Thanks ' + userName + ' lets start the quiz!')

var questionOne = prompt('Yes or No, the bagpipes are my favorite instrument to play')
// console.log(questionOne, 'test');
if (questionOne.toLowerCase() === 'yes'){
  alert('THAT IS CORRECT!!!')
  document.write('<li>For question one you answered ' + questionOne + '. THAT IS CORRECT!!!! the bagpipes are my favorite instrument to play</li>')
} else {
  alert('I\'m sorry, that is incorrect')
  document.write('<li>For question one you answered ' + questionOne + '. that was incorrect, my favorite instrument to play is the bagpipes</li>')
}
var questionTwo = prompt('Yes or No, i Play in the band The Kansas City Shit Kickers')
// console.log(questionTwo, 'test');
if (questionTwo.toLowerCase() === 'no'){
  alert('THAT IS CORRECT!!!')
  document.write('<li>For question one you answered ' + questionTwo + '. THAT IS CORRECT!!!! i play in the band Deathbreaker</li>')
}else {
  alert('I\'m sorry, that is incorrect')
  document.write('<li>For question one you answered ' + questionTwo + '. that was incorrect, i play in the band Deathbreaker</li>')
}
var questionThree = prompt('Yes or No, my band is currently signed to Solid State Records')
// console.log(questionThree, 'test');
if (questionThree.toLowerCase() === 'no'){
  alert('THAT IS CORRECT!!!')
  document.write('<li>For question one you answered ' + questionThree + '. THAT IS CORRECT!!!! my band is not signed to Solid State Records, we are signed to Facedown Records</li>')
}else {
  alert('I\'m sorry, that is incorrect')
  document.write('<li>For question one you answered ' + questionThree + '. that was incorrect, my band is not signed to Solid State Records, we are signed to Facedown Records</li>')
}
var questionFour = prompt('yes or No, I have been touring with my band for 5 years?')
// console.log(questionFour, 'test');
if (questionFour.toLowerCase() === 'yes'){
  alert('THAT IS CORRECT!!!')
  document.write('<li>For question one you answered ' + questionFour + '. THAT IS CORRECT!!!! I have been touring with my band for five years</li>')
}else {
  alert('I\'m sorry, that is incorrect')
  document.write('<li>For question one you answered ' + questionFour + '. that was incorrect, I have been touring with my band for five years</li>')
}
var questionFive = prompt('Yes or No, the name of the album my band just released is called \'Isolate\'')
// console.log(questionFive, 'test');
if (questionFive.toLowerCase() === 'yes'){
  alert('THAT IS CORRECT!!!')
  document.write('<li>For question one you answered ' + questionFive + '. THAT IS CORRECT!!!! the name of the album my band just released is <i>Isolate</i></li>')
}else {
  alert('I\'m sorry, that is incorrect')
  document.write('<li>For question one you answered ' + questionFive + '. that was incorrect, the name of the album my band just released is <i>Isolate</i></li>')
}
alert('Thanks for taking the time to learn about me ' + userName + '. Send me a link to a page where i can learn about you! Lets see how you did on the Quiz')
