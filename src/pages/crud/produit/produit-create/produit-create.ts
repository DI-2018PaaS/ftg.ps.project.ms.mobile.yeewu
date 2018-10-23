import { AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { ProduitProvider } from '../../../../providers/msmagasindomains/produit/produit.provider';
import { Produit } from '../../../../models/msmagasindomains/produit/produit.model';

/**
 * Generated class for the ProduitCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-produit-create',
  templateUrl: 'produit-create.html',
})
export class ProduitCreatePage {

  produitNew = {} as Produit;
  produitNewRef$ : AngularFireList<Produit>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private produitProvider : ProduitProvider) {
    
  }

  
  createNewProduit (){
     console.log(this.produitNew);
     this.produitProvider.createProduit({
       code: this.produitNew.code,
       designation: this.produitNew.designation,
       prixUnitaire: this.produitNew.prixUnitaire,
       descriptionProduit: this.produitNew.descriptionProduit,
       zoneGeographiqueId: 0
     });

     this.produitNew = {} as Produit;
     this.navCtrl.pop();

   }
}
