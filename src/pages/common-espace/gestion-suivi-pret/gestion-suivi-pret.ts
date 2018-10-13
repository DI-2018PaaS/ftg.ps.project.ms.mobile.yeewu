import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { DetailPretPage } from '../detail-pret/detail-pret';
import { TrierPage } from '../../common/trier/trier';

@Component({
  selector: 'page-gestion-suivi-pret',
  templateUrl: 'gestion-suivi-pret.html'
})
export class GestionSuiviPretPage {

  constructor(public navCtrl: NavController) {
  }
  goToFiltrer(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
  }goToDetailPret(params){
    if (!params) params = {};
    this.navCtrl.push(DetailPretPage);
  }goToTrier(params){
    if (!params) params = {};
    this.navCtrl.push(TrierPage);
  }
}
