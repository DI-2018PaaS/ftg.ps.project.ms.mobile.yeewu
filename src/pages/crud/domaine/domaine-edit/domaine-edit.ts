import { DetailDomainePage } from './../detail-domaine/detail-domaine';
import { DomaineListPage } from './../domaine-list/domaine-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomaineProvider } from '../../../../providers/domaines/domaine/domaine.provider';
/**
 * Generated class for the DomaineEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-domaine-edit',
  templateUrl: 'domaine-edit.html',
})
export class DomaineEditPage {

   domaine: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public domaineProvider: DomaineProvider) {
    this.domaine = navParams.get('prod'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DomaineEditPage');
  }


  updateDomaine() {
    this.domaineProvider.updateDomaine( this.domaine.key, { active: true });
    this.navCtrl.push(DetailDomainePage,{prod: this.domaine});
  }
 

  deleteDomaine(key:string) {
    this.domaineProvider.deleteDomaine(key);
    this.navCtrl.push(DomaineListPage);
  }
  
}

