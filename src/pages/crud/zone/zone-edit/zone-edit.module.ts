import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneEditPage } from './zone-edit';

@NgModule({
  declarations: [
    ZoneEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneEditPage),
  ],
})
export class ZoneEditPageModule {}
