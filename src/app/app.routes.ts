import { Routes } from '@angular/router';

/** Each route is lazy loaded. Every "route" of public/menu.json must exist here. The dummy pages all use the UnderConstruction page. */
const under = () => import('./pages/under-construction/under-construction').then(m => m.UnderConstruction);

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', title: 'Home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'projects', title: 'Projects', loadComponent: under },
  { path: 'more/team', title: 'Team', loadComponent: under },
  { path: 'more/billing', title: 'Billing', loadComponent: under },
  { path: 'more/help', title: 'Help center', loadComponent: under },
  { path: 'docs', title: 'Documents', loadComponent: () => import('./pages/docs/docs').then(m => m.Docs) },
  { path: 'settings', title: 'Settings', loadComponent: () => import('./pages/settings/settings').then(m => m.Settings) },
  { path: '**', redirectTo: 'home' },
];
