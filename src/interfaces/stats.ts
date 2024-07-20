import { Choice } from '../enums/choice';

export interface Stats {
  player: Record<Choice, number>;
  machine: Record<Choice, number>;

  totalGames: number;
}