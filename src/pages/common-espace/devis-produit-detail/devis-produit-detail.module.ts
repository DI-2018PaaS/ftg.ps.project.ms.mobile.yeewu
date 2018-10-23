import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevisProduitDetailPage } from './devis-produit-detail';

@NgModule({
  declarations: [
    DevisProduitDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DevisProduitDetailPage),
  ],
})
export class DevisProduitDetailPageModule {}
