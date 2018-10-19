import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateFournisseurPage } from './create-fournisseur';

@NgModule({
  declarations: [
    CreateFournisseurPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateFournisseurPage),
  ],
})
export class CreateFournisseurPageModule {}
