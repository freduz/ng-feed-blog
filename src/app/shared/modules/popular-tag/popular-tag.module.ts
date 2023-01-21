import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PopularTagsComponent } from './component/popular-tags/popular-tags.component';
import { PopularTagService } from './services/popular-tag.service';
import { GetPopularTagsEffects } from './store/effects/popular-tag.effects';
import { reducers, tagsFeatureKey } from './store/reducer';

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(tagsFeatureKey, reducers),
    EffectsModule.forFeature([GetPopularTagsEffects]),
  ],
  providers: [PopularTagService],
  exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
