import { PageResponse, ShinobiInterface } from './shared.interface';

export interface ClanInterface extends ShinobiInterface {
  characters?: string[];
}

export interface ResponseClan extends PageResponse {
  clans: ClanInterface[];
}
