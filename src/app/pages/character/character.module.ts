import { NgModule } from '@angular/core';
import { CharacterComponent } from './character.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';

const routes: Route[] = [
  {
    path: '',
    component: CharacterComponent,
  },
];

@NgModule({
  declarations: [CharacterComponent],
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    CharacterCardComponent,
    RouterModule.forChild(routes),
  ],
})
export class CharacterModule {}
