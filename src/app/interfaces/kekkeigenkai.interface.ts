import { ShinobiInterface } from './shared.interface';
import { CharacterInterface } from './character.interface';

export interface KekkeigenkaiInterface extends ShinobiInterface {
  characters?: CharacterInterface[];
}
