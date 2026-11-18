import { Component } from '@angular/core';
import { PageTitle, Panel } from 'ngx-dashkit/light';

const MENU = `// public/menu.json: an array. Order = order in the menu.
[
  { "text": "Home", "icon": "home", "route": "home" },
  { "text": "More", "icon": "apps", "children": [
      { "text": "Team", "icon": "groups", "route": "more/team" } ] },
  { "text": "Settings", "icon": "settings", "route": "settings" }
]`;
const BRAND = `// src/app/app.config.ts
provideDashkit({
  themes: APP_THEMES,
  storageKey: 'dk-template.settings',                 // where the choices of the Settings page are saved
  brand: { short: 'My App', name: 'My App Ltd', icon: 'widgets' },
})
// short = text next to the logo   name = full name (footer)   icon = any Material Symbols name`;
const THEMES = `// 1) src/styles.scss: one block per theme, with a Material palette
html.theme-light-a { @include mat.theme((color: (theme-type: light, primary: mat.$azure-palette, tertiary: mat.$blue-palette))); }
// 2) src/app/app.themes.ts: the same id, a name and two preview colors
{ id: 'light-a', name: 'Light Azure', dark: false, bg: '#fdfcff', primary: '#0061a4' }
// The template has 4: 2 light + 2 dark. Palettes: azure, blue, cyan, green, violet, rose, orange, magenta, red, yellow.`;
const SETTINGS = `const settings = inject(SettingsService);
settings.theme.set('dark-a');                 // change the theme (saved in the browser)
settings.menuPosition.set('top');             // 'auto' | 'top' | 'left' | 'right' | 'bottom'
settings.showHeader.set(false);               // header = breadcrumb of the selected menu
settings.stickyFooter.set(true);              // footer always visible at the bottom`;
const PAGE = `// 1) src/app/pages/reports/reports.ts
@Component({ selector: 'app-reports', imports: [PageTitle, Panel], templateUrl: './reports.html' })
export class Reports {}
// 2) src/app/app.routes.ts
{ path: 'reports', title: 'Reports', loadComponent: () => import('./pages/reports/reports').then(m => m.Reports) }
// 3) public/menu.json
{ "text": "Reports", "icon": "bar_chart", "route": "reports" }`;

/** The Documents page: the short API of this template. */
@Component({ selector: 'app-docs', imports: [PageTitle, Panel], templateUrl: './docs.html' })
export class Docs {
  protected code = { MENU, BRAND, THEMES, SETTINGS, PAGE };
  protected menuFields = [['text', 'string', 'The label (required).'], ['icon', 'string', 'A Material Symbols icon name (required).'], ['route', 'string', 'The route path, for example reports. Leave it out for a group.'], ['children', 'MenuItem[]', 'Makes a dropdown (a popup, or an accordion in the wide side menu). One level only.']];
  protected configFields = [['themes', 'ThemeOption[]', 'The themes of the theme switch. Here: 4.'], ['storageKey', 'string', 'localStorage key for the choices of the user.'], ['menuUrl', 'string', 'Where the menu is loaded from. Default menu.json.'], ['brand', '{ short, name, icon }', 'Logo text, full name, icon.']];
}
