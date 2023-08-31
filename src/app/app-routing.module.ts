import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'character',
    loadChildren: () =>
      import('./pages/character/character.module').then(
        (m) => m.CharacterModule,
      ),
  },
  {
    path: 'clans',
    loadChildren: () =>
      import('./pages/clan/clan.module').then((m) => m.ClanModule),
  },
  {
    path: 'tailed-beast',
    loadChildren: () =>
      import('./pages/tailed/tailed.module').then((m) => m.TailedModule),
  },
  {
    path: 'kara',
    loadChildren: () =>
      import('./pages/kara/kara.module').then((m) => m.KaraModule),
  },
  {
    path: 'kekkeigenkai',
    loadChildren: () =>
      import('./pages/kekkeigenkai/kekkeigenkai.module').then(
        (m) => m.KekkeigenkaiModule,
      ),
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./pages/team/team.module').then((m) => m.TeamModule),
  },
  {
    path: 'villages',
    loadChildren: () =>
      import('./pages/village/village.module').then((m) => m.VillageModule),
  },
  {
    path: 'akatsuki',
    loadChildren: () =>
      import('./pages/akatsuki/akatsuki.module').then((m) => m.AkatsukiModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
