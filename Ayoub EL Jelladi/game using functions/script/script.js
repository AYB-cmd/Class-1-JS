function getUserChioce(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'bear' || userInput === 'human' || userInput === 'gun') {
        return userInput;
    }else {
        return 'please enter a valid option';
    }
}
function getComputerChioce() {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'bear';
    }else if (randomNumber === 1) {
        return 'human';
    }else {
        return 'gun';
    }
}

function determineWinner(userChioce,computerChioce) {
    if (userChioce === computerChioce) {
        return 'its a tie';
    }
    // if user selects "human"
    if (userChioce === 'human') {
        // if computer selects "bear"
        if (computerChioce === 'bear') {
            return 'You have been mauled by a bear';
            // if computer selects "gun"
        }else{
            return 'You have disarmed a gun';
        }
    }
    // if user selects a "bear"
    if (userChioce === 'bear') {
        // if computer selects "gun"
        if (computerChioce === 'gun') {
            return 'You have been shot by a gun';
            // if computer selects "human"
        }else{
            return 'You have been mauled a human';
        }
    }
    // if user selects "gun"
    if (userChioce === 'gun') {
        // if computer selects "human"
        if (computerChioce === 'human') {
            return 'You have been disarmed';
            // if computer selects "bear"
        }else {
            return 'You have shot a bear';
        }
    }
}
function playGame() {
    var promptUserChioce = prompt('Please choose bear, human or gun');
    var userChioce = getUserChioce(promptUserChioce);
    var computerChioce = getComputerChioce();
    console.log(userChioce)
    console.log(computerChioce)
    console.log(determineWinner(userChioce,computerChioce))
}
playGame();