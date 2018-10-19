import { PanierPage } from './../../common/panier/panier';
import { DetailProduitByActivitePage } from './../detail-produit-by-activite/detail-produit-by-activite';
import { DetailProduitPage } from './../../common-espace/produit/detail-produit/detail-produit';
import { Produit } from './../../../models/msmagasindomains/produit/produit.model';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProduitProvider } from '../../../providers/msmagasindomains/produit/produit';
import { map } from 'rxjs/operators';

@Component({
  selector: 'page-activite',
  templateUrl: 'activite.html'
})
export class ActivitePage {

  produits:any;
  constructor(public navCtrl: NavController,public produitProvider:ProduitProvider) {
   this.getListProduitByActivite();
  }
  
getListProduitByActivite()
{
    this.produitProvider.getProduitList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(produits => {
      this.produits = produits;
    }); 

  
}

goToDetailProduit(p:Produit)
{
  this.navCtrl.push(DetailProduitByActivitePage,{prod:p});
}

addOnPanier(p:Produit)
{
 // this.navCtrl.push(DetailProduitPage,{prod:p});
}

showPanier(){
  this.navCtrl.push(PanierPage);

}
}
