import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailBoutiquePage } from '../detail-boutique/detail-boutique';
import { ListBoutiquePage } from '../list-boutique/list-boutique';
import { BoutiqueProvider } from '../../../../../providers/msmagasindomains/block_md_int/boutique/boutique';

/**
 * Generated class for the EditBoutiquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-boutique',
  templateUrl: 'edit-boutique.html',
})
export class EditBoutiquePage {

  boutique: any;

 constructor(public navCtrl: NavController, public navParams: NavParams,public boutiqueProvider:BoutiqueProvider) {
   this.boutique = navParams.get('boutic'); 
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoadBoutiqueEditPage');
 }

 updateBoutique() {
   this.boutiqueProvider.updateBoutique( this.boutique.key, { active: true });
   this.navCtrl.push(DetailBoutiquePage,{boutic: this.boutique});

 }

 deleteBoutique(key:string) {
   this.boutiqueProvider.deleteBoutique(key);
   this.navCtrl.push(ListBoutiquePage);
 }
}
