import { DomaineListPage } from './../domaine-list/domaine-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomaineEditPage } from '../domaine-edit/domaine-edit';
import { DomaineProvider } from '../../../../providers/domaines/domaine/domaine.provider';
/**
 * Generated class for the DetailDomainePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-domaine',
  templateUrl: 'detail-domaine.html',
})
export class DetailDomainePage {
  domaine: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public domaineProvider: DomaineProvider) {
    this.domaine = navParams.get('prod'); 
  }
  
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad DomaineEditPage');
  }

  updateDomaine(key:string, isActive: boolean) {
    this.domaineProvider.updateDomaine(key, { active: isActive });
  }
 
  deleteDomaine(key:string) {
    this.domaineProvider.deleteDomaine(key);
    this.navCtrl.push(DomaineListPage);
  }

  editDomaine()
  {
    this.navCtrl.push(DomaineEditPage, {prod :  this.domaine});
  }
}
