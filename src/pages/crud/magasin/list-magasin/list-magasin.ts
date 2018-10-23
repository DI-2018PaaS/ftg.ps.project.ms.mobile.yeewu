import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailMagasinPage } from '../detail-magasin/detail-magasin';
import { CreateMagasinPage } from '../create-magasin/create-magasin';
import { map } from 'rxjs/operators';
import { MagasinProvider } from '../../../../providers/msmagasindomains/magasin/magasin.provider';
import { Magasin } from '../../../../models/msmagasindomains/magasin/magasin.model';
import { ServiceCreatePage } from '../../service/service-create/service-create';
import { ProduitCreatePage } from '../../produit/produit-create/produit-create';
import { CreateBoutiquePage } from '../../boutique/create-boutique/create-boutique';
import { ServiceListPage } from '../../service/service-list/service-list';
import { ProduitListPage } from '../../produit/produit-list/produit-list';
import { ListBoutiquePage } from '../../boutique/list-boutique/list-boutique';
import { TrierPage } from '../../../common/trier/trier';
import { EnchereCreatePage } from '../../enchere/enchere-create/enchere-create';
import { OffreCreatePage } from '../../offre/offre-create/offre-create';
import { CategorieCreatePage } from '../../categorie/categorie-create/categorie-create';
import { CompteCreatePage } from '../../compte/compte-create/compte-create';
import { DomaineCreatePage } from '../../domaine/domaine-create/domaine-create';
import { ActiviteCreatePage } from '../../activite/activite-create/activite-create';
import { RoleCreatePage } from '../../role/role-create/role-create';
import { OperationCreatePage } from '../../operation/operation-create/operation-create';
import { FiltrerPage } from '../../../common/filtrer/filtrer';
import { LoginPage } from '../../../common/login/login';
/**
 * Generated class for the ListMagasinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-magasin',
  templateUrl: 'list-magasin.html',
})
export class ListMagasinPage {

  magasins : any;
  magasin : any;
  public isSearchBarOpened = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private magasinProvider: MagasinProvider) {
    
    this.magasinProvider.getMagasinList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(Magasins => {
      this.magasins = Magasins;
    }); 

  }
  addNewMagasin() {
    this.navCtrl.push(CreateMagasinPage);
  }

  editMagasin(p: Magasin) {
    this.navCtrl.push(DetailMagasinPage,{mag:p});
  }
  seeProduct(p: Magasin) {
    this.navCtrl.push(ProduitListPage);
  }
  updateMagasin(isActive: boolean) {
    this.magasinProvider.updateMagasin(this.magasin.key, { active: isActive });
  }

  deleteMagasin(key: string) {
    this.magasinProvider.deleteMagasin(key);
    this.navCtrl.push(ListMagasinPage);
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