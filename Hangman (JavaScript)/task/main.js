const input = require('sync-input');

let wins = 0;
let losses = 0;

function playGame() {
    const words = ["python", "java", "swift", "javascript"];
    const chosenWord = words[Math.floor(Math.random() * words.length)];
    let hiddenWord = "-".repeat(chosenWord.length).split('');
    let attemptsLeft = 8;
    let guessedLetters = [];

    while (attemptsLeft > 0) {
        console.log(hiddenWord.join(''));

        console.log("Input a letter:");
        let guess = input("> ").trim();

        if (guess.length !== 1) {
            console.log("Please, input a single letter.");
            console.log("");
            continue;
        }

        if (!/[a-z]/.test(guess)) {
            console.log("Please, enter a lowercase letter from the English alphabet.");
            console.log("");
            continue;
        }

        if (guessedLetters.includes(guess)) {
            console.log("You've already guessed this letter.");
            console.log("");
            continue;
        }

        guessedLetters.push(guess);

        if (chosenWord.includes(guess)) {
            for (let i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i] === guess) {
                    hiddenWord[i] = guess;
                }
            }
        } else {
            attemptsLeft--;
            console.log("That letter doesn't appear in the word.");
        }

        console.log("");

        if (!hiddenWord.includes('-')) {
            console.log(hiddenWord.join(''));
            console.log(`You guessed the word ${chosenWord}!`);
            console.log("You survived!");
            wins++;
            return;
        }
    }

    if (hiddenWord.includes('-') && attemptsLeft === 0) {
        console.log("You lost!");
        losses++;
    }
}

function showMenu() {
    while (true) {
        console.log('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:');
        let choice = input("> ").trim().toLowerCase();

        if (choice === "play") {
            playGame();
        } else if (choice === "results") {
            console.log(`You won: ${wins} times.`);
            console.log(`You lost: ${losses} times.`);
        } else if (choice === "exit") {
            console.log("Thanks for playing!");
            break;
        } else {
            console.log('Invalid choice. Please type "play", "results", or "exit".');
        }

        console.log("");
    }
}

showMenu();
