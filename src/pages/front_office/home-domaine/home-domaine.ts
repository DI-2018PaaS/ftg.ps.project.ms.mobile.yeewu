import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RatingPage } from '../rating/rating';
import { FournisseurPage } from '../fournisseur/fournisseur';
import { CommentairePage } from '../commentaire/commentaire';
import { RecherchePage } from '../../common/recherche/recherche';
import { OffresPage } from '../offres/offres';
import { DevisPage } from '../devis/devis';
import { EncheresPage } from '../encheres/encheres';
import { EncherePage } from '../enchere/enchere';
import { DomainePage } from '../domaine/domaine';
import { ActivitePage } from '../activite/activite';
import { LoginPage } from '../../common/login/login';
import { ServiceListPage } from '../../crud/service/service-list/service-list';
import { ProduitListPage } from '../../crud/produit/produit-list/produit-list';
import { ListMagasinPage } from '../../crud/magasin/list-magasin/list-magasin';
import { ListBoutiquePage } from '../../crud/boutique/list-boutique/list-boutique';
import { DetailNotationPage } from '../../common-espace/detail-notation/detail-notation';

@Component({
  selector: 'page-home',
  templateUrl: 'home-domaine.html'
})
export class HomeDomainePage {
	public isSearchBarOpened = false;
	segment : any;
	datas = [
    {
      title: 'Produit A',
      description: 'Slider Produit A',
      image:'assets/img/slide_a.png'
    },
    {
      title: 'Produit B',
      description: 'Slider Produit B',
      image:'assets/img/slide_b.png'
    },
    {
      title: 'Produit C',
      description: 'Slider Produit C',
      image:'assets/img/slide_c.png'
    }
	]
	activities = [
    {
      title: 'Produit A',
      description: 'Slider Produit A',
      image:'assets/img/slide_a.png'
    },
    {
      title: 'Produit B',
      description: 'Slider Produit B',
      image:'assets/img/slide_b.png'
    },
    {
      title: 'Produit C',
      description: 'Slider Produit C',
      image:'assets/img/slide_c.png'
    }
  ]

  notations = [
    {
      nom: 'Alpha A',
      emetteur: 'Diop',
      vote_up:'10',
      vote_down: '3',
      average_rating:'4'
    },
    {
      nom: 'Alpha B',
      emetteur: 'Fall',
      vote_up:'40',
      vote_down: '3',
      average_rating:'2.5'
    },
    {
      nom: 'Alpha C',
      emetteur: 'Ba',
      vote_up:'15',
      vote_down: '6',
      average_rating:'4.5'
    }
  ]
  constructor(public navCtrl: NavController) {
		this.segment = "boutique";
  }
  onSearch(event)
  {
	  console.log(event.target.value);
  }
  goToRatings(params){
    if (!params) params = {};
    this.navCtrl.push(RatingPage);
  }goToFournisseur(params){
    if (!params) params = {};
    this.navCtrl.push(FournisseurPage);
  }goToCommentaire(params){
    if (!params) params = {};
    this.navCtrl.push(CommentairePage);
  }goToSearch(params){
    if (!params) params = {};
    this.navCtrl.push(RecherchePage);
  }goToOffres(params){
    if (!params) params = {};
    this.navCtrl.push(OffresPage);
  }goToDevis(params){
    if (!params) params = {};
    this.navCtrl.push(DevisPage);
  }goToEncheres(params){
    if (!params) params = {};
    this.navCtrl.push(EncheresPage);
  }goToEnchere(params){
    if (!params) params = {};
    this.navCtrl.push(EncherePage);
  }goToDomaine(params){
    if (!params) params = {};
    this.navCtrl.push(DomainePage);
  }goToActivite(params){
    if (!params) params = {};
    this.navCtrl.push(ActivitePage);
  }goToConnexion(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
  goToBoutiques(params){
    if (!params) params = {};
    this.navCtrl.push(ActivitePage);
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
  goToDetailNotation(params){
    if (!params) params = {};
    this.navCtrl.push(DetailNotationPage);
  }
}
