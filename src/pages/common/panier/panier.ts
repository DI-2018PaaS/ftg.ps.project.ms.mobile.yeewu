import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PanierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-panier',
  templateUrl: 'panier.html',
})
export class PanierPage {

  images = [];
produits:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.images= ['tracteur1.jpg', 'tracteur2.jpg', 'tracteur3.jpg', 'tracteur4.jpg'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PanierPage');
  }

}
