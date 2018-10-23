import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceEditPage } from './service-edit';

@NgModule({
  declarations: [
    ServiceEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceEditPage),
  ],
})
export class ServiceEditPageModule {}
