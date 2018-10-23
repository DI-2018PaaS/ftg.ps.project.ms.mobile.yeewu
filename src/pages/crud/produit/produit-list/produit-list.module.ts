import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProduitListPage } from './produit-list';

@NgModule({
  declarations: [
    ProduitListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProduitListPage),
  ],
})
export class ProduitListPageModule {}
