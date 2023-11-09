import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeEnum, ThemeSignalService } from '../../signals/theme.signal';

@Component({
  standalone: true,
  selector: 'app-switcher-theme',
  templateUrl: './switcher-theme.component.html',
  styles: [
    `
      :host .switcher-theme-container {
        display: flex;
        align-items: center;
        margin-right: 16px;
      }

      :host label {
        margin: 0 8px;
      }
    `,
  ],
  imports: [FormsModule],
})
export class SwitcherThemeComponent {
  signalTheme = inject(ThemeSignalService);

  theme = this.signalTheme.theme;
  currTheme = this.signalTheme.currTheme;
  themeColorsDark = this.signalTheme.themeColorsDark;
  themeColorsLight = this.signalTheme.themeColorsLight;
  themeEnum = ThemeEnum;

  setTheme = (currTheme: ThemeEnum): void => this.theme.update(() => currTheme);
}
