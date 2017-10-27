'use strict';

let score = 0;

// Add scoring to questions (score++) and console.log()s!!  And number guessing question! And functions! 

alert( 'Getting to know me...' );

const username = prompt('What\'s your name?');

console.log('user said that thier name was ' + username);

alert( 'Hello ' + username);

// First Question
const userRply1 = prompt('Do I love coffee and drink at least 2 cups a day?').toLowerCase();

if(userRply1 === 'yes' || userRply1 === 'y'){
    alert ('Yes!!!');
    score ++;
} else {
    alert ('Wrong');
}

// Q2
const userRply2 = prompt('Do I like to cook?').toLowerCase();
if(userRply2 === 'no' || userRply2 === 'n'){
    alert('Correct! I love to cook!');
    score ++;
}
else {
    alert ('Incorrect');
}

// Q3
const userRply3 = prompt('Do I like to drive?').toLowerCase();
if(userRply3 === 'no' || userRply3 === 'n'){
    alert ('Correct, I love to drive!');
} else {
    alert('Not true.');
}

//Q4
const userRply4 = prompt('Do I eat animals?').toLowerCase();
if(userRply4 === 'no' || userRply4 === 'n'){
    alert( 'That is correct.');
} else {
    alert( 'Nope.');
}

//Q5
const userRply5 = prompt('Do I like horror movies?').toLowerCase();
if( userRply5 === 'no' || userRply5 === 'n'){
    alert('Correct.');
} else {
    alert('Wrong');
}


// Q6 number game



// Question 7: Countries
const countries = [' canada', ' mexico', ' england', ' france', ' germany', ' italy', ' the netherlands', ' luxembourg', ' belgium', ' austria'];

function guessCountry (){
    for (const i = 0; i <= 6 ; i++){
        const beenCountries = (' ' + prompt('I\'ve been to 13 countries other than the U.S. You only get 6 guesses to guess one of them.').toLowerCase());

        if(countries.includes(beenCountries)){
            alert('Yes, I have been to that country. I\'ve been to ' + countries);
            score ++;
            break;
        }

        else if (!countries.includes(beenCountries)){
            alert('Nope! Guess again.');
        }
    }
}

guessCountry();

console.log(score);

// const likesRain = confirm('Do you like the rain? If yes, then click "OK" If no, then click "Cancel"');
// console.log( 'Question: likes rain? Answer: + likesRain' );
// alert( 'Thanks'  + username +  '! I learned that it\'s '  + likesRain +  'that you like the rain');

// const fruit = ['Strawberries','blueberries','mangoes','bananas'];

// // TODO ask user their favFruit until they answer correctly
// const favFruit = prompt( 'Which fruit do you like best? Strawberries, blueberries, mangoes, or bananas.') .toLowerCase(); // strawberry

// while ( !fruit.includes(favFruit) ) {
//     favFruit = prompt('No, really, which one??');
// }

// score = fruit.indexOf(favFruit); // 3

// console.log(fruit.includes(favFruit));
