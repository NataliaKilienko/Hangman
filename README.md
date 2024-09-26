
# Hangman Game

### Description

Hangman Game is a classic text-based game where the player tries to guess a word by guessing letters. The player has 8 attempts to guess the word. The goal of the game is to guess all the letters of the word before the attempts run out.

### Features

- **Game Menu**:
  - `play`: Start a new game.
  - `results`: Show the number of wins and losses.
  - `exit`: Quit the game.
  
- **Game Rules**:
  - The player can enter one lowercase English letter.
  - If the player enters the same letter more than once, the game informs the player and does not decrease the number of attempts.
  - The number of attempts decreases only when an incorrect letter is entered.
  - If all the letters are guessed correctly before the attempts run out, the player wins.

- **Wins and Losses**:
  - After each game, the number of wins and losses is displayed.
  
### How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/NataliaKilienko/Hangman.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Hangman
   ```

3. Run the game:

   ```bash
   node main.js
   ```

### Example Usage

```bash
Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:
> play

------
Input a letter: > p
p-----

Input a letter: > y
py----

...

You guessed the word python!
You survived!

Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:
> results
You won: 1 times.
You lost: 0 times.

Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:
> exit
Thanks for playing!
```
