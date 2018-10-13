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

@Component({
  selector: 'page-home',
  templateUrl: 'home-domaine.html'
})
export class HomeDomainePage {
	
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

  constructor(public navCtrl: NavController) {
  }
  goToRating(params){
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
}
