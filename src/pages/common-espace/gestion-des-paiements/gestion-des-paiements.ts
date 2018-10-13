import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlafondLigneDeCreditPage } from '../plafond-ligne-de-credit/plafond-ligne-de-credit';
import { PlafondLigneDeDepotsPage } from '../plafond-ligne-de-depots/plafond-ligne-de-depots';
import { RemboursementPretPage } from '../remboursement-pret/remboursement-pret';
import { GestionDuStockPage } from '../gestion-du-stock/gestion-du-stock';
//import { GestionDesPaiementsPage } from '../gestion-des-paiements/gestion-des-paiements';
import { GestionDesCommandesLPage } from '../gestion-des-commandes-l/gestion-des-commandes-l';
import { GestionLivraisonIDPage } from '../gestion-livraison-id/gestion-livraison-id';
import { GestionMagasinIDPage } from '../gestion-magasin-id/gestion-magasin-id';
import { GestionRemboursementIDPage } from '../gestion-remboursement-id/gestion-remboursement-id';
import { GestionDepotIDPage } from '../gestion-depot-id/gestion-depot-id';
import { GestionCreditIDPage } from '../gestion-credit-id/gestion-credit-id';
import { GestionPaiementIDPage } from '../gestion-paiement-id/gestion-paiement-id';

@Component({
  selector: 'page-gestion-des-paiements',
  templateUrl: 'gestion-des-paiements.html'
})
export class GestionDesPaiementsPage {

  constructor(public navCtrl: NavController) {
  }
  goToPlafondLigneDeCredit(params){
    if (!params) params = {};
    this.navCtrl.push(PlafondLigneDeCreditPage);
  }goToPlafondLigneDeDepots(params){
    if (!params) params = {};
    this.navCtrl.push(PlafondLigneDeDepotsPage);
  }goToRemboursementPret(params){
    if (!params) params = {};
    this.navCtrl.push(RemboursementPretPage);
  }goToGestionDuStock(params){
    if (!params) params = {};
    this.navCtrl.push(GestionDuStockPage);
  }goToGestionDesPaiements(params){
    if (!params) params = {};
    this.navCtrl.push(GestionDesPaiementsPage);
  }goToGestionDesCommandesL(params){
    if (!params) params = {};
    this.navCtrl.push(GestionDesCommandesLPage);
  }goToGestionLivraisonID(params){
    if (!params) params = {};
    this.navCtrl.push(GestionLivraisonIDPage);
  }goToGestionMagasinID(params){
    if (!params) params = {};
    this.navCtrl.push(GestionMagasinIDPage);
  }goToGestionRemboursementID(params){
    if (!params) params = {};
    this.navCtrl.push(GestionRemboursementIDPage);
  }goToGestionDepotID(params){
    if (!params) params = {};
    this.navCtrl.push(GestionDepotIDPage);
  }goToGestionCreditID(params){
    if (!params) params = {};
    this.navCtrl.push(GestionCreditIDPage);
  }goToGestionPaiementID(params){
    if (!params) params = {};
    this.navCtrl.push(GestionPaiementIDPage);
  }
}
