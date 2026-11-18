import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { HeroBanner, Logo, Panel } from 'ngx-dashkit/light';

@Component({ selector: 'app-home', imports: [HeroBanner, Logo, Panel, MatButtonModule, MatIconModule, RouterLink], templateUrl: './home.html' })
export class Home {}
