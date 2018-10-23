import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActiviteCreatePage } from './activite-create';

@NgModule({
  declarations: [
    ActiviteCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ActiviteCreatePage),
  ],
})
export class ActiviteCreatePageModule {}
