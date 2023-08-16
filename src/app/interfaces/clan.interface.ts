import { ShinobiInterface } from './shared.interface';
import { CharacterInterface } from './character.interface';


export interface ClanInterface extends ShinobiInterface {
  characters?: CharacterInterface[];
}
