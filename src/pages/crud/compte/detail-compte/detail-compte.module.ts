import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailComptePage } from './detail-compte';

@NgModule({
  declarations: [
    DetailComptePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailComptePage),
  ],
})
export class DetailComptePageModule {}
