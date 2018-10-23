import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailDomainePage } from './detail-domaine';

@NgModule({
  declarations: [
    DetailDomainePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailDomainePage),
  ],
})
export class DetailDomainePageModule {}
