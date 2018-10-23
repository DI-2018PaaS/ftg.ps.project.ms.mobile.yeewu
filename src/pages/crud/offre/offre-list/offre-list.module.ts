import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OffreListPage } from './offre-list';

@NgModule({
  declarations: [
    OffreListPage,
  ],
  imports: [
    IonicPageModule.forChild(OffreListPage),
  ],
})
export class OffreListPageModule {}
