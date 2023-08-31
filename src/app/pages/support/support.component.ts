import { Component } from '@angular/core';

@Component({
  templateUrl: 'support.component.html',
  styles: [
    `
      :host {
        h2,
        h3 {
          margin: 0 !important;
        }
      }
    `,
  ],
})
export class SupportComponent {}
