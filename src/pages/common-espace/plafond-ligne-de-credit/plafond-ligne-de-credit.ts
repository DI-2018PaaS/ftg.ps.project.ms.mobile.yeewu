import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlafondLigneDeDepotsPage } from '../plafond-ligne-de-depots/plafond-ligne-de-depots';
//import { PlafondLigneDeCreditPage } from '../plafond-ligne-de-credit/plafond-ligne-de-credit';
import { RemboursementPretPage } from '../remboursement-pret/remboursement-pret';
import { GestionDuStockPage } from '../gestion-du-stock/gestion-du-stock';
import { GestionDesPaiementsPage } from '../gestion-des-paiements/gestion-des-paiements';
import { GestionDesCommandesLPage } from '../gestion-des-commandes-l/gestion-des-commandes-l';
import { GestionLivraisonIDPage } from '../gestion-livraison-id/gestion-livraison-id';
import { GestionPaiementIDPage } from '../gestion-paiement-id/gestion-paiement-id';
import { GestionMagasinIDPage } from '../gestion-magasin-id/gestion-magasin-id';
import { GestionRemboursementIDPage } from '../gestion-remboursement-id/gestion-remboursement-id';
import { GestionDepotIDPage } from '../gestion-depot-id/gestion-depot-id';
import { GestionCreditIDPage } from '../gestion-credit-id/gestion-credit-id';

// Common
import { RecherchePage } from '../../common/recherche/recherche';
import { LoginPage } from '../../common/login/login';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { TrierPage } from '../../common/trier/trier';

@Component({
  selector: 'page-plafond-ligne-de-credit',
  templateUrl: 'plafond-ligne-de-credit.html'
})
export class PlafondLigneDeCreditPage {

  constructor(public navCtrl: NavController) {
  }
  goToPlafondLigneDeDepots(params){
    if (!params) params = {};
    this.navCtrl.push(PlafondLigneDeDepotsPage);
  }goToPlafondLigneDeCredit(params){
    if (!params) params = {};
    this.navCtrl.push(PlafondLigneDeCreditPage);
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
  }goToGestionPaiementID(params){
    if (!params) params = {};
    this.navCtrl.push(GestionPaiementIDPage);
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
  }
  goToSearch(params){
    if (!params) params = {};
    this.navCtrl.push(RecherchePage);
  }
  goToConnexion(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
  getFilter(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
  }
  getSort(params){
    if (!params) params = {};
    this.navCtrl.push(TrierPage);
  }
}
