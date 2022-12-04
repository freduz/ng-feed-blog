import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';
import { PopularTagService } from 'src/app/shared/modules/popular-tag/services/popular-tag.service';
import { IAppState } from 'src/app/shared/types/appState.interface';

@Component({
  selector: 'mc-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.css'],
})
export class GlobalFeedComponent implements OnInit {
  isLoggedIn$!: Observable<boolean | null>;
  selectedTag$!: Observable<string>;
  constructor(
    private store: Store<IAppState>,
    private tagservice: PopularTagService
  ) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.selectedTag$ = this.tagservice.selectedTag$;
    this.selectedTag$.subscribe(console.log);
  }
}
