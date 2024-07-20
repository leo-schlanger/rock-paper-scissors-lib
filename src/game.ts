import { Choice } from './enums/choice';
import { GameOptions } from './interfaces/game-options';
import { Stats } from './interfaces/stats';

class RockPaperScissors {
  private stats: Stats = {
    player: { [Choice.Rock]: 0, [Choice.Paper]: 0, [Choice.Scissors]: 0 },
    machine: { [Choice.Rock]: 0, [Choice.Paper]: 0, [Choice.Scissors]: 0 },
    totalGames: 0,
  };
  private drawProbability: number;
  private winProbability: number;
  private loseProbability: number;

  constructor(options: GameOptions) {
    this.drawProbability = options.drawProbability;
    this.winProbability = options.winProbability;
    this.loseProbability = options.loseProbability;
  }

  private getMachineChoice(playerChoice: Choice): Choice {
    const randomNum = Math.random();
    const totalProbability = this.drawProbability + this.winProbability + this.loseProbability;

    if (randomNum < this.drawProbability / totalProbability) {
      return playerChoice; // Draw
    } else if (randomNum < (this.drawProbability + this.winProbability) / totalProbability) {
      // Player wins (machine loses)
      if (playerChoice === Choice.Rock) return Choice.Scissors;
      if (playerChoice === Choice.Paper) return Choice.Rock;
      return Choice.Paper;
    } else {
      // Machine wins
      if (playerChoice === Choice.Rock) return Choice.Paper;
      if (playerChoice === Choice.Paper) return Choice.Scissors;
      return Choice.Rock;
    }
  }

  private determineWinner(playerChoice: Choice, machineChoice: Choice): 'draw' | 'player' | 'machine' {
    if (playerChoice === machineChoice) {
      return 'draw';
    }
    if (
      (playerChoice === Choice.Rock && machineChoice === Choice.Scissors) ||
      (playerChoice === Choice.Scissors && machineChoice === Choice.Paper) ||
      (playerChoice === Choice.Paper && machineChoice === Choice.Rock)
    ) {
      return 'player';
    } else {
      return 'machine';
    }
  }

  public playRound(playerChoice: Choice): { playerChoice: Choice; machineChoice: Choice; winner: 'draw' | 'player' | 'machine'; stats: Stats } {
    const machineChoice = this.getMachineChoice(playerChoice);
    const winner = this.determineWinner(playerChoice, machineChoice);

    this.stats.totalGames += 1;
    this.stats.player[playerChoice] += 1;
    this.stats.machine[machineChoice] += 1;

    return {
      playerChoice,
      machineChoice,
      winner,
      stats: this.stats,
    };
  }
}

export default RockPaperScissors;
