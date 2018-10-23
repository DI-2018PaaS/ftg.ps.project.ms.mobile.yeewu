import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceCreatePage } from './service-create';

@NgModule({
  declarations: [
    ServiceCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceCreatePage),
  ],
})
export class ServiceCreatePageModule {}
