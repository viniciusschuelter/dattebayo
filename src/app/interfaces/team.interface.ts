import { PageResponse, ShinobiInterface } from './shared.interface';

export interface TeamInterface extends ShinobiInterface {
  characters?: string[];
}

export interface ResponseTeam extends PageResponse {
  teams: TeamInterface[];
}
