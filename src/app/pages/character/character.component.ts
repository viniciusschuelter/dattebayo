import { Component, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  template: `
    <div class="flex flex-wrap" *ngIf="characters$ | async as characters">
      <app-character-card
        *ngFor="let character of characters"
        [character]="character"
      ></app-character-card>
    </div>
  `,
})
export class CharacterComponent {
  private characterService = inject(CharacterService);
  characters$ = this.characterService.getAllCharacters();
}
