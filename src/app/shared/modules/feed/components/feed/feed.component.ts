import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { getFeedAction } from '../../store/actions/get-feed.action';
import { isLoadingSelector } from '../../store/selectors';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  @Input('url') feedUrl!: string;
  constructor(
    private store: Store<IAppState>,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getFeedAction({ url: this.feedUrl }));
    this.store.pipe(select(isLoadingSelector)).subscribe((loading: boolean) => {
      if (loading) this.spinner.show();
      else {
        this.spinner.hide();
      }
    });
  }
}
