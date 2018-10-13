import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { DetailCommandePage } from '../detail-commande/detail-commande';
import { TrierPage } from '../../common/trier/trier';

@Component({
  selector: 'page-gestion-suivi-commande',
  templateUrl: 'gestion-suivi-commande.html'
})
export class GestionSuiviCommandePage {

  constructor(public navCtrl: NavController) {
  }
  goToFiltrer(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
  }goToDetailCommande(params){
    if (!params) params = {};
    this.navCtrl.push(DetailCommandePage);
  }  goToTrier(params){
    if (!params) params = {};
    this.navCtrl.push(TrierPage);
  }
}
