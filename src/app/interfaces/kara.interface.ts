import { CharacterInterface } from './character.interface';
import { PageResponse } from './shared.interface';

export interface KaraInterface extends CharacterInterface {
  occupation?: string[];
  classification?: string[];
}

export interface ResponseKara extends PageResponse {
  kara: KaraInterface[];
}
