import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoleListPage } from './role-list';

@NgModule({
  declarations: [
    RoleListPage,
  ],
  imports: [
    IonicPageModule.forChild(RoleListPage),
  ],
})
export class RoleListPageModule {}
