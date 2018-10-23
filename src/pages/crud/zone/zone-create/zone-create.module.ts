import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneCreatePage } from './zone-create';

@NgModule({
  declarations: [
    ZoneCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneCreatePage),
  ],
})
export class ZoneCreatePageModule {}
