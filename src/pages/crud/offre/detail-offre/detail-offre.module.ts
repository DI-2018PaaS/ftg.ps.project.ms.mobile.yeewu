import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailOffrePage } from './detail-offre';

@NgModule({
  declarations: [
    DetailOffrePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailOffrePage),
  ],
})
export class DetailOffrePageModule {}
