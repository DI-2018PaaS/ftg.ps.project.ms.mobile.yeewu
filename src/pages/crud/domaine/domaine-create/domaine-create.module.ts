import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomaineCreatePage } from './domaine-create';

@NgModule({
  declarations: [
    DomaineCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(DomaineCreatePage),
  ],
})
export class DomaineCreatePageModule {}
