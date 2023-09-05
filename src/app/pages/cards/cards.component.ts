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
    <div class="mx-auto min-w-0 max-w-6xl px-4 pt-4 md:px-12">
      <app-collection-search
        (changeSearchTerm)="searchTerm$.next($event)"
        (changeCollectionEnum)="resetObservable(); collectionName$.next($event)"
      ></app-collection-search>
      <div
        infiniteScroller
        class="flex flex-wrap justify-center gap-8"
        [disablePagination]="disablePagination || loading"
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
  pageSize = 20;
  reset = true;
  loading = true;
  disablePagination = false;
  searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  currentPage$: BehaviorSubject<number> = new BehaviorSubject<number>(
    this.currPage,
  );
  collectionName$: BehaviorSubject<CollectionNameEnum> =
    new BehaviorSubject<CollectionNameEnum>(CollectionNameEnum.characters);

  collection$ = combineLatest([
    this.collectionName$,
    this.currentPage$,
    this.searchTerm$.pipe(
      debounce(() => interval(400)),
      tap(() => this.resetObservable()),
    ),
  ]).pipe(
    tap(() => (this.loading = true)),
    switchMap(([collection, page, term]) =>
      this.collectionService
        .getAllCollection(collection, page, term)
        .pipe(tap(() => (this.loading = false))),
    ),
    scan((acc: any[], data: any) => {
      if (this.reset) {
        this.reset = false;
        return data;
      }
      this.disablePagination = data?.length !== this.pageSize;
      return [...acc, ...data];
    }, []),
  );

  goToPage(page: number): void {
    this.currPage = page;
    this.currentPage$.next(this.currPage);
  }

  resetObservable(): void {
    this.reset = true;
    this.disablePagination = false;
    this.goToPage(1);
  }
}
