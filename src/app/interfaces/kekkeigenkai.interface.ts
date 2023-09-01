import { PageResponse, ShinobiInterface } from './shared.interface';

export interface KekkeigenkaiInterface extends ShinobiInterface {
  characters?: string[];
}

export interface ResponseKekkeigenkai extends PageResponse {
  kekkeigenkai: KekkeigenkaiInterface[];
}
