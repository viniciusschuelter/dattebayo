export interface ShinobiInterface {
  id: string;
  name: string;
  images: string[];
}

export interface PageResponse {
  currentPage: number;
  pageSize: number;
  total: number;
}

export enum CollectionNameEnum {
  characters = 'characters',
  akatsuki = 'akatsuki',
  clans = 'clans',
  kara = 'kara',
  kekkeigenkai = 'kekkei-genkai',
  tailedbeasts = 'tailed-beasts',
  teams = 'teams',
  villages = 'villages',
}

export const collectionNames = Object.values(CollectionNameEnum);

export interface DocsCollectionInterface {
  enum: CollectionNameEnum;
  title: string;
  description: string;
}
