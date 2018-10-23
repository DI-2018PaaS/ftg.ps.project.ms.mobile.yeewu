import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecherchePage } from '../../common/recherche/recherche';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { TrierPage } from '../../common/trier/trier';
import { LoginPage } from '../../common/login/login';
import { DetailUserPage } from '../../common-espace/detail-user/detail-user';

import { AnimTabsControllerPage } from '../../../pages/anim_space/anim-tabs-controller/anim-tabs-controller';
//import { FournisseurTabsControllerPage } from '../../../pages/fournisseur_space/fournisseur-tabs-controller/fournisseur-tabs-controller';
import { ClientTabsControllerPage } from '../../../pages/client_space/client-tabs-controller/client-tabs-controller';
import { OperationEditPage } from '../../crud/operation/operation-edit/operation-edit';
import { RoleEditPage } from '../../crud/role/role-edit/role-edit';
import { ActiviteEditPage } from '../../crud/activite/activite-edit/activite-edit';
import { DomaineEditPage } from '../../crud/domaine/domaine-edit/domaine-edit';
import { CompteEditPage } from '../../crud/compte/compte-edit/compte-edit';
import { ServiceEditPage } from '../../crud/service/service-edit/service-edit';
import { ProduitEditPage } from '../../crud/produit/produit-edit/produit-edit';
import { CategorieEditPage } from '../../crud/categorie/categorie-edit/categorie-edit';
import { OffreEditPage } from '../../crud/offre/offre-edit/offre-edit';
import { EnchereEditPage } from '../../crud/enchere/enchere-edit/enchere-edit';
import { DetailComptePage } from '../../crud/compte/detail-compte/detail-compte';
import { TabsPage } from '../../fournisseur_space/tabs/tabs';
import { EditBoutiquePage } from '../../crud/boutique/edit-boutique/edit-boutique';
import { EditMagasinPage } from '../../crud/magasin/edit-magasin/edit-magasin';


@Component({
  selector: 'page-multirole-home',
  templateUrl: 'multirole-home.html'
})
export class MultiroleHomePage {

  constructor(public navCtrl: NavController) {
  }
  goToEditerOperation(params){
    if (!params) params = {};
    this.navCtrl.push(OperationEditPage);
  }goToEditerRole(params){
    if (!params) params = {};
    this.navCtrl.push(RoleEditPage);
  }goToEditerActivit(params){
    if (!params) params = {};
    this.navCtrl.push(ActiviteEditPage);
  }goToEditerDomaine(params){
    if (!params) params = {};
    this.navCtrl.push(DomaineEditPage);
  }goToEditerCompte(params){
    if (!params) params = {};
    this.navCtrl.push(CompteEditPage);
  }goToEditerMagasin(params){
    if (!params) params = {};
    this.navCtrl.push(EditMagasinPage);
  }goToEditerBoutique(params){
    if (!params) params = {};
    this.navCtrl.push(EditBoutiquePage);
  }goToEditerProduit(params){
    if (!params) params = {};
    this.navCtrl.push(ProduitEditPage);
  }goToEditerService(params){
    if (!params) params = {};
    this.navCtrl.push(ServiceEditPage);
  }goToEditerCategorie(params){
    if (!params) params = {};
    this.navCtrl.push(CategorieEditPage);
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
    this.navCtrl.push(OffreEditPage);
  }goToEditerEnchere(params){
    if (!params) params = {};
    this.navCtrl.push(EnchereEditPage);
  }
  goToSearch(params){
    if (!params) params = {};
    this.navCtrl.push(RecherchePage);
  }
  goToConnexion(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
  goToUser(params){
    if (!params) params = {};
    this.navCtrl.push(DetailComptePage);
  }


  goToAnimateurTabsHome(params){
    if (!params) params = {};
    this.navCtrl.push(AnimTabsControllerPage);
  }
  goToFournisseurTabsHome(params){
    if (!params) params = {};
    //this.navCtrl.push(FournisseurTabsControllerPage);
    this.navCtrl.push(TabsPage);
  }
  goToClientTabsHome(params){
    if (!params) params = {};
    this.navCtrl.push(ClientTabsControllerPage);
  }
}
