import { DetailActivitePage } from './../detail-activite/detail-activite';
import { ActiviteListPage } from './../activite-list/activite-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActiviteProvider } from '../../../../providers/domaines/activite/activite.provider';


/**
 * Generated class for the ActiviteEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activite-edit',
  templateUrl: 'activite-edit.html',
})
export class ActiviteEditPage {

   activite: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public activiteProvider: ActiviteProvider) {
    this.activite = navParams.get('prod'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActiviteEditPage');
  }


  updateActivite() {
    this.activiteProvider.updateActivite( this.activite.key, { active: true });
    this.navCtrl.push(DetailActivitePage,{prod: this.activite});
  }
 

  deleteActivite(key:string) {
    this.activiteProvider.deleteActivite(key);
    this.navCtrl.push(ActiviteListPage);
  }
  
}

