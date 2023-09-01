import { CharacterInterface } from './character.interface';
import { PageResponse } from './shared.interface';

export type AkatsukiInterface = Partial<CharacterInterface>;

export interface ResponseAkatsuki extends PageResponse {
  akatsuki: AkatsukiInterface[];
}
