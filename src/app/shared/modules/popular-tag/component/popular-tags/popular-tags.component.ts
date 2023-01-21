import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IPopularTag } from 'src/app/shared/types/popular-tag.interface';
import { PopularTagService } from '../../services/popular-tag.service';
import { getPopularTagsAction } from '../../store/actions/popular-tag.action';
import { isLoadingSelector, tagsSelector } from '../../store/selector';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.css'],
})
export class PopularTagsComponent implements OnInit {
  tags$!: Observable<IPopularTag[] | null>;
  isLoading$!: Observable<boolean>;
  constructor(
    private store: Store<IAppState>,
    private tagsService: PopularTagService
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.initialiseValues();
  }

  initialiseValues() {
    this.tags$ = this.store.pipe(select(tagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  fetchData() {
    this.store.dispatch(getPopularTagsAction());
  }

  selectTag(tag: string) {
    this.tagsService.tagSelected$ = tag;
  }
}
