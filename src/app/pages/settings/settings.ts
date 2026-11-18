import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LayoutService, MenuPosition, MetricOption, MetricToggle, PageTitle, Panel, SettingsService, ThemePicker, dashkitInfo } from 'ngx-dashkit-light';

@Component({ selector: 'app-settings', imports: [PageTitle, Panel, ThemePicker, MetricToggle, MatButtonModule, MatIconModule, MatSlideToggleModule], templateUrl: './settings.html' })
export class Settings {
  protected s = inject(SettingsService);
  private layout = inject(LayoutService);
  protected info = dashkitInfo();               // which UI package and version is installed
  /** "Bottom" only exists on a phone */
  protected positions = computed<MetricOption[]>(() => {
    const list: MetricOption[] = [{ key: 'auto', label: 'Auto', icon: 'auto_awesome' }, { key: 'top', label: 'Top', icon: 'vertical_align_top' }, { key: 'left', label: 'Left', icon: 'align_horizontal_left' }, { key: 'right', label: 'Right', icon: 'align_horizontal_right' }];
    return this.layout.screen() === 'small' ? [...list, { key: 'bottom', label: 'Bottom', icon: 'vertical_align_bottom' }] : list;
  });
  protected setPosition(key: string) { this.s.menuPosition.set(key as MenuPosition); }
}
