import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomaineEditPage } from './domaine-edit';

@NgModule({
  declarations: [
    DomaineEditPage,
  ],
  imports: [
    IonicPageModule.forChild(DomaineEditPage),
  ],
})
export class DomaineEditPageModule {}
