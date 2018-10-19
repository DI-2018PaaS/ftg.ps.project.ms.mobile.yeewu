import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListBoutiquePage } from '../list-boutique/list-boutique';
import { EditBoutiquePage } from '../edit-boutique/edit-boutique';
import { BoutiqueProvider } from '../../../../providers/msmagasindomains/boutique/boutique';

/**
 * Generated class for the DetailBoutiquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-boutique',
  templateUrl: 'detail-boutique.html',
})
export class DetailBoutiquePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public boutiqueProvider: BoutiqueProvider) {
    this.boutique = navParams.get('boutic'); 
  }
  
  boutique: any;


  ionViewDidLoad() {
    console.log('ionViewDidLoad BoutiqueEditPage');
  }

  updateBoutique(key:string, isActive: boolean) {
    this.boutiqueProvider.updateBoutique(key, { active: isActive });
  }
 
  deleteBoutique(key:string) {
    this.boutiqueProvider.deleteBoutique(key);
    this.navCtrl.push(ListBoutiquePage);
  }

  editBoutique()
  {
    this.navCtrl.push(EditBoutiquePage, {boutic :  this.boutique});
  }
}
