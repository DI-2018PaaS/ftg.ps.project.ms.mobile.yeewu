import { ListFournisseurPage } from './../fournisseur/list-fournisseur/list-fournisseur';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProduitListPage } from '../../crud/produit/produit-list/produit-list';
import { ListMagasinPage } from '../../crud/magasin/list-magasin/list-magasin';
import { ListBoutiquePage } from '../../crud/boutique/list-boutique/list-boutique';
import { OffreListPage } from '../../crud/offre/offre-list/offre-list';
import { FournisseurSuiviPage } from '../fournisseur-suivi/fournisseur-suivi';
import { ChartsComponent } from '../../common-espace/charts/charts-component/charts.component';

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
  
tab1Root=ListMagasinPage;
tab2Root=OffreListPage;
tab3Root=FournisseurSuiviPage;
tab4Root=ChartsComponent;
myIndex:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
