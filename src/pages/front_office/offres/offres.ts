import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DevisPage } from '../devis/devis';

@Component({
  selector: 'page-offres',
  templateUrl: 'offres.html'
})
export class OffresPage {

  constructor(public navCtrl: NavController) {
  }
  goToDevis(params){
    if (!params) params = {};
    this.navCtrl.push(DevisPage);
  }
}
