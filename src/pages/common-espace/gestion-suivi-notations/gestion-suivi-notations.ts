import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { DetailNotationPage } from '../detail-notation/detail-notation';

@Component({
  selector: 'page-gestion-suivi-notations',
  templateUrl: 'gestion-suivi-notations.html'
})
export class GestionSuiviNotationsPage {

  constructor(public navCtrl: NavController) {
  }
  goToFiltrer(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
  }goToDetailNotation(params){
    if (!params) params = {};
    this.navCtrl.push(DetailNotationPage);
  }
}
