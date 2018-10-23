import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OffreCreatePage } from './offre-create';

@NgModule({
  declarations: [
    OffreCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(OffreCreatePage),
  ],
})
export class OffreCreatePageModule {}
