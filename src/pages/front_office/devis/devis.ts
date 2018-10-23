import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DevisProduitDetailPage } from '../../common-espace/devis-produit-detail/devis-produit-detail';
import { DevisOffrePage } from '../devis-offre/devis-offre';

@Component({
  selector: 'page-devis',
  templateUrl: 'devis.html'
})
export class DevisPage {

  constructor(public navCtrl: NavController) {
  }
  goToProduitDevis(params){
    if (!params) params = {};
    this.navCtrl.push(DevisProduitDetailPage);
  }
  goToPreview(params){
    if (!params) params = {};
    this.navCtrl.push(DevisOffrePage);
  }
}
