import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AjouterPrixSurProduitOffrePage } from '../ajouter-prix-sur-produit-offre/ajouter-prix-sur-produit-offre';
import { PrevisualiserDevisPage } from '../previsualiser-devis/previsualiser-devis';
import { NotificationEnvoiOffrePage } from '../notification-envoi-offre/notification-envoi-offre';

@Component({
  selector: 'page-repondre-offre',
  templateUrl: 'repondre-offre.html'
})
export class RepondreOffrePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToAjouterPrixSurProduitOffre(params){
    if (!params) params = {};
    this.navCtrl.push(AjouterPrixSurProduitOffrePage);
  }goToPrevisualiserDevis(params){
    if (!params) params = {};
    this.navCtrl.push(PrevisualiserDevisPage);
  }goToNotificationEnvoiOffre(params){
    if (!params) params = {};
    this.navCtrl.push(NotificationEnvoiOffrePage);
  }
}
