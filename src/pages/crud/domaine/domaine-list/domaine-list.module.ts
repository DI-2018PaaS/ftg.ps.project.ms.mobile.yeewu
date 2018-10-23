import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomaineListPage } from './domaine-list';

@NgModule({
  declarations: [
    DomaineListPage,
  ],
  imports: [
    IonicPageModule.forChild(DomaineListPage),
  ],
})
export class DomaineListPageModule {}
