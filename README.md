# My App

A web template made with **DashKIT** components (Angular 22, standalone components, no NgModules).

## [https://siraj360.github.io/dk-template/](https://siraj360.github.io/dk-template/)

## Run it
    npm install
    npm start                # http://localhost:4200
    npm run build            # production build

The UI package is **ngx-dashkit**. If it is not on npm yet, install it from the file you built:  npm install ../ngx-dashkit-<version>.tgz

The code imports only the free parts, from 'ngx-dashkit-light'. That needs no ECharts, no service worker and no PWA files.

## What is inside
| File | What it does |
|---|---|
| public/menu.json | the menu: Home, a dummy page, a dropdown with 3 dummy links, Documents, Settings |
| src/app/app.config.ts | provideDashkit(...): brand name, themes, storage key |
| src/app/app.themes.ts + src/styles.scss | the 4 themes (2 light + 2 dark) |
| src/app/app.routes.ts | the pages (lazy loaded) |
| src/app/pages/* | home, under-construction (used by the dummy pages), docs, settings |

The **Documents** page of the running app explains the menu, the brand, the themes and the settings. Start there.
