'use strict';

// proof of life --> to make sure it's connected to my HTML

function buyer(){
    let buyer = prompt('What is your name?');
    document.write('Hi ' + buyer);
    
    let borrower = prompt('Mortgage loan limit? (100000-200000)');
    let message = '';
    
    let client = prompt('Try different loan limit');


    if(buyer => 150000){
        message = 'loan is pending!';
    } else if (buyer => 120000){
        message = 'loan is being consider';
    } else if (buyer < 100000){
        message = 'You loan is under review!';
    } else {
        message = 'That loan amount is not attainable!'
    }
    return message;
}
buyer();
    
    


