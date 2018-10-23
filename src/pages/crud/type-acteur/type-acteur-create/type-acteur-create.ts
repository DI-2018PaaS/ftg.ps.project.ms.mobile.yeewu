import { AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { ActeurTypeActeurProvider } from '../../../../providers/acteur/acteur-acteurtype/acteur-acteurtype.provider';
import { ActeurType } from '../../../../models/acteur/acteur-type/acteur-type.model';
import { ActeurTypeProvider } from '../../../../providers/acteur/acteur-type/acteur-type.provider';


/**
 * Generated class for the TypeActeurCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-type-acteur-create',
  templateUrl: 'type-acteur-create.html',
})
export class TypeActeurCreatePage {

  typeacteurNew = {} as ActeurType;
  typeacteurNewRef$ : AngularFireList<ActeurType>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private typeacteurProvider : ActeurTypeProvider) {
    
  }
  createNewTypeActeur (){
     console.log(this.typeacteurNew);
     this.typeacteurProvider.createActeurType({
		idActeurType: this.typeacteurNew.idActeurType,
		libelleActeur: this.typeacteurNew.libelleActeur
     });

     this.typeacteurNew = {} as ActeurType;
     this.navCtrl.pop();

   }
}
