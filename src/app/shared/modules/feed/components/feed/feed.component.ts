import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { parseUrl, stringify } from 'query-string';

import { IAppState } from 'src/app/shared/types/appState.interface';
import { IArticle } from 'src/app/shared/types/article.interface';
import { getFeedAction } from '../../store/actions/get-feed.action';
import {
  feedCount,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit, OnChanges {
  @Input('url') feedUrl!: string;
  activateCpm: Subject<boolean> = new Subject();

  baseUrl: string = '';
  currentPage!: number;
  limit: number = 10;
  totalCount$!: Observable<number | undefined>;
  feeds$!: Observable<IArticle[] | undefined>;
  isLoading$!: Observable<boolean>;
  queryParamsSubscription!: Subscription;

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateCpm.subscribe((status) => {
      if (status) {
        this.initializeLinsteners();
        this.fetchData();
        this.baseUrl = this.router.url.split('?')[0];
        console.log(this.activateCpm);

        this.feeds$ = this.store.pipe(select(feedSelector));
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.totalCount$ = this.store.pipe(select(feedCount));
      }
    });
  }

  initializeLinsteners() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = params['page'] || '1';
        this.fetchData();
      }
    );
  }

  fetchData(): void {
    console.log('inside');
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.feedUrl);
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    const combinedUrl = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getFeedAction({ url: combinedUrl }));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes['activateCpm'].currentValue);
  }
}
