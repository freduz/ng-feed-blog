import {
  AfterViewInit,
  Component,
  ContentChild,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FeedComponent } from '../../../feed/components/feed/feed.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent implements OnInit, AfterViewInit {
  @Input() tabTitle: string = '';
  @Input() isActive: boolean = false;

  @ContentChild(FeedComponent) feedCmp!: FeedComponent;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
