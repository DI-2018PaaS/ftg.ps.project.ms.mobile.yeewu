import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GestionDuStockPage } from '../gestion-du-stock/gestion-du-stock';
import { PlafondLigneDeCreditPage } from '../plafond-ligne-de-credit/plafond-ligne-de-credit';
import { PlafondLigneDeDepotsPage } from '../plafond-ligne-de-depots/plafond-ligne-de-depots';
import { RemboursementPretPage } from '../remboursement-pret/remboursement-pret';
import { GestionDesPaiementsPage } from '../gestion-des-paiements/gestion-des-paiements';
import { GestionDesCommandesLPage } from '../gestion-des-commandes-l/gestion-des-commandes-l';
import { GestionLivraisonIDPage } from '../gestion-livraison-id/gestion-livraison-id';
import { GestionPaiementIDPage } from '../gestion-paiement-id/gestion-paiement-id';
import { GestionRemboursementIDPage } from '../gestion-remboursement-id/gestion-remboursement-id';
import { GestionDepotIDPage } from '../gestion-depot-id/gestion-depot-id';
import { GestionCreditIDPage } from '../gestion-credit-id/gestion-credit-id';
//import { GestionMagasinIDPage } from '../gestion-magasin-id/gestion-magasin-id';

@Component({
  selector: 'page-gestion-magasin-id',
  templateUrl: 'gestion-magasin-id.html'
})
export class GestionMagasinIDPage {

  constructor(public navCtrl: NavController) {
  }
  goToGestionDuStock(params){
    if (!params) params = {};
    this.navCtrl.push(GestionDuStockPage);
  }goToPlafondLigneDeCredit(params){
    if (!params) params = {};
    this.navCtrl.push(PlafondLigneDeCreditPage);
  }goToPlafondLigneDeDepots(params){
    if (!params) params = {};
    this.navCtrl.push(PlafondLigneDeDepotsPage);
  }goToRemboursementPret(params){
    if (!params) params = {};
    this.navCtrl.push(RemboursementPretPage);
  }goToGestionDesPaiements(params){
    if (!params) params = {};
    this.navCtrl.push(GestionDesPaiementsPage);
  }goToGestionDesCommandesL(params){
    if (!params) params = {};
    this.navCtrl.push(GestionDesCommandesLPage);
  }goToGestionLivraisonID(params){
    if (!params) params = {};
    this.navCtrl.push(GestionLivraisonIDPage);
  }goToGestionPaiementID(params){
    if (!params) params = {};
    this.navCtrl.push(GestionPaiementIDPage);
  }goToGestionRemboursementID(params){
    if (!params) params = {};
    this.navCtrl.push(GestionRemboursementIDPage);
  }goToGestionDepotID(params){
    if (!params) params = {};
    this.navCtrl.push(GestionDepotIDPage);
  }goToGestionCreditID(params){
    if (!params) params = {};
    this.navCtrl.push(GestionCreditIDPage);
  }goToGestionMagasinID(params){
    if (!params) params = {};
    this.navCtrl.push(GestionMagasinIDPage);
  }
}
