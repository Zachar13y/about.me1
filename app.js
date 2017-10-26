"use strict"

alert( 'Getting to know me...' );

let username = prompt('What\'s your name?');

console.log('user said that thier name was ' + username);

alert( 'Hello ' + username);

var userRply = prompt('Do I love coffee and drink at least 2 cups a day?');

if(userRply === 'Yes'){
    alert ('Yes!!!');
} else {
    alert ('Wrong');
}

// var userRply = prompt('Do I like to cook?');
// if(userRply === 'No')
// {alert('Correct! I love to cook!');}
// else
//     alert ('Incorrect');
// var userRply = prompt('Do I like to drive?');
// if(userRply === 'No')
// {alert ('Correct, I love to drive!');}
// else
//     alert('Not true.');
// var userRply = prompt('Do I eat animals?');
// if(userRply === 'No')
//     alert( 'That is correct.');
// else
//     alert( 'Nope.');
// var userRply = prompt('Do I like horror movies?');
// if( userRply === 'No')
// {alert('Correct.');}
// else
//     alert('Wrong');
//const likesRain = confirm('Do you like the rain? If yes, then click "OK" If no, then click "Cancel"');
//console.log( 'Question: likes rain? Answer: + likesRain' );
//alert( 'Thanks'  + username +  '! I learned that it\'s '  + likesRain +  'that you like the rain');

let score = 0;

const fruit = ['Strawberries','blueberries','mangoes','bananas'];

// TODO ask user their favFruit until they answer correctly
// let favFruit = prompt( 'Which fruit do you like best? Strawberrys, blueberries, mangoes, or bananas.') .toLowerCase(); // strawberry

// while ( !fruit.includes(favFruit) ) {
//     favFruit = prompt('No, really, which one??');
// }

// score = fruit.indexOf(favFruit); // 3

// console.log(fruit.includes(favFruit));


// TODO ask user their favVaycay until they answer correctly

// TODO return a function based on a user's score (using their answer's index)
// if (score === 0) {
//     alert( 'you are parseInt()' );
// } else if (score === 1) {
//     alert( 'You are berry blue.' );
// } else if (score > 3) {
//     alert( 'that is not an option');
// }

// const vacations = ['beach','mountains'];


// let favVaycay = prompt( 'Which vacation spot do you prefer? Beach or mountains?' ).toLowerCase();

// while ( !vacations.includes(favVaycay)) {
//     favVaycay = prompt( 'C\'mon! Which one?');
// }

// score = vacations.indexOf(favVaycay);

// if (score === 0) {
//     alert( 'Totally!' );
// } else if (score === 1) {
//     alert( 'Nice! Do you like hiking too?' );
// } else if (score > 1) {
//     alert( 'that is not an option');
// }


const countries = [' canada', ' mexico', ' england', ' france', ' germany', ' italy', ' the netherlands', ' luxembourg', ' belgium', ' austria'];

function guessCountry (){
    for (let i = 0; i <= 6 ; i++){
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


//     while ( !countries.includes(beenCountries)){
//         

//      if (countries.includes(beenCountries)){
        
//     }
//     if (countries === 0) {
//         alert( 'Totally!' );
//     } else if (score === 1) {
//         alert( 'Nice! Do you like hiking too?' );
//     } else if (score > 1) {
//         alert( 'that is not an option');
//     }

//         score = countries.indexOf(beenCountries);

// }
        
       // while( !countries.includes( beenCountries) )
    // console.log('Country guess: '+ beenCountries))
// .toLowerCase()