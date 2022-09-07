'use strict';

// proof of life --> to make sure it's connected to my HTML

// declare a variable
// let myName;
// console.log(myName)
// reassign the variable
// myName = 'Domaine';
// console.log(myName);
// reassign it again
// myName = 'Nadia';
// console.log(myName);

// console.log('Hello World!');

// declare a variable called x. assign it value of the value of 10
// let x = 10;
// console.log(x);

// let usersName = prompt('What is your name?');
// let message;


// console.log(usersName);
// message = 'Hi, ' + usersName + '!';
// console.log(message);

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
    document.write('<img src="home2.jpeg" alt="home2" class="home2"/>');
    }
}

showhome2();

// for-loop
// for-loop (initial value ; condition to evaluate ; increment {code to execute})
