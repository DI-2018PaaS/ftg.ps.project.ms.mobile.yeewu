import { AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { Domaine } from '../../../../models/domaines/domaine/domaine.model';
import { DomaineProvider } from '../../../../providers/domaines/domaine/domaine.provider';

/**
 * Generated class for the DomaineCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-domaine-create',
  templateUrl: 'domaine-create.html',
})
export class DomaineCreatePage {

  domaineNew = {} as Domaine;
  domaineNewRef$ : AngularFireList<Domaine>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private domaineProvider : DomaineProvider) {
    
  }

  
  createNewDomaine (){
     console.log(this.domaineNew);
     this.domaineProvider.createDomaine({
       domaineId: this.domaineNew.domaineId,
       nom: this.domaineNew.nom,
       description: this.domaineNew.description,
       status: this.domaineNew.status,
       userCreated: this.domaineNew.userCreated,
       userLastModif: this.domaineNew.userLastModif,
       createdDate: this.domaineNew.createdDate,
       dateastModif: this.domaineNew.dateastModif
     });

     this.domaineNew = {} as Domaine;
     this.navCtrl.pop();

   }
}
