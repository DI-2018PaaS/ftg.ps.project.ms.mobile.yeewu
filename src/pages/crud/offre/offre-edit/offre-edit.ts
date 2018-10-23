import { DetailOffrePage } from './../detail-offre/detail-offre';
import { OffreListPage } from './../offre-list/offre-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OffreProvider } from '../../../../providers/msencheresoffres/offre/offre.provider';
/**
 * Generated class for the OffreEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offre-edit',
  templateUrl: 'offre-edit.html',
})
export class OffreEditPage {

   offre: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public offreProvider: OffreProvider) {
    this.offre = navParams.get('prod'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffreEditPage');
  }


  updateOffre() {
    this.offreProvider.updateOffre( this.offre.key, { active: true });
    this.navCtrl.push(DetailOffrePage,{prod: this.offre});
  }
 

  deleteOffre(key:string) {
    this.offreProvider.deleteOffre(key);
    this.navCtrl.push(OffreListPage);
  }
  
}

