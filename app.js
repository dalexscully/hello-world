'use strict';

let buyer = prompt('What is your name?');
document.write('Hi ' + buyer + ' Let us get started on your loan');

let usersGuess;
let guessesLeft = 3;

while (usersGuess !== 'good' && guessesLeft >0){
    guessesLeft--;
    usersGuess = prompt('What is the opposite of Bad? (Hint: Starts with g)')
}

function showhome2(){
    let usersNum = prompt('How many homes would you rate my page? 1-5');
    
for (let i = 0; ((i < usersNum) && i < 5); i++){
     document.write('<img src="home2.jpeg" alt="home2" style="width:60px;"/>');
    }
}
// showhome2();
    


