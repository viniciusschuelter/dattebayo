import { PageResponse, ShinobiInterface } from './shared.interface';
import { CharacterInterface } from './character.interface';

export interface VillageInterface extends ShinobiInterface {
  characters?: CharacterInterface[];
}

export interface ResponseVillage extends PageResponse {
  villages: VillageInterface[];
  totalVillages: number;
}
