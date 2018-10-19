import { PanierPage } from './../../common/panier/panier';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailProduitByActivitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-detail-produit-by-activite',
  templateUrl: 'detail-produit-by-activite.html',
})
export class DetailProduitByActivitePage {

  produit:any;
  images = ['tracteur1.jpg', 'tracteur2.jpg', 'tracteur3.jpg', 'tracteur4.jpg'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produit=navParams.get('prod');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailProduitByActivitePage');
  }

  showPanier(){
    this.navCtrl.push(PanierPage);

  }
}
