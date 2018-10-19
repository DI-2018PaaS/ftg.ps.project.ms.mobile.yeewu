import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsEncherePage } from '../details-enchere/details-enchere';

@Component({
  selector: 'page-liste-des-encheres',
  templateUrl: 'liste-des-encheres.html'
})
export class ListeDesEncheresPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToDetailsEnchere(params){
    if (!params) params = {};
    this.navCtrl.push(DetailsEncherePage);
  }
}
