import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FournisseurPage } from '../fournisseur/fournisseur';
import { CommentairePage } from '../commentaire/commentaire';

@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html'
})
export class RatingPage {

  constructor(public navCtrl: NavController) {
  }
  goToFournisseur(params){
    if (!params) params = {};
    this.navCtrl.push(FournisseurPage);
  }goToCommentaire(params){
    if (!params) params = {};
    this.navCtrl.push(CommentairePage);
  }
}
