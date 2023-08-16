import { Route } from '@angular/router';
import {CharacterComponent} from "./character/character.component";


export const routes: Route[] = [
  {
    path: '',
    loadComponent: () => CharacterComponent,
    canActivate: [() => true],
  },
  // {
  //   path: 'dimension-c137',
  //   loadComponent: () => DimensionC137Component,
  //   canActivate: [() => isLogged()],
  // },
  // {
  //   path: 'lazy-renderer',
  //   loadComponent: () => LazyRendererComponent,
  //   canActivate: [() => isLogged()],
  // },
  // {
  //   path: 'login',
  //   loadComponent: () => LoginComponent,
  // },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]
