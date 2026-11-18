import { Component } from '@angular/core';
import { Shell } from 'ngx-dashkit/light';

/** The whole layout (menu, header, footer, theme switch) is one component: <dk-shell /> */
@Component({ selector: 'app-root', imports: [Shell], templateUrl: './app.html' })
export class App {}
