import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    loadChildren: () => {
      import('./pages/character/character.module').then(m => console.log(m.CharacterModule))
      return import('./pages/character/character.module').then(m => m.CharacterModule)
    }
  },
  {
    path: 'clans',
    loadChildren: () => import('./pages/clan/clan.module').then(m => m.ClanModule)
  },
  {
    path: 'kara',
    loadChildren: () => import('./pages/character/character.module').then(m => m.CharacterModule)
  },
  {
    path: 'kekkeigenkai',
    loadChildren: () => import('./pages/character/character.module').then(m => m.CharacterModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./pages/character/character.module').then(m => m.CharacterModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
