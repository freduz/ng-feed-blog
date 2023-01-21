import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabContainerComponent } from './components/tab-container/tab-container.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TabComponent, TabContainerComponent],
  exports: [TabComponent, TabContainerComponent],
})
export class TabModule {
  constructor() {}
}
