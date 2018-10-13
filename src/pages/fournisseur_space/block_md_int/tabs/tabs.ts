import { ListBoutiquePage } from './../../../common-espace/block_md_int/boutique/list-boutique/list-boutique';
import { ListMagasinPage } from './../../../common-espace/block_md_int/magasin/list-magasin/list-magasin';
import { ListFournisseurPage } from './../fournisseur/list-fournisseur/list-fournisseur';
import { ProduitListPage } from './../../../common-espace/block_md_int/produit/produit-list/produit-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  
tab1Root=ProduitListPage;
tab2Root=ListFournisseurPage;
tab3Root=ListMagasinPage;
tab4Root=ListBoutiquePage;
myIndex:number;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
