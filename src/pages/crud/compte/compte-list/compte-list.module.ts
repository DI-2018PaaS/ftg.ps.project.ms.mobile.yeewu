import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompteListPage } from './compte-list';

@NgModule({
  declarations: [
    CompteListPage,
  ],
  imports: [
    IonicPageModule.forChild(CompteListPage),
  ],
})
export class CompteListPageModule {}
