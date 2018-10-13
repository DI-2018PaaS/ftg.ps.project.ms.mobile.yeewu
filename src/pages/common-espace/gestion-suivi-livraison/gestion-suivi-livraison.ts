import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { DetailLivraisonPage } from '../detail-livraison/detail-livraison';
import { TrierPage } from '../../common/trier/trier';

@Component({
  selector: 'page-gestion-suivi-livraison',
  templateUrl: 'gestion-suivi-livraison.html'
})
export class GestionSuiviLivraisonPage {

  constructor(public navCtrl: NavController) {
  }
  goToFiltrer(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
  }goToDetailLivraison(params){
    if (!params) params = {};
    this.navCtrl.push(DetailLivraisonPage);
  }goToTrier(params){
    if (!params) params = {};
    this.navCtrl.push(TrierPage);
  }
}
