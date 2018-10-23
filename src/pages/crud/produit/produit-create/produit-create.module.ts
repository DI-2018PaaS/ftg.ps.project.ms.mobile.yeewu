import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProduitCreatePage } from './produit-create';

@NgModule({
  declarations: [
    ProduitCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ProduitCreatePage),
  ],
})
export class ProduitCreatePageModule {}
