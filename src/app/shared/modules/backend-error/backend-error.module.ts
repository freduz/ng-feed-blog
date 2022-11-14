import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackEndErrorComponent } from './components/back-end-error/back-end-error.component';

@NgModule({
  declarations: [BackEndErrorComponent],
  imports: [CommonModule],
  exports: [BackEndErrorComponent],
})
export class BackendErrorModule {}
