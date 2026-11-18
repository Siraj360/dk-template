import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideDashkit } from 'ngx-dashkit-light';
import { APP_THEMES } from './app.themes';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),                                   // the menu is loaded from public/menu.json
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideDashkit({ themes: APP_THEMES, storageKey: 'dk-template.settings', brand: { short: 'My App', name: 'My App', icon: 'widgets' } }),
  ],
};
