import { Component, EnvironmentInjector } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(public environmentInjector: EnvironmentInjector) {}
}
