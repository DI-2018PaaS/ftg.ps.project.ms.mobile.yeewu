import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailProduitByActivitePage } from './detail-produit-by-activite';

@NgModule({
  declarations: [
    DetailProduitByActivitePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailProduitByActivitePage),
  ],
})
export class DetailProduitByActivitePageModule {}
