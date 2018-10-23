import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListMagasinPage } from '../list-magasin/list-magasin';
import { EditMagasinPage } from '../edit-magasin/edit-magasin';
import { MagasinProvider } from '../../../../providers/msmagasindomains/magasin/magasin.provider';

/**
 * Generated class for the DetailMagasinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-magasin',
  templateUrl: 'detail-magasin.html',
})
export class DetailMagasinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public magasinProvider: MagasinProvider) {
    this.magasin = navParams.get('mag'); 
  }
  
  magasin: any;


  ionViewDidLoad() {
    console.log('ionViewDidLoad MagasinEditPage');
  }

  updateMagasin(key:string, isActive: boolean) {
    this.magasinProvider.updateMagasin(key, { active: isActive });
  }
 
  deleteMagasin(key:string) {
    this.magasinProvider.deleteMagasin(key);
    this.navCtrl.push(ListMagasinPage);
  }

  editMagasin()
  {
    this.navCtrl.push(EditMagasinPage, {mag :  this.magasin});
  }
}
