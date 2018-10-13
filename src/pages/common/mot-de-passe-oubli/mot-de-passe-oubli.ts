import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AdministrateurHomePage } from '../../admin_space/administrateur-home/administrateur-home';
import { EditerOperationPage } from '../../crud/editer-operation/editer-operation';
import { EditerRolePage } from '../../crud/editer-role/editer-role';
import { EditerActivitPage } from '../../crud/editer-activit/editer-activit';
import { EditerDomainePage } from '../../crud/editer-domaine/editer-domaine';
import { EditerComptePage } from '../../crud/editer-compte/editer-compte';
import { EditerMagasinPage } from '../../crud/editer-magasin/editer-magasin';
import { EditerBoutiquePage } from '../../crud/editer-boutique/editer-boutique';
import { EditerProduitPage } from '../../crud/editer-produit/editer-produit';
import { EditerServicePage } from '../../crud/editer-service/editer-service';
import { EditerCategoriePage } from '../../crud/editer-categorie/editer-categorie';
import { RecherchePage } from '../recherche/recherche';
import { FiltrerPage } from '../filtrer/filtrer';
import { TrierPage } from '../trier/trier';
import { EditerOffrePage } from '../../crud/editer-offre/editer-offre';
import { EditerEncherePage } from '../../crud/editer-enchere/editer-enchere';
//import { MotDePasseOubliPage } from '../mot-de-passe-oubli/mot-de-passe-oubli';
import { InscriptionPage } from '../inscription/inscription';
import { InscriptionOKPage } from '../inscription-ok/inscription-ok';

@Component({
  selector: 'page-mot-de-passe-oubli',
  templateUrl: 'mot-de-passe-oubli.html'
})
export class MotDePasseOubliPage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToAdministrateurHome(params){
    if (!params) params = {};
    this.navCtrl.push(AdministrateurHomePage);
  }goToEditerOperation(params){
    if (!params) params = {};
    this.navCtrl.push(EditerOperationPage);
  }goToEditerRole(params){
    if (!params) params = {};
    this.navCtrl.push(EditerRolePage);
  }goToEditerActivit(params){
    if (!params) params = {};
    this.navCtrl.push(EditerActivitPage);
  }goToEditerDomaine(params){
    if (!params) params = {};
    this.navCtrl.push(EditerDomainePage);
  }goToEditerCompte(params){
    if (!params) params = {};
    this.navCtrl.push(EditerComptePage);
  }goToEditerMagasin(params){
    if (!params) params = {};
    this.navCtrl.push(EditerMagasinPage);
  }goToEditerBoutique(params){
    if (!params) params = {};
    this.navCtrl.push(EditerBoutiquePage);
  }goToEditerProduit(params){
    if (!params) params = {};
    this.navCtrl.push(EditerProduitPage);
  }goToEditerService(params){
    if (!params) params = {};
    this.navCtrl.push(EditerServicePage);
  }goToEditerCategorie(params){
    if (!params) params = {};
    this.navCtrl.push(EditerCategoriePage);
  }goToRecherche(params){
    if (!params) params = {};
    this.navCtrl.push(RecherchePage);
  }goToFiltrer(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
  }goToTrier(params){
    if (!params) params = {};
    this.navCtrl.push(TrierPage);
  }goToEditerOffre(params){
    if (!params) params = {};
    this.navCtrl.push(EditerOffrePage);
  }goToEditerEnchere(params){
    if (!params) params = {};
    this.navCtrl.push(EditerEncherePage);
  }goToMotDePasseOubli(params){
    if (!params) params = {};
    this.navCtrl.push(MotDePasseOubliPage);
  }goToInscription(params){
    if (!params) params = {};
    this.navCtrl.push(InscriptionPage);
  }goToInscriptionOK(params){
    if (!params) params = {};
    this.navCtrl.push(InscriptionOKPage);
  }
}
