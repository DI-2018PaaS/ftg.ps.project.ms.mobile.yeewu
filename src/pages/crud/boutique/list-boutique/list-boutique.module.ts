import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListBoutiquePage } from './list-boutique';

@NgModule({
  declarations: [
    ListBoutiquePage,
  ],
  imports: [
    IonicPageModule.forChild(ListBoutiquePage),
  ],
})
export class ListBoutiquePageModule {}
