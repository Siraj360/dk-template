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

The UI package is **ngx-dashkit-light**. When it is on npm, `npm install` fetches it. Until then build the file in the DashKIT repository (`npm run pack:lib`, the files appear in `dist/packages`) and install it from there:
    npm install <path>/dist/packages/ngx-dashkit-light-<version>.tgz

The code imports only the free parts, from 'ngx-dashkit-light'. That needs no ECharts, no service worker and no PWA files.

## Show it on GitHub Pages
The site can live at https://<user>.github.io/<repository>/ , built by GitHub itself:
1. Create a GitHub repository and push this project to the **main** branch.
2. Repository, Settings, Pages, **Source: GitHub Actions**.
3. Every push to main runs `.github/workflows/deploy.yml`: it builds the site with the right base href, adds a 404.html (so a refresh on /docs works) and publishes it.

Try the same build on your computer:  `npm run build:pages`  then  `npx http-server -p 8080 dist/dk-template/browser`  (if your repository has another name, change it in the `build:pages` script).
The workflow runs `npm install`, so the UI package must be on npm. If it is not yet, copy the `.tgz` file(s) into a `vendor` folder, commit them and set the dependency to `file:vendor/<file>.tgz`.

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
