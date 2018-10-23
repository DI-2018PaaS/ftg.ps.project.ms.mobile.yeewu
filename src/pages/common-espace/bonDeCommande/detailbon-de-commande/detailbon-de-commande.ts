import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditbonDeCommandePage } from '../editbon-de-commande/editbon-de-commande';
import { ListbonDeCommandePage } from '../listbon-de-commande/listbon-de-commande';
import { BonCommandeProvider } from '../../../../providers/msmagasindomains/bon-de-commande/bon-de-commande.provider';

/**
 * Generated class for the DetailbonDeCommandePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailbon-de-commande',
  templateUrl: 'detailbon-de-commande.html',
})
export class DetailbonDeCommandePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public bonCommandeProvider: BonCommandeProvider) {
    this.bonCommande = navParams.get('bon'); 
  }
  
  bonCommande: any;


  ionViewDidLoad() {
    console.log('ionViewDidLoad BonCommandeEditPage');
  }

  updateBonCommande(key:string, isActive: boolean) {
    this.bonCommandeProvider.updateBonCommande(key, { active: isActive });
  }
 
  deleteBonCommande(key:string) {
    this.bonCommandeProvider.deleteBonCommande(key);
    this.navCtrl.push(ListbonDeCommandePage);
  }

  editBonCommande()
  {
    this.navCtrl.push(EditbonDeCommandePage, {bon :  this.bonCommande});
  }
}
