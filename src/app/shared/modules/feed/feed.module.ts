import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PaginationModule } from '../pagination/pagination.module';
import { TagListModule } from '../taglist/taglist.module';
import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';
import { GetFeedEffect } from './store/effects/get-feed.effects';
import { feedFeatureKey, reducers } from './store/reducers';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(feedFeatureKey, reducers),
    EffectsModule.forFeature([GetFeedEffect]),
    PaginationModule,
    TagListModule,
  ],
  providers: [FeedService],
  exports: [FeedComponent],
})
export class FeedModule {}
