import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GestionSuiviCommandePage } from '../../common-espace/gestion-suivi-commande/gestion-suivi-commande';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { DetailCommandePage } from '../../common-espace/detail-commande/detail-commande';
import { GestionSuiviLivraisonPage } from '../../common-espace/gestion-suivi-livraison/gestion-suivi-livraison';
import { DetailLivraisonPage } from '../../common-espace/detail-livraison/detail-livraison';
import { GestionSuiviDemandesPage } from '../../common-espace/gestion-suivi-demandes/gestion-suivi-demandes';
import { DetailDemandePage } from '../../common-espace/detail-demande/detail-demande';
import { GestionSuiviPretPage } from '../../common-espace/gestion-suivi-pret/gestion-suivi-pret';
import { DetailPretPage } from '../../common-espace/detail-pret/detail-pret';
import { GestionSuiviCreditPage } from '../../common-espace/gestion-suivi-credit/gestion-suivi-credit';
import { DetailCreditPage } from '../../common-espace/detail-credit/detail-credit';
import { GestionSuiviDepotPage } from '../../common-espace/gestion-suivi-depot/gestion-suivi-depot';
import { DetailDepotPage } from '../../common-espace/detail-depot/detail-depot';
import { GestionSuiviDevisPage } from '../../common-espace/gestion-suivi-devis/gestion-suivi-devis';
import { GestionSuiviProduitsPage } from '../../common-espace/gestion-suivi-produits/gestion-suivi-produits';
import { ProduitEditPage } from '../../crud/produit/produit-edit/produit-edit';
import { GestionSuiviEncheresPage } from '../../common-espace/gestion-suivi-encheres/gestion-suivi-encheres';
import { DetailEncherePage } from '../../common-espace/detail-enchere/detail-enchere';
import { GestionSuiviNotationsPage } from '../../common-espace/gestion-suivi-notations/gestion-suivi-notations';
import { DetailNotationPage } from '../../common-espace/detail-notation/detail-notation';
import { DetailComptePage } from '../../crud/compte/detail-compte/detail-compte';

@Component({
  selector: 'page-animateur-suivi',
  templateUrl: 'animateur-suivi.html'
})
export class AnimateurSuiviPage {

  constructor(public navCtrl: NavController) {
  }
  goToGestionSuiviCommande(params){
    if (!params) params = {};
    this.navCtrl.push(GestionSuiviCommandePage);
  }goToFiltrer(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
  }goToDetailCommande(params){
    if (!params) params = {};
    this.navCtrl.push(DetailCommandePage);
  }goToGestionSuiviLivraison(params){
    if (!params) params = {};
    this.navCtrl.push(GestionSuiviLivraisonPage);
  }goToDetailLivraison(params){
    if (!params) params = {};
    this.navCtrl.push(DetailLivraisonPage);
  }goToGestionSuiviDemandes(params){
    if (!params) params = {};
    this.navCtrl.push(GestionSuiviDemandesPage);
  }goToDetailDemande(params){
    if (!params) params = {};
    this.navCtrl.push(DetailDemandePage);
  }goToGestionSuiviPret(params){
    if (!params) params = {};
    this.navCtrl.push(GestionSuiviPretPage);
  }goToDetailPret(params){
    if (!params) params = {};
    this.navCtrl.push(DetailPretPage);
  }goToGestionSuiviCredit(params){
    if (!params) params = {};
    this.navCtrl.push(GestionSuiviCreditPage);
  }goToDetailCredit(params){
    if (!params) params = {};
    this.navCtrl.push(DetailCreditPage);
  }goToGestionSuiviDepot(params){
    if (!params) params = {};
    this.navCtrl.push(GestionSuiviDepotPage);
  }goToDetailDepot(params){
    if (!params) params = {};
    this.navCtrl.push(DetailDepotPage);
  }goToGestionSuiviDevis(params){
    if (!params) params = {};
    this.navCtrl.push(GestionSuiviDevisPage);
  }goToGestionSuiviProduits(params){
    if (!params) params = {};
    this.navCtrl.push(GestionSuiviProduitsPage);
  }goToEditerProduit(params){
    if (!params) params = {};
    this.navCtrl.push(ProduitEditPage);
  }goToGestionSuiviEncheres(params){
    if (!params) params = {};
    this.navCtrl.push(GestionSuiviEncheresPage);
  }goToDetailEnchere(params){
    if (!params) params = {};
    this.navCtrl.push(DetailEncherePage);
  }goToGestionSuiviNotations(params){
    if (!params) params = {};
    this.navCtrl.push(GestionSuiviNotationsPage);
  }goToDetailNotation(params){
    if (!params) params = {};
    this.navCtrl.push(DetailNotationPage);
  }goToUser(params){
    if (!params) params = {};
    this.navCtrl.push(DetailComptePage);
  }
}
