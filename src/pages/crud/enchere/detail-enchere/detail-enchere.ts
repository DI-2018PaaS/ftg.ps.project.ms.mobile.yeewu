import { EnchereListPage } from './../enchere-list/enchere-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnchereEditPage } from '../enchere-edit/enchere-edit';
import { EnchereProvider } from '../../../../providers/msencheresoffres/enchere/enchere.provider';

/**
 * Generated class for the DetailEncherePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-enchere',
  templateUrl: 'detail-enchere.html',
})
export class DetailEncherePage {
  enchere: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public enchereProvider: EnchereProvider) {
    this.enchere = navParams.get('prod'); 
  }
  
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad EnchereEditPage');
  }

  updateEnchere(key:string, isActive: boolean) {
    this.enchereProvider.updateEnchere(key, { active: isActive });
  }
 
  deleteEnchere(key:string) {
    this.enchereProvider.deleteEnchere(key);
    this.navCtrl.push(EnchereListPage);
  }

  editEnchere()
  {
    this.navCtrl.push(EnchereEditPage, {prod :  this.enchere});
  }
}
