'use strict';
// proof of life --> to make sure it's connected to my HTML
// console.log('Hello World!');

// What/why functions?
// Command we can use to execute a set of steps

// Structure of a function
// function myfuntion(parameters){code to execute}

function greetUser(){
    let usersName = prompt('what is yout name');
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


