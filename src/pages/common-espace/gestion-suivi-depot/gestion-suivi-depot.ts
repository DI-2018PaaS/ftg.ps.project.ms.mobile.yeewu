import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { DetailDepotPage } from '../detail-depot/detail-depot';
import { TrierPage } from '../../common/trier/trier';

@Component({
  selector: 'page-gestion-suivi-depot',
  templateUrl: 'gestion-suivi-depot.html'
})
export class GestionSuiviDepotPage {

  constructor(public navCtrl: NavController) {
  }
  goToFiltrer(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
  }goToDetailDepot(params){
    if (!params) params = {};
    this.navCtrl.push(DetailDepotPage);
  }goToTrier(params){
    if (!params) params = {};
    this.navCtrl.push(TrierPage);
  }
}
