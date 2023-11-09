import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SwitcherThemeComponent } from '../../components/switcher-theme/switcher-theme.component';

@Component({
  host: { class: 'block h-[8rem]' },
  selector: 'app-nav',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink, SwitcherThemeComponent],
  template: `
    <nav
      class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
    >
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="#" class="flex items-center ">
          <img
            src="assets/images/logo.png"
            class="h-[6rem]"
            alt="Dattebayo Logo"
          />
        </a>
        <div class="flex md:order-2">
          <app-switcher-theme></app-switcher-theme>
          <a
            href="https://github.com/viniciusschuelter/dattebayo"
            class="text-gray-400 hover:text-gray-900 dark:hover:text-white pr-3"
          >
            <svg
              class="w-8 h-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">GitHub account</span>
          </a>
          <button
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            (click)="openedMenu = true"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between w-full md:flex md:w-auto md:order-1"
          [ngClass]="{ hidden: !openedMenu }"
        >
          <ul
            class="date-font flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li *ngFor="let item of menuItems">
              <a
                [routerLink]="[item.link]"
                [class]="menuItemClass"
                (click)="openedMenu = false"
                >{{ item.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
})
export class NavComponent {
  menuItems: { name: string; link: string }[] = [
    { name: 'About', link: '/' },
    { name: 'Docs', link: '/docs' },
    { name: 'Cards', link: '/cards' },
    { name: 'Support', link: '/support' },
  ];

  openedMenu = false;

  menuItemClass =
    'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 md:dark:hover:text-orange-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';
}
