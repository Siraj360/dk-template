# Angular + Material Starter Kit

**DkTemplate**: a web template made with **DashKIT** components (Angular 22, standalone components, no NgModules).

## Links
- Live site: https://siraj360.github.io/dk-template/
- Repository: https://github.com/Siraj360/dk-template
- UI package on npm: https://www.npmjs.com/package/ngx-dashkit-light


## Run it
    npm install
    npm start                # http://localhost:4200
    npm run build            # production build


## What is inside
| File | What it does |
|---|---|
| public/menu.json | the menu: Home, a dummy page, a dropdown with 3 dummy links, Documents, Settings |
| src/app/app.config.ts | provideDashkit(...): brand name, themes, storage key |
| src/app/app.themes.ts + src/styles.scss | the 4 themes (2 light + 2 dark) |
| src/app/app.routes.ts | the pages (lazy loaded) |
| src/app/pages/* | home, under-construction (used by the dummy pages), docs, settings |
| .github/workflows/deploy.yml | builds and publishes the site on GitHub Pages |

The **Documents** page of the running app explains the menu, the brand, the themes and the settings. Start there.
