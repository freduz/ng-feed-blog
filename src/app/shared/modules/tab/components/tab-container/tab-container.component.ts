import {
  AfterViewInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css'],
})
export class TabContainerComponent implements OnInit, AfterViewInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const activeTabs = this.tabs.filter((tab) => tab.isActive);
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(
      (tab) => ((tab.isActive = false), tab?.feedCmp?.activateCpm.next(false))
    );
    tab.isActive = true;
    tab?.feedCmp?.activateCpm.next(true);
  }
}
