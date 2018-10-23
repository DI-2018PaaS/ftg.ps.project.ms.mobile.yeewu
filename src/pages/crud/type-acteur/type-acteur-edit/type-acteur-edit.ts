import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailTypeActeurPage } from '../detail-type-acteur/detail-type-acteur';
import { TypeActeurListPage } from '../type-acteur-list/type-acteur-list';
import { ActeurTypeProvider } from '../../../../providers/acteur/acteur-type/acteur-type.provider';


/**
 * Generated class for the TypeActeurEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type-acteur-edit',
  templateUrl: 'type-acteur-edit.html',
})
export class TypeActeurEditPage {

   typeacteur: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public typeacteurProvider: ActeurTypeProvider) {
    this.typeacteur = navParams.get('prod'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypeActeurEditPage');
  }


  updateTypeActeur() {
    this.typeacteurProvider.updateActeurType( this.typeacteur.key, { active: true });
    this.navCtrl.push(DetailTypeActeurPage,{prod: this.typeacteur});
  }
 

  deleteTypeActeur(key:string) {
    this.typeacteurProvider.deleteActeurType(key);
    this.navCtrl.push(TypeActeurListPage);
  }
  
}

