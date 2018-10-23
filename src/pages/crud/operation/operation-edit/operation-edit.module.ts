import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OperationEditPage } from './operation-edit';

@NgModule({
  declarations: [
    OperationEditPage,
  ],
  imports: [
    IonicPageModule.forChild(OperationEditPage),
  ],
})
export class OperationEditPageModule {}
