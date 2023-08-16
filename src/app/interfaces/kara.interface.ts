import { CharacterInterface } from './character.interface';


export interface KaraInterface extends CharacterInterface {
  occupation?: string[];
  classification?: string[];
}
