import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { TypeActeurCreatePage } from '../type-acteur-create/type-acteur-create';
import { DetailTypeActeurPage } from '../detail-type-acteur/detail-type-acteur';
import { ActeurTypeActeur } from '../../../../models/acteur/acteur-acteurtype/acteur-acteurtype.model';
import { ActeurTypeProvider } from '../../../../providers/acteur/acteur-type/acteur-type.provider';


/**
 * Generated class for the TypeActeurListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-type-acteur-list',
  templateUrl: 'type-acteur-list.html',
})
export class TypeActeurListPage {

  typeacteurs : any;
  typeacteur : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private typeacteurProvider: ActeurTypeProvider) {
    
   
    this.typeacteurProvider.getActeurTypeList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(typeacteurs => {
      this.typeacteurs = typeacteurs;
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypeActeurListPage');
  }

  addNewTypeActeur() {
    this.navCtrl.push(TypeActeurCreatePage);
  }

  editTypeActeur(p: ActeurTypeActeur) {
    this.navCtrl.push(DetailTypeActeurPage,{prod:p});
  }

  updateTypeActeur(isActive: boolean) {
    this.typeacteurProvider.updateActeurType(this.typeacteur.key, { active: isActive });
  }

  deleteTypeActeur(key: string) {
    this.typeacteurProvider.deleteActeurType(key);
    this.navCtrl.push(TypeActeurListPage);
  } 
   
}
