function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'bear' || userInput === 'human' || userInput === 'gun') {
        return userInput;
    }else {
        return 'please enter a valid option';
    }
}
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'bear';
    }else if (randomNumber === 1) {
        return 'human';
    }else {
        return 'gun';
    }
}

function determineWinner(userChoice,computerChoice) {
    if (userChoice === computerChoice) {
        return 'its a tie';
    }
    // if user selects "human"
    if (userChoice === 'human') {
        // if computer selects "bear"
        if (computerChoice === 'bear') {
            return 'You have been mauled by a bear';
            // if computer selects "gun"
        }else{
            return 'You have disarmed a gun';
        }
    }
    // if user selects a "bear"
    if (userChoice === 'bear') {
        // if computer selects "gun"
        if (computerChoice === 'gun') {
            return 'You have been shot by a gun';
            // if computer selects "human"
        }else{
            return 'You have  mauled a human';
        }
    }
    // if user selects "gun"
    if (userChoice === 'gun') {
        // if computer selects "human"
        if (computerChoice === 'human') {
            return 'You have been disarmed';
            // if computer selects "bear"
        }else {
            return 'You have shot a bear';
        }
    }
}
function playGame() {
    var promptUserChoice = prompt('Please choose bear, human or gun');
    var userChoice = getUserChoice(promptUserChoice);
    var computerChoice = getComputerChoice();
    console.log(userChoice)
    console.log(computerChoice)
    console.log(determineWinner(userChoice,computerChoice))
}
playGame();

    