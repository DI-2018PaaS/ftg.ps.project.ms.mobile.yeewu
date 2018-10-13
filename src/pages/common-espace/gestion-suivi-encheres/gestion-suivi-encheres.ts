import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { DetailEncherePage } from '../detail-enchere/detail-enchere';
import { TrierPage } from '../../common/trier/trier';

@Component({
  selector: 'page-gestion-suivi-encheres',
  templateUrl: 'gestion-suivi-encheres.html'
})
export class GestionSuiviEncheresPage {

  constructor(public navCtrl: NavController) {
  }
  goToFiltrer(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
  }goToDetailEnchere(params){
    if (!params) params = {};
    this.navCtrl.push(DetailEncherePage);
  }goToTrier(params){
    if (!params) params = {};
    this.navCtrl.push(TrierPage);
  }
}
