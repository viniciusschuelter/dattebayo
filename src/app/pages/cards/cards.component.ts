import { Component, inject } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { CollectionNameEnum } from '../../interfaces/shared.interface';
import {
  BehaviorSubject,
  combineLatest,
  debounce,
  interval,
  scan,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  template: `
    <div class="mx-auto min-w-0 max-w-6xl px-6 pt-4 md:px-12">
      <app-collection-search
        (changeSearchTerm)="searchTerm$.next($event)"
        (changeCollectionEnum)="changeCollection($event)"
      ></app-collection-search>
      <div
        infiniteScroller
        class="flex flex-wrap"
        [disabled]="disablePagination || loading"
        *ngIf="collection$ | async as collections"
        (nextBatch)="goToPage(currPage + 1)"
      >
        <app-collection-card
          *ngFor="let collection of collections"
          [collection]="collection"
          [collectionName]="collectionName$ | async"
        ></app-collection-card>
      </div>
      <app-collection-loading *ngIf="loading"></app-collection-loading>
    </div>
  `,
})
export class CardsComponent {
  private collectionService = inject(CollectionService);

  currPage = 1;
  loading = true;
  disablePagination = false;
  changedCollection = true;
  searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  currentPage$: BehaviorSubject<number> = new BehaviorSubject<number>(
    this.currPage,
  );
  collectionName$: BehaviorSubject<CollectionNameEnum> =
    new BehaviorSubject<CollectionNameEnum>(CollectionNameEnum.characters);

  collection$ = combineLatest([
    this.collectionName$,
    this.currentPage$,
    this.searchTerm$.pipe(debounce(() => interval(400))),
  ]).pipe(
    tap(() => (this.loading = true)),
    switchMap(([collection, page, term]) =>
      this.collectionService
        .getAllCollection(collection, page, term)
        .pipe(tap(() => (this.loading = false))),
    ),
    scan((acc: any[], data: any) => {
      if (this.changedCollection) {
        this.changedCollection = false;
        return data;
      }
      this.disablePagination = !data?.length;
      return [...acc, ...data];
    }, []),
  );

  goToPage(page: number): void {
    this.currPage = page;
    this.currentPage$.next(this.currPage);
  }

  changeCollection(collection: CollectionNameEnum): void {
    this.changedCollection = true;
    this.collectionName$.next(collection);
    this.goToPage(1);
  }
}
