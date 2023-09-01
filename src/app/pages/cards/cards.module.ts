import { NgModule } from '@angular/core';
import { CardsComponent } from './cards.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CollectionCardComponent } from '../../components/collection-card/collection-card.component';
import { CollectionSearchComponent } from '../../components/collection-search/collection-search.component';

const routes: Route[] = [
  {
    path: '',
    component: CardsComponent,
  },
];

@NgModule({
  declarations: [CardsComponent],
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    CollectionCardComponent,
    CollectionSearchComponent,
    RouterModule.forChild(routes),
  ],
})
export class CardsModule {}
