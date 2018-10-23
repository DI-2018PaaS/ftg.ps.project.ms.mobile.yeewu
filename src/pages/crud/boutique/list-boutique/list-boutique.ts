import { DetailBoutiquePage } from './../detail-boutique/detail-boutique';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { CreateBoutiquePage } from '../create-boutique/create-boutique';
import { DetailMagasinPage } from '../../magasin/detail-magasin/detail-magasin';
import { BoutiqueProvider } from '../../../../providers/msmagasindomains/boutique/boutique.provider';
import { Boutique } from '../../../../models/msmagasindomains/boutique/boutique.model';
import { ProduitListPage } from '../../produit/produit-list/produit-list';
import { LoginPage } from '../../../common/login/login';
import { TrierPage } from '../../../common/trier/trier';
import { FiltrerPage } from '../../../common/filtrer/filtrer';
import { OperationCreatePage } from '../../operation/operation-create/operation-create';
import { RoleCreatePage } from '../../role/role-create/role-create';
import { ActiviteCreatePage } from '../../activite/activite-create/activite-create';
import { DomaineCreatePage } from '../../domaine/domaine-create/domaine-create';
import { CompteCreatePage } from '../../compte/compte-create/compte-create';
import { CreateMagasinPage } from '../../magasin/create-magasin/create-magasin';
import { ProduitCreatePage } from '../../produit/produit-create/produit-create';
import { ServiceCreatePage } from '../../service/service-create/service-create';
import { CategorieCreatePage } from '../../categorie/categorie-create/categorie-create';
import { OffreCreatePage } from '../../offre/offre-create/offre-create';
import { EnchereCreatePage } from '../../enchere/enchere-create/enchere-create';
import { ListMagasinPage } from '../../magasin/list-magasin/list-magasin';
import { ServiceListPage } from '../../service/service-list/service-list';

/**
 * Generated class for the ListBoutiquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-boutique',
  templateUrl: 'list-boutique.html',
})
export class ListBoutiquePage {

 boutiques : any;
 boutique : any;
public isSearchBarOpened = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private boutiqueProvider:BoutiqueProvider) {
    

    this.boutiqueProvider.getBoutiqueList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(boutiques => {
      this.boutiques =boutiques;
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoadBoutiqueListPage');
  }

  addNewBoutique() {
    this.navCtrl.push(CreateBoutiquePage);
  }

  editBoutique(p:Boutique) {
    this.navCtrl.push(DetailBoutiquePage,{boutic:p});
  }
   seeProduct(p:Boutique) {
    this.navCtrl.push(ProduitListPage);
  }
  updateBoutique(isActive: boolean) {
    this.boutiqueProvider.updateBoutique(this.boutique.key, { active: isActive });
  }

  deleteBoutique(key: string) {
    this.boutiqueProvider.deleteBoutique(key);
    this.navCtrl.push(ListBoutiquePage);
  }
goToConnexion(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
goToTrier(params){
    if (!params) params = {};
    this.navCtrl.push(TrierPage);
  }
  goToFiltrer(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
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
  onSearch(event)
  {
	console.log(event.target.value);
  }
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
}
