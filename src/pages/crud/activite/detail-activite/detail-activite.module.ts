import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailActivitePage } from './detail-activite';

@NgModule({
  declarations: [
    DetailActivitePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailActivitePage),
  ],
})
export class DetailActivitePageModule {}
