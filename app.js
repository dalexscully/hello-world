'use strict';
// proof of life --> to make sure it's connected to my HTML
// console.log('Hello World!');

// What/why functions?
// Command we can use to execute a set of steps

// Structure of a function
// function myfuntion(parameters){code to execute}

function greetUser(){
    let usersName = prompt('what is your name');
    document.write('Hi ' + usersName);
    return usersName;
}

let usersName = greetUser();
// console.log(usersName);

//  let message;

// let usersName = prompt('What is your name?');
// document.write('Hi ' + usersName);
// document.write(message);
function addTwoNumbers(num1, num2){
    return num1 + num2
}
let usersGuess;
let guessesLeft = 3;

while (usersGuess !== 'good' && guessesLeft > 0){
    guessesLeft--;
    usersGuess = prompt('What is the opposite of bad? (Hint: starts with a g)')
}
function showhome2(){
    let usersNum = prompt('How many homes would you rate my page? 1-5')

for (let i = 0; ((i < usersNum) && i < 5); i++){
    document.write('<img src="home2.jpeg" alt="colorful homes"/>');
    }
}

showhome2();

// for-loop
// for-loop (initial value ; condition to evaluate ; increment {code to execute})
