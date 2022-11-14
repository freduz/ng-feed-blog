import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopBarComponent } from './components/topbar/topbar.component';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule],
  providers: [],
  exports: [TopBarComponent],
})
export class TopBarModule {
  constructor() {}
}
