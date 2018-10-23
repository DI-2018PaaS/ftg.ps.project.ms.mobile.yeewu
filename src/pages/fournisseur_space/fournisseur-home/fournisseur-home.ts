import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OperationEditPage } from '../../crud/operation/operation-edit/operation-edit';
import { RoleEditPage } from '../../crud/role/role-edit/role-edit';
import { ActiviteEditPage } from '../../crud/activite/activite-edit/activite-edit';
import { DomaineEditPage } from '../../crud/domaine/domaine-edit/domaine-edit';
import { CompteEditPage } from '../../crud/compte/compte-edit/compte-edit';
import { ProduitEditPage } from '../../crud/produit/produit-edit/produit-edit';
import { ServiceEditPage } from '../../crud/service/service-edit/service-edit';
import { CategorieEditPage } from '../../crud/categorie/categorie-edit/categorie-edit';
import { RecherchePage } from '../../common/recherche/recherche';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { TrierPage } from '../../common/trier/trier';
import { OffreEditPage } from '../../crud/offre/offre-edit/offre-edit';
import { EnchereEditPage } from '../../crud/enchere/enchere-edit/enchere-edit';


import { LoginPage } from '../../common/login/login';
import { DetailUserPage } from '../../common-espace/detail-user/detail-user';
import { DetailComptePage } from '../../crud/compte/detail-compte/detail-compte';
import { OperationCreatePage } from '../../crud/operation/operation-create/operation-create';
import { RoleCreatePage } from '../../crud/role/role-create/role-create';
import { ActiviteCreatePage } from '../../crud/activite/activite-create/activite-create';
import { DomaineCreatePage } from '../../crud/domaine/domaine-create/domaine-create';
import { CompteCreatePage } from '../../crud/compte/compte-create/compte-create';
import { ProduitCreatePage } from '../../crud/produit/produit-create/produit-create';
import { ServiceCreatePage } from '../../crud/service/service-create/service-create';
import { CategorieCreatePage } from '../../crud/categorie/categorie-create/categorie-create';
import { OffreCreatePage } from '../../crud/offre/offre-create/offre-create';
import { EnchereCreatePage } from '../../crud/enchere/enchere-create/enchere-create';
import { CreateBoutiquePage } from '../../crud/boutique/create-boutique/create-boutique';
import { CreateMagasinPage } from '../../crud/magasin/create-magasin/create-magasin';
import { EditBoutiquePage } from '../../crud/boutique/edit-boutique/edit-boutique';
import { EditMagasinPage } from '../../crud/magasin/edit-magasin/edit-magasin';
import { ListBoutiquePage } from '../../crud/boutique/list-boutique/list-boutique';
import { ListMagasinPage } from '../../crud/magasin/list-magasin/list-magasin';
import { ProduitListPage } from '../../crud/produit/produit-list/produit-list';
import { ServiceListPage } from '../../crud/service/service-list/service-list';
import { Magasin } from '../../../models/msmagasindomains/magasin/magasin.model';
import { DetailMagasinPage } from '../../crud/magasin/detail-magasin/detail-magasin';
import { MagasinProvider } from '../../../providers/msmagasindomains/magasin/magasin.provider';

// ajout map
import { map } from 'rxjs/operators';

@Component({
  selector: 'page-fournisseur-home',
  templateUrl: 'fournisseur-home.html'
})
export class FournisseurHomePage {
	magasins : any;
	magasin : any;
  constructor(public navCtrl: NavController, private magasinProvider: MagasinProvider) {
	  this.magasinProvider.getMagasinList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(Magasins => {
      this.magasins = Magasins;
    }); 
  }
  onSearch(event)
  {
	console.log(event.target.value);
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
  // liste de magasins par defaut
  editMagasin(p: Magasin) {
    this.navCtrl.push(DetailMagasinPage,{mag:p});
  }
  seeProduct(p: Magasin) {
    this.navCtrl.push(ProduitListPage);
  }
  deleteMagasin(key: string) {
    this.magasinProvider.deleteMagasin(key);
    this.navCtrl.push(ListMagasinPage);
  } 
}
