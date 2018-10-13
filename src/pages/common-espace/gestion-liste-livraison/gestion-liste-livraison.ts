import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { DetailLivraisonPage } from '../detail-livraison/detail-livraison';

@Component({
  selector: 'page-gestion-liste-livraison',
  templateUrl: 'gestion-liste-livraison.html'
})
export class GestionListeLivraisonPage {

  constructor(public navCtrl: NavController) {
  }
  goToFiltrer(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
  }goToDetailLivraison(params){
    if (!params) params = {};
    this.navCtrl.push(DetailLivraisonPage);
  }
}
