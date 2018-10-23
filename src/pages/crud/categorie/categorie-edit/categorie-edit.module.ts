import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategorieEditPage } from './categorie-edit';

@NgModule({
  declarations: [
    CategorieEditPage,
  ],
  imports: [
    IonicPageModule.forChild(CategorieEditPage),
  ],
})
export class CategorieEditPageModule {}
