import { RockPaperScissors, Choice, GameOptions } from '../src';

describe('RockPaperScissors', () => {
  const options: GameOptions = {
    drawProbability: 0.33,
    winProbability: 0.33,
    loseProbability: 0.34,
  };

  it('should initialize with the correct probabilities', () => {
    const game = new RockPaperScissors(options);

    expect(game).toBeTruthy();
  });

  it('should determine the winner correctly', () => {
    const game = new RockPaperScissors(options);

    const result = game.playRound(Choice.Rock);
    expect(result).toHaveProperty('winner');
    expect(result).toHaveProperty('playerChoice');
    expect(result).toHaveProperty('machineChoice');
    expect(result).toHaveProperty('stats');
  });

  it('should update the stats correctly', () => {
    const game = new RockPaperScissors(options);

    game.playRound(Choice.Rock);
    const stats = game.playRound(Choice.Paper).stats;

    expect(stats.totalGames).toBe(2);
    expect(stats.player[Choice.Rock]).toBe(1);
    expect(stats.player[Choice.Paper]).toBe(1);
  });

  it('should always result in a draw when drawProbability is 1', () => {
    const game = new RockPaperScissors({
      drawProbability: 1,
      winProbability: 0,
      loseProbability: 0,
    });

    const result = game.playRound(Choice.Rock);
    expect(result.winner).toBe('draw');
    expect(result.playerChoice).toBe(Choice.Rock);
    expect(result.machineChoice).toBe(Choice.Rock);
  });

  it('should always result in a player win when winProbability is 1', () => {
    const game = new RockPaperScissors({
      drawProbability: 0,
      winProbability: 1,
      loseProbability: 0,
    });

    let result = game.playRound(Choice.Rock);
    expect(result.winner).toBe('player');
    expect(result.playerChoice).toBe(Choice.Rock);
    expect(result.machineChoice).toBe(Choice.Scissors);

    result = game.playRound(Choice.Scissors);
    expect(result.winner).toBe('player');
    expect(result.playerChoice).toBe(Choice.Scissors);
    expect(result.machineChoice).toBe(Choice.Paper);

    result = game.playRound(Choice.Paper);
    expect(result.winner).toBe('player');
    expect(result.playerChoice).toBe(Choice.Paper);
    expect(result.machineChoice).toBe(Choice.Rock);
  });

  it('should always result in a machine win when loseProbability is 1', () => {
    const game = new RockPaperScissors({
      drawProbability: 0,
      winProbability: 0,
      loseProbability: 1,
    });

    let result = game.playRound(Choice.Rock);
    expect(result.winner).toBe('machine');
    expect(result.playerChoice).toBe(Choice.Rock);
    expect(result.machineChoice).toBe(Choice.Paper);

    result = game.playRound(Choice.Paper);
    expect(result.winner).toBe('machine');
    expect(result.playerChoice).toBe(Choice.Paper);
    expect(result.machineChoice).toBe(Choice.Scissors);

    result = game.playRound(Choice.Scissors);
    expect(result.winner).toBe('machine');
    expect(result.playerChoice).toBe(Choice.Scissors);
    expect(result.machineChoice).toBe(Choice.Rock);
  });
});
