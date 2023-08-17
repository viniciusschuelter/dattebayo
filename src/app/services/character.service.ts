import { inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterInterface } from '../interfaces/character.interface';
import { environment } from '../../enviroments/enviroment';


@Injectable({ providedIn: 'root' })
export class CharacterService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.urlBase;

  getAllCharacters(): Observable<CharacterInterface[]> {
    console.log('here')
    const headers = new HttpHeaders();
    headers.append('access-control-allow-origin', '*');
    headers.set('access-control-allow-origin', '*');
    console.log(headers)
    return this.http.get<CharacterInterface[]>(`${this.baseUrl}/character`, { }).pipe()
  }
}
