import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProduitEditPage } from './produit-edit';

@NgModule({
  declarations: [
    ProduitEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ProduitEditPage),
  ],
})
export class ProduitEditPageModule {}
