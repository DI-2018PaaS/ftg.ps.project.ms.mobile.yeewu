import { OffreListPage } from './../offre-list/offre-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OffreEditPage } from '../offre-edit/offre-edit';
import { OffreProvider } from '../../../../providers/msencheresoffres/offre/offre.provider';
/**
 * Generated class for the DetailOffrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-offre',
  templateUrl: 'detail-offre.html',
})
export class DetailOffrePage {
  offre: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public offreProvider: OffreProvider) {
    this.offre = navParams.get('prod'); 
  }
  
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad OffreEditPage');
  }

  updateOffre(key:string, isActive: boolean) {
    this.offreProvider.updateOffre(key, { active: isActive });
  }
 
  deleteOffre(key:string) {
    this.offreProvider.deleteOffre(key);
    this.navCtrl.push(OffreListPage);
  }

  editOffre()
  {
    this.navCtrl.push(OffreEditPage, {prod :  this.offre});
  }
}
