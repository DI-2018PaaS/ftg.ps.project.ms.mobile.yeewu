import { Component } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';
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
