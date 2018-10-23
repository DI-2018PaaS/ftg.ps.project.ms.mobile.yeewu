import { AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';

import { Activite } from '../../../../models/domaines/activite/activite.model';
import { ActiviteProvider } from '../../../../providers/domaines/activite/activite.provider';


/**
 * Generated class for the ActiviteCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-activite-create',
  templateUrl: 'activite-create.html',
})
export class ActiviteCreatePage {

  activiteNew = {} as Activite;
  activiteNewRef$ : AngularFireList<Activite>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private activiteProvider : ActiviteProvider) {
    
  }
  createNewActivite (){
     console.log(this.activiteNew);
     this.activiteProvider.createActivite({
       activiteId: this.activiteNew.activiteId,
	   nom: this.activiteNew.nom,
	   description: this.activiteNew.description,
	   categorie: this.activiteNew.categorie,
	   dateDebut: this.activiteNew.dateDebut,
	   dateFin: this.activiteNew.dateFin,
	   status: this.activiteNew.status,
	   userCreated: this.activiteNew.userCreated,
	   userLastModif: this.activiteNew.userLastModif,
	   createdDate: this.activiteNew.createdDate,
	   dateLastModif: this.activiteNew.dateLastModif
     });

     this.activiteNew = {} as Activite;
     this.navCtrl.pop();

   }
}
