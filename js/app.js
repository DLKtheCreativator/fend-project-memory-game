 /*
 * Create a list that holds all of your cards
 */

 let cards = ['fa fa-diamond','fa fa-diamond',
                'fa fa-bomb', 'fa fa-bomb',
                'fa fa-bolt', 'fa fa-bolt',
                'fa  fa-leaf', 'fa fa-leaf',
                'fa fa-anchor', 'fa fa-anchor',
                'fa fa-cube', 'fa fa-cube',
                'fa fa-bicycle', 'fa fa-bicycle',
                'fa fa-paper-plane-o','fa fa-paper-plane-o'
            ]

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


let toggledCards = [];

if (toggledCards.length === 2) {
    checkMatch();
}

const deck = document.querySelector('.deck');
  deck.addEventListener("click", event =>{
      const clickTarget= event.target;
      if (clickTarget.classList.contains("card") 
      && toggledCards.length < 2){
         toggleCard(clickTarget);
         addToggleCard(clickTarget);
          if (toggledCards.length === 2) {
              checkMatch();
          }
      }
});
  
function toggleCard(clickTarget) {
    clickTarget.classList.toggle("open");
    clickTarget.classList.toggle("show");
} 
 
function addToggleCard(clickTarget) {
    toggledCards.push(clickTarget);
    console.log(toggledCards);
}

function checkMatch() {
    if (
        toggledCards[0].firstElementChild.className ===
        toggledCards[1].firstElementChild.className
    ) {
        toggledCards[0].classList.toggle('match');
        toggledCards[1].classList.toggle('match');
        toggledCards = [];
    } else {
        console.log('Not a match!');
        toggledCards = [];
    }
}