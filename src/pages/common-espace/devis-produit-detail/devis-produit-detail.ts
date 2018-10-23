import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { DevisOffrePage } from '../../front_office/devis-offre/devis-offre';
import { DevisPage } from '../../front_office/devis/devis';

/**
 * Generated class for the DevisProduitDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devis-produit-detail',
  templateUrl: 'devis-produit-detail.html',
})
export class DevisProduitDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevisProduitDetailPage');
  }

  goToDevis(params){
    if (!params) params = {};
    this.navCtrl.push(DevisPage);
  }
}
