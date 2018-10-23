import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OperationListPage } from './operation-list';

@NgModule({
  declarations: [
    OperationListPage,
  ],
  imports: [
    IonicPageModule.forChild(OperationListPage),
  ],
})
export class OperationListPageModule {}
