import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnchereListPage } from './enchere-list';

@NgModule({
  declarations: [
    EnchereListPage,
  ],
  imports: [
    IonicPageModule.forChild(EnchereListPage),
  ],
})
export class EnchereListPageModule {}
