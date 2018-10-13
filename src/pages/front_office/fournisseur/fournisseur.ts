import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommentairePage } from '../commentaire/commentaire';

@Component({
  selector: 'page-fournisseur',
  templateUrl: 'fournisseur.html'
})
export class FournisseurPage {

  constructor(public navCtrl: NavController) {
  }
  goToCommentaire(params){
    if (!params) params = {};
    this.navCtrl.push(CommentairePage);
  }
}
