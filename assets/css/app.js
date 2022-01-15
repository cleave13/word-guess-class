// || 
// As a user, I want to start the game by clicking on a button.
// As a user, I want to try and guess a word by filling in a number of blanks that match the number of letters in that word.
// As a user, I want the game to be timed.
// As a user, I want to win the game when I have guessed all the letters in the word.
// As a user, I want to lose the game when the timer runs out before I have guessed all the letters.
// As a user, I want to see my total wins and losses on the screen.

// ||
// When a user presses a letter key, the user's guess should be captured as a key event.
// When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear.
// When a user wins or loses a game, a message should appear and the timer should stop.
// When a user clicks the start button, the timer should reset.
// When a user refreshes or returns to the brower page, the win and loss counts should persist.

// eventlistener for the start press ==> starts the timer and selects a word
// function wordSelect()
// wordSelect - randomly choose a word from an array, display '_' for each letter (for loop += "_")
// function wordGuess() - keydown eventlistener; each keydown set to uppercase and compare key press to the letters of the word with the keydown.key
// if === display the pressed key in it's appropriate spot (.includes()) as an uppercase letter (use the previous variable)
// function init() initializes game and renders previous scores on screen
// variables: word[array], score, length (length of the chosen word)
