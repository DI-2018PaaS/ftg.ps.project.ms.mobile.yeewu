import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategorieCreatePage } from './categorie-create';

@NgModule({
  declarations: [
    CategorieCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(CategorieCreatePage),
  ],
})
export class CategorieCreatePageModule {}
