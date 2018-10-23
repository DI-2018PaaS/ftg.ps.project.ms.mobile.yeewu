import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailbonDeCommandePage } from '../detailbon-de-commande/detailbon-de-commande';
import { ListbonDeCommandePage } from '../listbon-de-commande/listbon-de-commande';
import { BonCommandeProvider } from '../../../../providers/msmagasindomains/bon-de-commande/bon-de-commande.provider';

/**
 * Generated class for the EditbonDeCommandePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editbon-de-commande',
  templateUrl: 'editbon-de-commande.html',
})
export class EditbonDeCommandePage {

  bonCommande: any;

 constructor(public navCtrl: NavController, public navParams: NavParams,public bonCommandeProvider: BonCommandeProvider) {
   this.bonCommande = navParams.get('mag'); 
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad BonCommandeEditPage');
 }

 updateBonCommande() {
   this.bonCommandeProvider.updateBonCommande( this.bonCommande.key, { active: true });
   this.navCtrl.push(DetailbonDeCommandePage,{mag: this.bonCommande});

 }

 deleteBonCommande(key:string) {
   this.bonCommandeProvider.deleteBonCommande(key);
   this.navCtrl.push(ListbonDeCommandePage);
 }
 

}
