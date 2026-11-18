import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { EmptyState, PageTitle, Panel } from 'ngx-dashkit/light';

/** An empty page for something you have not built yet. The title and the icon come from the menu item of the current page. */
@Component({ selector: 'app-under-construction', imports: [PageTitle, Panel, EmptyState, MatButtonModule, RouterLink], templateUrl: './under-construction.html' })
export class UnderConstruction {}
