import {
  computed,
  effect,
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

@Injectable({ providedIn: 'root' })
export class ThemeSignalService {
  theme = signal<ThemeEnum>(ThemeEnum.light);
  platformId = inject(PLATFORM_ID);

  currTheme = computed(() => {
    if (isPlatformBrowser(this.platformId)) {
      document?.documentElement?.setAttribute('class', this.theme());
    }
    return this.theme();
  });

  constructor() {
    effect(() => console.log('Current theme is: ' + this.theme()));
  }

  themeColorsDark = computed(() => {
    return {
      bgColor: this.theme() === ThemeEnum.light ? '#ffffff' : '#11191f',
      iconColor: this.theme() === ThemeEnum.dark ? '#fffb00' : '#dfdfdf',
    };
  });

  themeColorsLight = computed(() => {
    return {
      bgColor: this.theme() === ThemeEnum.light ? '#ffffff' : '#11191f',
      iconColor: this.theme() === ThemeEnum.light ? '#ff7300' : '#374956',
    };
  });
}
