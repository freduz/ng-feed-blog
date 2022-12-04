import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TagListComponent } from './components/taglist/taglist.component';

@NgModule({
  declarations: [TagListComponent],
  providers: [],
  imports: [CommonModule],
  exports: [TagListComponent],
})
export class TagListModule {}
