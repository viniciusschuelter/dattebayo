import { Component } from '@angular/core';

@Component({
  host: { class: 'block h-[100vh]' },
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
    <main class="h-full">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
})
export class AppComponent {}
