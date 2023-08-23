import { PageResponse, ShinobiInterface } from './shared.interface';
import { CharacterInterface } from './character.interface';

export interface ClanInterface extends ShinobiInterface {
  characters?: CharacterInterface[];
}

export interface ResponseClan extends PageResponse {
  clans: ClanInterface[];
  totalClans: number;
}
