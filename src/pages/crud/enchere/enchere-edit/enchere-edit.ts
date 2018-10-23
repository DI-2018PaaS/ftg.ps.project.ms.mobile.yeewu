import { DetailEncherePage } from './../detail-enchere/detail-enchere';
import { EnchereListPage } from './../enchere-list/enchere-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnchereProvider } from '../../../../providers/msencheresoffres/enchere/enchere.provider';
/**
 * Generated class for the EnchereEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enchere-edit',
  templateUrl: 'enchere-edit.html',
})
export class EnchereEditPage {

   enchere: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public enchereProvider: EnchereProvider) {
    this.enchere = navParams.get('prod'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnchereEditPage');
  }


  updateEnchere() {
    this.enchereProvider.updateEnchere( this.enchere.key, { active: true });
    this.navCtrl.push(DetailEncherePage,{prod: this.enchere});
  }
 

  deleteEnchere(key:string) {
    this.enchereProvider.deleteEnchere(key);
    this.navCtrl.push(EnchereListPage);
  }
  
}

