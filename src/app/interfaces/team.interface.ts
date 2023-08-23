import { PageResponse, ShinobiInterface } from './shared.interface';
import { CharacterInterface } from './character.interface';

export interface TeamInterface extends ShinobiInterface {
  characters?: CharacterInterface[];
}

export interface ResponseTeam extends PageResponse {
  teams: TeamInterface[];
  totalTeams: number;
}
