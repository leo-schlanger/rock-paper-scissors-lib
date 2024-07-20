# Rock-Paper-Scissors Library

A library for Rock-Paper-Scissors game logic, providing a way to simulate and control the outcomes of the game with customizable probabilities for draw, win, and loss.

## Installation

Install the library using npm:

```bash
npm install rock-paper-scissors-lib
```

# Usage

Importing the Library
You can import the library into your project as follows:

```typescript
const { RockPaperScissors, Choice, GameOptions } = require('rock-paper-scissors-lib');

// or if you are using ES6 modules
import { RockPaperScissors, Choice, GameOptions } from 'rock-paper-scissors-lib';
```

# Creating a Game

Create a new game instance by providing the probabilities for draw, win, and lose:

```typescript
const options: GameOptions = {
  drawProbability: 0.33,
  winProbability: 0.33,
  loseProbability: 0.34,
};

const game = new RockPaperScissors(options);
```

# Playing a Round
You can play a round by providing the player's choice:

```typescript
const result = game.playRound(Choice.Rock);

console.log(result);
// Output example:
// {
//   playerChoice: 'rock',
//   machineChoice: 'scissors',
//   winner: 'player',
//   stats: { player: { rock: 1, paper: 0, scissors: 0 }, machine: { rock: 0, paper: 0, scissors: 1 }, totalGames: 1 }
// }
```

# API

## Classes

RockPaperScissors

The main class to create and play a game.

constructor(options: GameOptions)
options: An object containing the probabilities for draw, win, and lose.
playRound(playerChoice: Choice): Result
playerChoice: The choice made by the player (Choice.Rock, Choice.Paper, or Choice.Scissors).
Returns an object with the following properties:
playerChoice: The player's choice.
machineChoice: The machine's choice.
winner: The winner of the round ('player', 'machine', or 'draw').
stats: An object containing the statistics of the game.

## Enums

Choice

The choices available in the game.

Choice.Rock: Represents the choice "rock".
Choice.Paper: Represents the choice "paper".
Choice.Scissors: Represents the choice "scissors".


## Interfaces

GameOptions

The options for creating a game.

drawProbability: The probability of a draw (a number between 0 and 1).
winProbability: The probability of the player winning (a number between 0 and 1).
loseProbability: The probability of the machine winning (a number between 0 and 1).

Stats

The statistics of the game.

player: An object containing the number of times the player chose each option.
machine: An object containing the number of times the machine chose each option.
totalGames: The total number of games played.