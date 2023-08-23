import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterInterface } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private readonly http = inject(HttpClient);

  getAllCharacters(): Observable<CharacterInterface[]> {
    return this.http.get<CharacterInterface[]>('/api/character').pipe();
  }
}
