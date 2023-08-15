import { Route } from '@angular/router';


export const routes: Route[] = [
  // {
  //   path: '',
  //   loadComponent: () => PlaygroundComponent,
  //   canActivate: [() => isLogged()],
  // },
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
