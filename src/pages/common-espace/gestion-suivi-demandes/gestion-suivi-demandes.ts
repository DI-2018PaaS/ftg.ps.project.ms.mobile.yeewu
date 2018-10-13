import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { DetailDemandePage } from '../detail-demande/detail-demande';
import { TrierPage } from '../../common/trier/trier';

@Component({
  selector: 'page-gestion-suivi-demandes',
  templateUrl: 'gestion-suivi-demandes.html'
})
export class GestionSuiviDemandesPage {

  constructor(public navCtrl: NavController) {
  }
  goToFiltrer(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
  }goToDetailDemande(params){
    if (!params) params = {};
    this.navCtrl.push(DetailDemandePage);
  }goToTrier(params){
    if (!params) params = {};
    this.navCtrl.push(TrierPage);
  }
}
