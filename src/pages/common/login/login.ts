import { Component } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';
import { AdministrateurHomePage } from '../../admin_space/administrateur-home/administrateur-home';
import { OperationEditPage } from '../../crud/operation/operation-edit/operation-edit';
import { RoleEditPage } from '../../crud/role/role-edit/role-edit';
import { ActiviteEditPage } from '../../crud/activite/activite-edit/activite-edit';
import { DomaineEditPage } from '../../crud/domaine/domaine-edit/domaine-edit';
import { CompteEditPage } from '../../crud/compte/compte-edit/compte-edit';
import { ProduitEditPage } from '../../crud/produit/produit-edit/produit-edit';
import { ServiceEditPage } from '../../crud/service/service-edit/service-edit';
import { CategorieEditPage } from '../../crud/categorie/categorie-edit/categorie-edit';
import { RecherchePage } from '../recherche/recherche';
import { FiltrerPage } from '../filtrer/filtrer';
import { TrierPage } from '../trier/trier';
import { OffreEditPage } from '../../crud/offre/offre-edit/offre-edit';
import { EnchereEditPage } from '../../crud/enchere/enchere-edit/enchere-edit';
import { MotDePasseOubliPage } from '../mot-de-passe-oubli/mot-de-passe-oubli';
//import { LoginPage } from '../login/login';

import { InscriptionPage } from '../inscription/inscription';
import { InscriptionOKPage } from '../inscription-ok/inscription-ok';
import { AdminTabsControllerPage } from '../../../pages/admin_space/admin-tabs-controller/admin-tabs-controller';
import { AnimTabsControllerPage } from '../../../pages/anim_space/anim-tabs-controller/anim-tabs-controller';
import { FournisseurTabsControllerPage } from '../../../pages/fournisseur_space/fournisseur-tabs-controller/fournisseur-tabs-controller';
import { ClientTabsControllerPage } from '../../../pages/client_space/client-tabs-controller/client-tabs-controller';
import { BanqueTabsControllerPage } from '../../../pages/banque_space/banque-tabs-controller/banque-tabs-controller';
import { MultiroleHomePage } from '../../../pages/multirole_space/multirole-home/multirole-home';


import { LoginProvider } from '../../../providers/common/login.provider';

// data
import { Utilisateur } from '../../../models/user/utilisateur/utilisateur.model';
import { EditBoutiquePage } from '../../crud/boutique/edit-boutique/edit-boutique';
import { EditMagasinPage } from '../../crud/magasin/edit-magasin/edit-magasin';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

 // private loginController: LoginProvider = null;
 eltModel = {} as Utilisateur;

  usr:any="";
  pwd:any="";
  data = [{
    containerBodyImage: 'assets/img/login_register.jpg',
    logo : "assets/img/logo_yeewu.png",
    username: 'Username',
    password: 'Password',
    skip: 'Skip',
    register: 'Register',
    login: 'Login',
    iconAccount: 'assets/img/icons8-user-16.png',
    iconLock: 'assets/img/icons8-lock-16.png',
    facebook: 'Facebook',
    twitter: 'Twitter',
    google: 'Google',
    pinterest: 'Pinterest',
    signInWith: 'Or sign in with:'
  }];


  constructor(public navCtrl: NavController,private toastController: ToastController){
    //this.loginController=loginProvider;
  }
  goToAdministrateurHome(params){
    if (!params) params = {};
    //this.navCtrl.push(AdministrateurHomePage);
    this.navCtrl.push(AdminTabsControllerPage);
  }goToEditerOperation(params){
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
  }goToMotDePasseOubli(params){
    if (!params) params = {};
    this.navCtrl.push(MotDePasseOubliPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToInscription(params){
    if (!params) params = {};
    this.navCtrl.push(InscriptionPage);
  }goToInscriptionOK(params){
    if (!params) params = {};
    this.navCtrl.push(InscriptionOKPage);
  }
  login() {
    let message = 'Succesful Login';
    let toast = this.toastController.create({
        message: message,
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
  }
  goToTestLogin(params)
  {
    if (!params) params = {};
    if(this.eltModel.username=="admin")
    {
      this.navCtrl.push(AdminTabsControllerPage);
    }
    if(this.eltModel.username=="anim")
    {
      this.navCtrl.push(AnimTabsControllerPage);
    }
    if(this.eltModel.username=="client")
    {
      this.navCtrl.push(ClientTabsControllerPage);
    }
    if(this.eltModel.username=="four")
    {
      this.navCtrl.push(FournisseurTabsControllerPage);
    }
	if(this.eltModel.username=="banque")
    {
      this.navCtrl.push(BanqueTabsControllerPage);
    }
	if(this.eltModel.username=="multirole")
    {
      this.navCtrl.push(MultiroleHomePage);
    }
  }

  ionViewDidLoad()
  {
    /*setTimeout(()=>
    this.slides.slideTo(1, 1000),
    1000
    );*/
 }
}
