import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoleCreatePage } from './role-create';

@NgModule({
  declarations: [
    RoleCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(RoleCreatePage),
  ],
})
export class RoleCreatePageModule {}
