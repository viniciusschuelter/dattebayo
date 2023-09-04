import { Component, Input } from '@angular/core';
import { CharacterInterface } from '../../interfaces/character.interface';
import { CollectionNameEnum } from '../../interfaces/shared.interface';

@Component({
  standalone: true,
  selector: 'app-collection-card',
  template: `
    <div class="flex-shrink-0 w-[320px] h-100 m-3 rounded-3xl relative">
      <img
        class="w-full h-full rounded-3xl"
        [src]="
          collection.images && collection.images[0]
            ? collection.images[0]
            : 'assets/images/' + collectionName + '.jpg'
        "
        alt="img"
      />
      <div
        class="w-full absolute bottom-0 p-4 text-white backdrop-blur-lg rounded-b-3xl"
      >
        <div class="flex justify-between text-xl">
          <h1>{{ collection.name }}</h1>
          <span class="flex"> </span>
        </div>
        <p class="text-base"></p>
      </div>
    </div>
  `,
})
export class CollectionCardComponent {
  @Input({ required: true }) collection!: CharacterInterface;
  @Input({ required: true }) collectionName!: CollectionNameEnum | null;
}
