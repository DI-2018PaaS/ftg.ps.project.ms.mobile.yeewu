import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActiviteListPage } from './activite-list';

@NgModule({
  declarations: [
    ActiviteListPage,
  ],
  imports: [
    IonicPageModule.forChild(ActiviteListPage),
  ],
})
export class ActiviteListPageModule {}
