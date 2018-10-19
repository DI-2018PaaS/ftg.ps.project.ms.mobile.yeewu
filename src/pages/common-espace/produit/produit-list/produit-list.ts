import { DetailProduitPage } from './..//detail-produit/detail-produit';
import { ProduitProvider } from './../../../../providers/msmagasindomains/produit/produit';
import { ProduitCreatePage } from './../produit-create/produit-create';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { Produit } from '../../../../models/msmagasindomains/produit/produit.model';

/**
 * Generated class for the ProduitListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-produit-list',
  templateUrl: 'produit-list.html',
})
export class ProduitListPage {

  produits : any;
  produit : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private produitProvider: ProduitProvider) {
    
   this.listProduit();
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitListPage');
  }

  listProduit(){
    this.produitProvider.getProduitList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(produits => {
      this.produits = produits;
    }); 

  }
  addNewProduit() {
    this.navCtrl.push(ProduitCreatePage);
  }

  editProduit(p: Produit) {
    this.navCtrl.push(DetailProduitPage,{prod:p});
  }

  updateProduit(isActive: boolean) {
    this.produitProvider.updateProduit(this.produit.key, { active: isActive });
  }

  deleteProduit(key: string) {
    this.produitProvider.deleteProduit(key);
    this.navCtrl.push(ProduitListPage);
  } 
   
  goToActivite(){

  }
}
