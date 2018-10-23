import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TypeActeurListPage } from '../type-acteur-list/type-acteur-list';
import { TypeActeurEditPage } from '../type-acteur-edit/type-acteur-edit';
import { ActeurTypeProvider } from '../../../../providers/acteur/acteur-type/acteur-type.provider';


/**
 * Generated class for the DetailTypeActeurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-type-acteur',
  templateUrl: 'detail-type-acteur.html',
})
export class DetailTypeActeurPage {
  typeacteur: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public typeacteurProvider: ActeurTypeProvider) {
    this.typeacteur = navParams.get('prod'); 
  }
  
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad TypeActeurEditPage');
  }

  updateTypeActeur(key:string, isActive: boolean) {
    this.typeacteurProvider.updateActeurType(key, { active: isActive });
  }
 
  deleteTypeActeur(key:string) {
    this.typeacteurProvider.deleteActeurType(key);
    this.navCtrl.push(TypeActeurListPage);
  }

  editTypeActeur()
  {
    this.navCtrl.push(TypeActeurEditPage, {prod :  this.typeacteur});
  }
}
