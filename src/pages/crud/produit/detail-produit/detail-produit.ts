import { ProduitListPage } from './../produit-list/produit-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProduitEditPage } from '../produit-edit/produit-edit';
import { ProduitProvider } from '../../../../providers/msmagasindomains/produit/produit.provider';

/**
 * Generated class for the DetailProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-produit',
  templateUrl: 'detail-produit.html',
})
export class DetailProduitPage {
  produit: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public produitProvider: ProduitProvider) {
    this.produit = navParams.get('prod'); 
  }
  
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitEditPage');
  }

  updateProduit(key:string, isActive: boolean) {
    this.produitProvider.updateProduit(key, { active: isActive });
  }
 
  deleteProduit(key:string) {
    this.produitProvider.deleteProduit(key);
    this.navCtrl.push(ProduitListPage);
  }

  editProduit()
  {
    this.navCtrl.push(ProduitEditPage, {prod :  this.produit});
  }
}
