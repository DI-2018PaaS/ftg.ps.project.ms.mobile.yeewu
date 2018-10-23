import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailOperationPage } from './detail-operation';

@NgModule({
  declarations: [
    DetailOperationPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailOperationPage),
  ],
})
export class DetailOperationPageModule {}
