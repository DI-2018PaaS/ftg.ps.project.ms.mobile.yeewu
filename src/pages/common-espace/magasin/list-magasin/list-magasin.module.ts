import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListMagasinPage } from './list-magasin';

@NgModule({
  declarations: [
    ListMagasinPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMagasinPage),
  ],
})
export class ListMagasinPageModule {}
