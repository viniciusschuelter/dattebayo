import {
  CollectionNameEnum,
  DocsCollectionInterface,
} from '../interfaces/shared.interface';

export const DocsCollectionsMock: DocsCollectionInterface[] = [
  {
    enum: CollectionNameEnum.characters,
    title: CollectionNameEnum.characters,
    description:
      'Retrieve information about characters from the Naruto universe.',
  },
  {
    enum: CollectionNameEnum.clans,
    title: CollectionNameEnum.clans,
    description: 'Access details about various clans within the Naruto world.',
  },
  {
    enum: CollectionNameEnum.villages,
    title: CollectionNameEnum.villages,
    description:
      'Fetch information about hidden villages in the Naruto universe.',
  },
  {
    enum: CollectionNameEnum.kekkeigenkai,
    title: CollectionNameEnum.kekkeigenkai,
    description:
      'Discover the secrets of Kekkei-genkai and their unique abilities.',
  },
  {
    enum: CollectionNameEnum.tailedbeasts,
    title: CollectionNameEnum.tailedbeasts,
    description:
      'Learn about the powerful tailed beasts and their significance.',
  },
  {
    enum: CollectionNameEnum.teams,
    title: CollectionNameEnum.teams,
    description: 'Explore ninja teams and their dynamic compositions.',
  },
  {
    enum: CollectionNameEnum.akatsuki,
    title: CollectionNameEnum.akatsuki,
    description: 'Uncover the enigmatic organization known as Akatsuki.',
  },
  {
    enum: CollectionNameEnum.kara,
    title: CollectionNameEnum.kara,
    description:
      'Dive into the shadows with information about the organization Kara.',
  },
];
