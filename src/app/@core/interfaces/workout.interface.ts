import { Difficulty } from 'src/app/pages/constans';

export interface WorkoutInterface {
  name: string;
  exercises: string[];
  repeated: number;
  userId: string;
  id: string;
  exercisesCount: number;
  difficulty: Difficulty;
  withAdditionalEquipment: boolean;
}
