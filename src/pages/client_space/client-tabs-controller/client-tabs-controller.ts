import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClientStatistiquesPage } from '../../client_space/client-statistiques/client-statistiques';
import { PlafondLigneDeCreditPage } from '../../common-espace/plafond-ligne-de-credit/plafond-ligne-de-credit';
import { PlafondLigneDeDepotsPage } from '../../common-espace/plafond-ligne-de-depots/plafond-ligne-de-depots';
import { RemboursementPretPage } from '../../common-espace/remboursement-pret/remboursement-pret';
import { GestionDuStockPage } from '../../common-espace/gestion-du-stock/gestion-du-stock';
import { GestionDesPaiementsPage } from '../../common-espace/gestion-des-paiements/gestion-des-paiements';
import { GestionDesCommandesLPage } from '../../common-espace/gestion-des-commandes-l/gestion-des-commandes-l';
import { GestionLivraisonIDPage } from '../../common-espace/gestion-livraison-id/gestion-livraison-id';
import { GestionPaiementIDPage } from '../../common-espace/gestion-paiement-id/gestion-paiement-id';
import { GestionMagasinIDPage } from '../../common-espace/gestion-magasin-id/gestion-magasin-id';
import { GestionRemboursementIDPage } from '../../common-espace/gestion-remboursement-id/gestion-remboursement-id';
import { GestionDepotIDPage } from '../../common-espace/gestion-depot-id/gestion-depot-id';
import { GestionCreditIDPage } from '../../common-espace/gestion-credit-id/gestion-credit-id';
import { ClientHomePage } from '../client-home/client-home';
//import { PlafondLigneDeCreditPage } from '../plafond-ligne-de-credit/plafond-ligne-de-credit';
import { ClientSuiviPage } from '../client-suivi/client-suivi';
//import { ClientStatistiquesPage } from '../client-statistiques/client-statistiques';

@Component({
  selector: 'page-client-tabs-controller',
  templateUrl: 'client-tabs-controller.html'
})
export class ClientTabsControllerPage {

  tab1Root: any = ClientHomePage;
  //tab2Root: any = PlafondLigneDeCreditPage;
  tab3Root: any = ClientSuiviPage;
  tab4Root: any = ClientStatistiquesPage;
  constructor(public navCtrl: NavController) {
  }
  goToClientStatistiques(params){
    if (!params) params = {};
    this.navCtrl.push(ClientStatistiquesPage);
  }goToPlafondLigneDeCredit(params){
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
}
