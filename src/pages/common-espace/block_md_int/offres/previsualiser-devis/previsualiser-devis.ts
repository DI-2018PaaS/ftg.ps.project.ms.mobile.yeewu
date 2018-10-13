import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationEnvoiOffrePage } from '../notification-envoi-offre/notification-envoi-offre';

@Component({
  selector: 'page-previsualiser-devis',
  templateUrl: 'previsualiser-devis.html'
})
export class PrevisualiserDevisPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToNotificationEnvoiOffre(params){
    if (!params) params = {};
    this.navCtrl.push(NotificationEnvoiOffrePage);
  }
}
