import { ShinobiInterface } from './shared.interface';
import { CharacterInterface } from './character.interface';

export interface VillageInterface extends ShinobiInterface {
  characters?: CharacterInterface[];
}
