import { Component, inject } from '@angular/core';
import { CharacterService } from "../../services/character.service";

@Component({
  selector: 'app-character',
  template: `
        <ng-container *ngIf="characters$ | async as characters">


        </ng-container>
    `,
})
export class CharacterComponent {

  private characterService = inject(CharacterService);
  characters$ = this.characterService.getAllCharacters();

  constructor() {
    console.log('here')
  }
}
