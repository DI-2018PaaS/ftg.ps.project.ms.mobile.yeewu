import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActiviteEditPage } from './activite-edit';

@NgModule({
  declarations: [
    ActiviteEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ActiviteEditPage),
  ],
})
export class ActiviteEditPageModule {}
