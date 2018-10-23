import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateMagasinPage } from './create-magasin';

@NgModule({
  declarations: [
    CreateMagasinPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateMagasinPage),
  ],
})
export class CreateMagasinPageModule {}
