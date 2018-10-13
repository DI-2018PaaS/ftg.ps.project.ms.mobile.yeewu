import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { DetailCreditPage } from '../detail-credit/detail-credit';
import { TrierPage } from '../../common/trier/trier';

@Component({
  selector: 'page-gestion-suivi-credit',
  templateUrl: 'gestion-suivi-credit.html'
})
export class GestionSuiviCreditPage {

  constructor(public navCtrl: NavController) {
  }
  goToFiltrer(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
  }goToDetailCredit(params){
    if (!params) params = {};
    this.navCtrl.push(DetailCreditPage);
  }goToTrier(params){
    if (!params) params = {};
    this.navCtrl.push(TrierPage);
  }
}
