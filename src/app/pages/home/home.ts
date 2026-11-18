import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { HeroBanner, Logo, Panel, dashkitInfo } from 'ngx-dashkit-light';

@Component({ selector: 'app-home', imports: [HeroBanner, Logo, Panel, MatButtonModule, MatIconModule, RouterLink], templateUrl: './home.html' })
export class Home {
  /** the installed UI package: the version comes from the package itself */
  protected info = dashkitInfo();
  protected packages = [{"name":"ngx-dashkit-light","url":"https://www.npmjs.com/package/ngx-dashkit-light","cmd":"npm install ngx-dashkit-light","note":""}];
  protected repoUrl = 'https://github.com/Siraj360/dk-template';
  protected siteUrl = 'https://siraj360.github.io/dk-template/';
}
