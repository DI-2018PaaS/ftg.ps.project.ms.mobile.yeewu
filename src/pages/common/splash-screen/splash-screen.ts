import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import { LoginPage } from '../login/login';
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
import { InscriptionPage } from '../inscription/inscription';
import { InscriptionOKPage } from '../inscription-ok/inscription-ok';
import { HomeDomainePage } from '../../front_office/home-domaine/home-domaine';
import { EditBoutiquePage } from '../../crud/boutique/edit-boutique/edit-boutique';
import { EditMagasinPage } from '../../crud/magasin/edit-magasin/edit-magasin';

@Component({
  selector: 'page-splash-screen',
  templateUrl: 'splash-screen.html'
})
export class SplashScreenPage {

  slider = [
    {
      title: 'Yeewu Sample 1',
      description: 'Premier exemple de Slider Yeewu',
      image:'assets/img/red_yeewu.png'
    },
    {
      title: 'Yeewu Sample 2',
      description: 'Deuxieme exemple de Slider Yeewu',
      image:'assets/img/green_yeewu.png'
    },
    {
      title: 'Yeewu Sample 1',
      description: 'Troisieme exemple de Slider Yeewu',
      image:'assets/img/yellow_yeewu.png'
    }
  ]
  
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
  }goToInscription(params){
    if (!params) params = {};
    this.navCtrl.push(InscriptionPage);
  }goToInscriptionOK(params){
    if (!params) params = {};
    this.navCtrl.push(InscriptionOKPage);
  }goToHomeDomainePage(params){
    if (!params) params = {};
    this.navCtrl.push(HomeDomainePage);
  }

  ionViewDidLoad()
  {
    /*setTimeout(()=>
    this.slides.slideTo(1, 1000),
    1000
    );*/
 }
}
