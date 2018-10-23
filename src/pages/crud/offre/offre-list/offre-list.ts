import { DetailOffrePage } from './..//detail-offre/detail-offre';
import { OffreCreatePage } from './../offre-create/offre-create';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { OffreProvider } from '../../../../providers/msencheresoffres/offre/offre.provider';
import { Offre } from '../../../../models/msencheresoffres/offre/offre';
import { LoginPage } from '../../../common/login/login';
import { DetailComptePage } from '../../compte/detail-compte/detail-compte';
import { ListMagasinPage } from '../../magasin/list-magasin/list-magasin';
import { DetailMagasinPage } from '../../magasin/detail-magasin/detail-magasin';
import { ServiceListPage } from '../../service/service-list/service-list';
import { ProduitListPage } from '../../produit/produit-list/produit-list';
import { ListBoutiquePage } from '../../boutique/list-boutique/list-boutique';
import { RecherchePage } from '../../../common/recherche/recherche';
import { EnchereCreatePage } from '../../enchere/enchere-create/enchere-create';
import { CategorieCreatePage } from '../../categorie/categorie-create/categorie-create';
import { ServiceCreatePage } from '../../service/service-create/service-create';
import { ProduitCreatePage } from '../../produit/produit-create/produit-create';
import { CreateBoutiquePage } from '../../boutique/create-boutique/create-boutique';
import { CreateMagasinPage } from '../../magasin/create-magasin/create-magasin';
import { CompteCreatePage } from '../../compte/compte-create/compte-create';
import { DomaineCreatePage } from '../../domaine/domaine-create/domaine-create';
import { ActiviteCreatePage } from '../../activite/activite-create/activite-create';
import { RoleCreatePage } from '../../role/role-create/role-create';
import { OperationCreatePage } from '../../operation/operation-create/operation-create';
import { Magasin } from '../../../../models/msmagasindomains/magasin/magasin.model';
import { TrierPage } from '../../../common/trier/trier';

/**
 * Generated class for the OffreListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-offre-list',
  templateUrl: 'offre-list.html',
})
export class OffreListPage {

  offres : any;
  offre : any;
	public isSearchBarOpened = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private offreProvider: OffreProvider) {
    
   
    this.offreProvider.getOffreList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(offres => {
      this.offres = offres;
    }); 

  }

  onSearch(event)
  {
	  console.log(event.target.value);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OffreListPage');
  }
  addNewOffre() {
    this.navCtrl.push(OffreCreatePage);
  }
  editOffre(p: Offre) {
    this.navCtrl.push(DetailOffrePage,{prod:p});
  }
  updateOffre(isActive: boolean) {
    this.offreProvider.updateOffre(this.offre.key, { active: isActive });
  }
  deleteOffre(key: string) {
    this.offreProvider.deleteOffre(key);
    this.navCtrl.push(OffreListPage);
  } 
  goToCreerOperation(params){
    if (!params) params = {};
    this.navCtrl.push(OperationCreatePage);
  }goToCreerRole(params){
    if (!params) params = {};
    this.navCtrl.push(RoleCreatePage);
  }goToCreerActivit(params){
    if (!params) params = {};
    this.navCtrl.push(ActiviteCreatePage);
  }goToCreerDomaine(params){
    if (!params) params = {};
    this.navCtrl.push(DomaineCreatePage);
  }goToCreerCompte(params){
    if (!params) params = {};
    this.navCtrl.push(CompteCreatePage);
  }goToCreerMagasin(params){
    if (!params) params = {};
    this.navCtrl.push(CreateMagasinPage);
  }goToCreerBoutique(params){
    if (!params) params = {};
    this.navCtrl.push(CreateBoutiquePage);
  }goToCreerProduit(params){
    if (!params) params = {};
    this.navCtrl.push(ProduitCreatePage);
  }goToCreerService(params){
    if (!params) params = {};
    this.navCtrl.push(ServiceCreatePage);
  }goToCreerCategorie(params){
    if (!params) params = {};
    this.navCtrl.push(CategorieCreatePage);
  }
  goToCreerOffre(params){
    if (!params) params = {};
    this.navCtrl.push(OffreCreatePage);
  }goToCreerEnchere(params){
    if (!params) params = {};
    this.navCtrl.push(EnchereCreatePage);
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
  
  // Liste elements Boutiques
  goToListeBoutique(params){
    if (!params) params = {};
    this.navCtrl.push(ListBoutiquePage);
  }
  goToListeMagasin(params){
    if (!params) params = {};
    this.navCtrl.push(ListMagasinPage);
  }
  goToListeProduit(params){
    if (!params) params = {};
    this.navCtrl.push(ProduitListPage);
  }
  goToListeService(params){
    if (!params) params = {};
    this.navCtrl.push(ServiceListPage);
  }
  goToTrier(params){
    if (!params) params = {};
    this.navCtrl.push(TrierPage);
  }
}
