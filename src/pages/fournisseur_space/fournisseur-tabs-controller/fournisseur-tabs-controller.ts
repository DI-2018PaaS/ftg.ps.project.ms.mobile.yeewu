import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FournisseurStatistiquesPage } from '../../fournisseur_space/fournisseur-statistiques/fournisseur-statistiques';
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
import { FournisseurHomePage } from '../fournisseur-home/fournisseur-home';
//import { PlafondLigneDeCreditPage } from '../plafond-ligne-de-credit/plafond-ligne-de-credit';
import { FournisseurSuiviPage } from '../fournisseur-suivi/fournisseur-suivi';
import { ListMagasinPage } from '../../crud/magasin/list-magasin/list-magasin';
import { OffreListPage } from '../../crud/offre/offre-list/offre-list';
import { ChartsComponent } from '../../common-espace/charts/charts-component/charts.component';
//import { FournisseurStatistiquesPage } from '../fournisseur-statistiques/fournisseur-statistiques';

@Component({
  selector: 'page-fournisseur-tabs-controller',
  templateUrl: 'fournisseur-tabs-controller.html'
})
export class FournisseurTabsControllerPage {

  //tab1Root=ListMagasinPage;
	tab1Root=FournisseurHomePage;
	tab2Root=OffreListPage;
	tab3Root=FournisseurSuiviPage;
	tab4Root=ChartsComponent;
	myIndex:number;
  
/*  tab1Root: any = FournisseurHomePage;
  //tab2Root: any = PlafondLigneDeCreditPage;
  tab3Root: any = FournisseurSuiviPage;
  tab4Root: any = FournisseurStatistiquesPage;*/
  constructor(public navCtrl: NavController) {
  }
  goToFournisseurStatistiques(params){
    if (!params) params = {};
    this.navCtrl.push(FournisseurStatistiquesPage);
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
