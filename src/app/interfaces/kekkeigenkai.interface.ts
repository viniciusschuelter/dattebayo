import { PageResponse, ShinobiInterface } from './shared.interface';
import { CharacterInterface } from './character.interface';

export interface KekkeigenkaiInterface extends ShinobiInterface {
  characters?: CharacterInterface[];
}

export interface ResponseKekkeigenkai extends PageResponse {
  kekkeigenkai: KekkeigenkaiInterface[];
  totalKekkeiGenkai: number;
}
