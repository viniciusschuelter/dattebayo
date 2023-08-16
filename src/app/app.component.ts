import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
  host: { class: 'block h-[100vh]' },
  selector: 'app-root',
  standalone: true,
  template: `
        <app-nav></app-nav>
        <main class="h-full">
          <router-outlet></router-outlet>
        </main>
        <app-footer></app-footer>
    `,
  imports: [RouterOutlet, NavComponent, FooterComponent],
})
export class AppComponent {}
