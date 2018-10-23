import { ActiviteListPage } from './../activite-list/activite-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActiviteEditPage } from '../activite-edit/activite-edit';
import { ActiviteProvider } from '../../../../providers/domaines/activite/activite.provider';

/**
 * Generated class for the DetailActivitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-activite',
  templateUrl: 'detail-activite.html',
})
export class DetailActivitePage {
  activite: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public activiteProvider: ActiviteProvider) {
    this.activite = navParams.get('prod'); 
  }
  
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad ActiviteEditPage');
  }

  updateActivite(key:string, isActive: boolean) {
    this.activiteProvider.updateActivite(key, { active: isActive });
  }
 
  deleteActivite(key:string) {
    this.activiteProvider.deleteActivite(key);
    this.navCtrl.push(ActiviteListPage);
  }

  editActivite()
  {
    this.navCtrl.push(ActiviteEditPage, {prod :  this.activite});
  }
}
