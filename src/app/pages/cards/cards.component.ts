import { Component, inject } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { CollectionNameEnum } from '../../interfaces/shared.interface';
import {
  BehaviorSubject,
  combineLatest,
  debounce,
  interval,
  switchMap,
} from 'rxjs';

@Component({
  template: `
    <div class="mx-auto min-w-0 max-w-6xl px-6 pt-4 md:px-12">
      <app-collection-search
        (changeSearchTerm)="searchTerm$.next($event)"
        (changeCollectionEnum)="collectionName$.next($event)"
      ></app-collection-search>
      <div class="flex flex-wrap" *ngIf="collection$ | async as collections">
        <app-collection-card
          *ngFor="let collection of collections"
          [collection]="collection"
        ></app-collection-card>
      </div>
    </div>
  `,
})
export class CardsComponent {
  private collectionService = inject(CollectionService);

  searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  collectionName$: BehaviorSubject<CollectionNameEnum> =
    new BehaviorSubject<CollectionNameEnum>(CollectionNameEnum.characters);

  collection$ = combineLatest([
    this.collectionName$,
    this.searchTerm$.pipe(debounce(() => interval(400))),
  ]).pipe(
    switchMap(([colection, term]) =>
      this.collectionService.getAllCollection(colection, term),
    ),
  );
}
