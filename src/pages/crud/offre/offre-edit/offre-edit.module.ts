import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OffreEditPage } from './offre-edit';

@NgModule({
  declarations: [
    OffreEditPage,
  ],
  imports: [
    IonicPageModule.forChild(OffreEditPage),
  ],
})
export class OffreEditPageModule {}
