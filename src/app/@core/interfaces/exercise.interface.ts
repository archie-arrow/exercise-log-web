import { Difficulty, Region, WeightType } from 'src/app/pages/constans';

export interface ExerciseInterface {
  name: string;
  description: string;
  difficulty: Difficulty;
  weightType: WeightType;
  primaryRegion: Region;
  secondaryRegion: Region;
  id?: string;
  userId?: string;
}
