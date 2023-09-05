import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  CharacterInterface,
  ResponseCharacter,
} from '../interfaces/character.interface';
import { CollectionNameEnum } from '../interfaces/shared.interface';

@Injectable({ providedIn: 'root' })
export class CollectionService {
  private readonly http = inject(HttpClient);

  getAllCollection(
    collectionName: CollectionNameEnum,
    page: number,
    searchTerm?: string,
  ): Observable<CharacterInterface[]> {
    let queryParams = '';
    if (page) queryParams += `?page=${page}`;
    if (searchTerm) queryParams += `&name=${searchTerm}`;
    return this.http
      .get<any>(
        `https://dattebayo-api.onrender.com/${collectionName}${
          queryParams || ''
        }`,
      )
      .pipe(map((_) => _[collectionName]));
  }
}
