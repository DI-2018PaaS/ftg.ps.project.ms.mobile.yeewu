import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OperationCreatePage } from './operation-create';

@NgModule({
  declarations: [
    OperationCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(OperationCreatePage),
  ],
})
export class OperationCreatePageModule {}
