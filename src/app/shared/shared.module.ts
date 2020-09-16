import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { loadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    loadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    loadingSpinnerComponent,
    AlertComponent
  ]
})
export class SharedModule { }
