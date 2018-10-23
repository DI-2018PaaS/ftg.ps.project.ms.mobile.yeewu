import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailCommentairePage } from '../detail-commentaires/detail-commentaires';

@Component({
  selector: 'page-detail-notation',
  templateUrl: 'detail-notation.html'
})
export class DetailNotationPage {

  constructor(public navCtrl: NavController) {
  }
  gotoDetailCommentairePage(params){
    if (!params) params = {};
    this.navCtrl.push(DetailCommentairePage);
  }
}
