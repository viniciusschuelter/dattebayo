import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  CharacterInterface,
  ResponseCharacter,
} from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private readonly http = inject(HttpClient);

  getAllCharacters(): Observable<CharacterInterface[]> {
    return this.http
      .get<ResponseCharacter>('/api/character')
      .pipe(map((_) => _.characters));
  }
}
