import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompteEditPage } from './compte-edit';

@NgModule({
  declarations: [
    CompteEditPage,
  ],
  imports: [
    IonicPageModule.forChild(CompteEditPage),
  ],
})
export class CompteEditPageModule {}
