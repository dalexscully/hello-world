'use strict';

console.log('Domaine');

console.log('Hello World!');


let x = 10;
console.log(x);

let usersName = prompt('What is your name?');
let message;

if (usersName == 'Domaine'){
    message = 'I am a Loan Officer';
}    else {
    message = 'Welcome to my site!';
}
if (usersName == 'Domaine'){
    message = ' I am a Realtor';
}    else{
    message = 'Need a Mortgage Loan!';
}
document.write(message);
