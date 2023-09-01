import { CharacterInterface } from './character.interface';
import { PageResponse } from './shared.interface';

export type TailedInterface = Partial<CharacterInterface>;

export interface ResponseTailed extends PageResponse {
  tailedBeasts: TailedInterface[];
}
