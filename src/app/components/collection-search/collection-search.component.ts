import { Component, EventEmitter, Output } from '@angular/core';
import {
  CollectionNameEnum,
  collectionNames,
} from '../../interfaces/shared.interface';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-collection-search',
  imports: [NgFor],
  template: `
    <div class="relative mt-2 rounded-md shadow-sm mb-8">
      <input
        type="text"
        name="collection"
        id="collection"
        [value]=""
        (keydown)="onChangeSearch($event.target)"
        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
        placeholder="Search in this collection"
      />
      <div class="absolute inset-y-0 right-0 flex items-center">
        <label for="currency" class="sr-only">Currency</label>
        <select
          #collections
          class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm"
          (change)="changeCollectionEnum.emit(collections.value)"
        >
          <option
            *ngFor="let option of collectionNamesOptions"
            [value]="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
    </div>
  `,
})
export class CollectionSearchComponent {
  @Output() changeCollectionEnum: EventEmitter<any> = new EventEmitter<any>();
  @Output() changeSearchTerm: EventEmitter<string> = new EventEmitter<string>();
  collectionName: CollectionNameEnum = CollectionNameEnum.characters;
  collectionNamesOptions = collectionNames;

  onChangeSearch({ value }: any): void {
    this.changeSearchTerm.emit(value);
  }
}
