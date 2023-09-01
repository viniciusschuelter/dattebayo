import { PageResponse, ShinobiInterface } from './shared.interface';

export interface CharacterInterface extends ShinobiInterface {
  debut?: { [s: string]: string };
  personal?: string[];
  family?: string;
  jutsu?: string[];
  natureType?: string[];
  rank?: { [s: string]: string };
  uniqueTraits?: string[];
  voiceActors?: { [s: string]: string };
}

export interface ResponseCharacter extends PageResponse {
  characters: CharacterInterface[];
}
