import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompteCreatePage } from './compte-create';

@NgModule({
  declarations: [
    CompteCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(CompteCreatePage),
  ],
})
export class CompteCreatePageModule {}
