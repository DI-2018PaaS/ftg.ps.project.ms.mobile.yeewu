import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListMagasinPage } from '../list-magasin/list-magasin';
import { DetailMagasinPage } from '../detail-magasin/detail-magasin';
import { MagasinProvider } from '../../../../../providers/msmagasindomains/block_md_int/magasin/magasin';

/**
 * Generated class for the EditMagasinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-magasin',
  templateUrl: 'edit-magasin.html',
})
export class EditMagasinPage {

  magasin: any;

 constructor(public navCtrl: NavController, public navParams: NavParams,public magasinProvider: MagasinProvider) {
   this.magasin = navParams.get('mag'); 
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad MagasinEditPage');
 }

 updateMagasin() {
   this.magasinProvider.updateMagasin( this.magasin.key, { active: true });
   this.navCtrl.push(DetailMagasinPage,{mag: this.magasin});

 }

 deleteMagasin(key:string) {
   this.magasinProvider.deleteMagasin(key);
   this.navCtrl.push(ListMagasinPage);
 }
 
}
