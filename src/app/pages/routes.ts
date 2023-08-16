import { Route } from '@angular/router';
import {CharacterComponent} from "./character/character.component";


export const routes: Route[] = [
  {
    path: '',
    loadComponent: () => CharacterComponent,
    canActivate: [() => true],
  },
  {
    path: 'clans',
    loadComponent: () => CharacterComponent,
    canActivate: [() => true],
  },
  {
    path: 'kara',
    loadComponent: () => CharacterComponent,
    canActivate: [() => true],
  },
  {
    path: 'kekkeigenkai',
    loadComponent: () => CharacterComponent,
    canActivate: [() => true],
  },
  {
    path: 'teams',
    loadComponent: () => CharacterComponent,
    canActivate: [() => true],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]
