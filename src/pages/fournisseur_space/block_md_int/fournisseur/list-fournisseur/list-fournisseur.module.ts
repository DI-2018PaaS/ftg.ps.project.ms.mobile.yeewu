import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListFournisseurPage } from './list-fournisseur';

@NgModule({
  declarations: [
    ListFournisseurPage,
  ],
  imports: [
    IonicPageModule.forChild(ListFournisseurPage),
  ],
})
export class ListFournisseurPageModule {}
