import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule],
  providers: [],
  exports: [BannerComponent],
})
export class BannerModule {}
