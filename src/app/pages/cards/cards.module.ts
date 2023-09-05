import { NgModule } from '@angular/core';
import { CardsComponent } from './cards.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CollectionCardComponent } from '../../components/collection-card/collection-card.component';
import { CollectionSearchComponent } from '../../components/collection-search/collection-search.component';
import { CollectionLoadingComponent } from '../../components/collection-loading/collection-loading.component';
import { InfiniteScrollerDirective } from '../../directives/infinite-scroller/infinite-scroller.directive';

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
    CollectionLoadingComponent,
    InfiniteScrollerDirective,
    RouterModule.forChild(routes),
  ],
})
export class CardsModule {}
