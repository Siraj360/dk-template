import type { ThemeOption } from 'ngx-dashkit/light';

/**
 * THE 4 THEMES of this template: 2 light + 2 dark. Each id must match a class in src/styles.scss (html.theme-<id>).
 * bg and primary only draw the small preview in Settings and the chart colors.
 */
export const APP_THEMES: ThemeOption[] = [
  { id: 'light-a', name: 'Light Azure', dark: false, bg: '#fdfcff', primary: '#0061a4' },
  { id: 'light-b', name: 'Light Green', dark: false, bg: '#fdfcff', primary: '#006e2c' },
  { id: 'dark-a', name: 'Dark Azure', dark: true, bg: '#1a1c1e', primary: '#9ecaff' },
  { id: 'dark-b', name: 'Dark Violet', dark: true, bg: '#1a1c1e', primary: '#d0bcff' },
];
