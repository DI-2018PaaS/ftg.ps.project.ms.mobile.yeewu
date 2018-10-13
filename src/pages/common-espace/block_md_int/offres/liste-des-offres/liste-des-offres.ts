import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RepondreOffrePage } from '../repondre-offre/repondre-offre';
import { AjouterPrixSurProduitOffrePage } from '../ajouter-prix-sur-produit-offre/ajouter-prix-sur-produit-offre';
import { PrevisualiserDevisPage } from '../previsualiser-devis/previsualiser-devis';
import { NotificationEnvoiOffrePage } from '../notification-envoi-offre/notification-envoi-offre';

@Component({
  selector: 'page-liste-des-offres',
  templateUrl: 'liste-des-offres.html'
})
export class ListeDesOffresPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToRepondreOffre(params){
    if (!params) params = {};
    this.navCtrl.push(RepondreOffrePage);
  }goToAjouterPrixSurProduitOffre(params){
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
