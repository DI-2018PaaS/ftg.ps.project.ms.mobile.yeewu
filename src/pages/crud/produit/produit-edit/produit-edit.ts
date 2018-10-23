import { DetailProduitPage } from './../detail-produit/detail-produit';
import { ProduitListPage } from './../produit-list/produit-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProduitProvider } from '../../../../providers/msmagasindomains/produit/produit.provider';

/**
 * Generated class for the ProduitEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produit-edit',
  templateUrl: 'produit-edit.html',
})
export class ProduitEditPage {

   produit: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public produitProvider: ProduitProvider) {
    this.produit = navParams.get('prod'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitEditPage');
  }


  updateProduit() {
    this.produitProvider.updateProduit( this.produit.key, { active: true });
    this.navCtrl.push(DetailProduitPage,{prod: this.produit});
  }
 

  deleteProduit(key:string) {
    this.produitProvider.deleteProduit(key);
    this.navCtrl.push(ProduitListPage);
  }
  
}

