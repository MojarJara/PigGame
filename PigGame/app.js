// /*
// GAME RULES:

// - The game has 2 players, playing in rounds
// - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
// - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
// - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
// - The first player to reach 100 points on GLOBAL score wins the game

// */
// var scores, roundScores, activePlayer, gamePlaying;

// init();



// // let us select exactly like in css.
// //setter
// //document.querySelector('#current-' + activePlayer).textContent = dice;
// //document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';

// //getter
// var x = document.querySelector('#score-0').textContent;


// //hiding an html element.



// // // Event handling
// // function button(){
// //     //Do something here
// // } 
// // button();
// //callbackfunction is a function that is called by another function.
// // document.querySelector('.btn-roll').addEventListener('click',button)
// //anonymous function is a function that doesnt have a name. 
// document.querySelector('.btn-roll').addEventListener('click', function () {
//     if (gamePlaying) {
//         var dice = Math.floor(Math.random() * 6 + 1);
//         var diceDOM = document.querySelector('.dice');
//         diceDOM.style.display = 'block';
//         diceDOM.src = 'dice-' + dice + '.png'

//         if (dice !== 1) {
//             roundScores += dice;
//             document.querySelector('#current-' + activePlayer).textContent = roundScores;

//         } else {
//             nextPlayer();
//         }
//     }

// });

// document.querySelector('.btn-hold').addEventListener('click', function () {

//     if (gamePlaying) {
//         scores[activePlayer] += roundScores;

//         document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//         if (scores[activePlayer] >= 10) {
//             document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//             document.querySelector('.dice').style.display = 'none';
//             document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
//             document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//             gamePlaying = false;
//         } else {
//             nextPlayer();
//         }
//     }
// });


// function nextPlayer() {
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//     roundScores = 0;

//     document.getElementById('current-0'.textContent = '0');
//     document.getElementById('current-1'.textContent = '0');

//     //document.querySelector('.player-0-panel').classList.remove('active');
//     //document.querySelector('.player-1-panel').classList.add('active');
//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');
//     document.querySelector('.dice').style.display = 'none';

// }
// // here we dont pass the fuction like this function () we just pass it like function, if we pass it with the brackets, it will execute the function which we dont want yet.
// document.querySelector('.btn-new').addEventListener('click', init);

// function init() {
//     scores = [0, 0];
//     roundScores = 0;
//     activePlayer = 0;

//     document.querySelector('.dice').style.display = 'none';

//     document.getElementById('score-0').textContent = '0';
//     document.getElementById('score-1').textContent = '0';
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';
//     document.getElementById('name-0').textContent = 'Player 1';
//     document.getElementById('name-1').textContent = 'Player 2';
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');
//     gamePlaying = true;

// };

///// Challenge


var scores, roundScores, activePlayer, gamePlaying;

init();
// declare last dice variable outside the functionotherwise it will get overwritten all the time...duh
var lastDice;
var lastDiceTwo;



// let us select exactly like in css.
//setter
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';

//getter
var x = document.querySelector('#score-0').textContent;


//hiding an html element.



// // Event handling
// function button(){
//     //Do something here
// } 
// button();
//callbackfunction is a function that is called by another function.
// document.querySelector('.btn-roll').addEventListener('click',button)
//anonymous function is a function that doesnt have a name. 
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6 + 1);
        var diceTwo = Math.floor(Math.random() * 6 + 1);
        var diceDOM = document.querySelector('.dice');
        var diceDOMTwo = document.querySelector('.dice-2');

        diceDOM.style.display = 'block';
        diceDOMTwo.style.display = 'block';
        diceDOMTwo.src = 'dice-' + diceTwo + '.png'
        diceDOM.src = 'dice-' + dice + '.png'

        if(dice ===6 && lastDice === 6 || diceTwo === 6 && lastDiceTwo === 6){
            //player looses scores
            scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = 0;
        nextPlayer();  

        } else if (dice !== 1 || diceTwo !== 1) {
            var sumDice = dice +diceTwo;
            roundScores += sumDice;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;

        } else if (dice === 1 || diceTwo === 1) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = 0;

        } else {
            nextPlayer();
        }

         lastDice = dice;
         lastDiceTwo = dice;
      
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {
        scores[activePlayer] += roundScores;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;
        
        //all values of undefined, 0 , nul, or "" are COERCED to false
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
 
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScores = 0;

    document.getElementById('current-0'.textContent = '0');
    document.getElementById('current-1'.textContent = '0');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';


}
// here we dont pass the fuction like this function () we just pass it like function, if we pass it with the brackets, it will execute the function which we dont want yet.
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScores = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';


    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    gamePlaying = true;

};