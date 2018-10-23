import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';
import { Fournisseur } from '../../../../models/acteur/fournisseur/fournisseur.model';
import { FournisseurProvider } from '../../../../providers/acteur/fournisseur/fournisseur.provider';

/**
 * Generated class for the CreateFournisseurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-fournisseur',
  templateUrl: 'create-fournisseur.html',
})
export class CreateFournisseurPage {

fournisseur = {} as Fournisseur;
fournisseurNewRef$ : AngularFireList<Fournisseur>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fournisseurProvider :FournisseurProvider) {
    
  }

  
  
  createNewfournisseur (){
     console.log(this.fournisseur);
     this.fournisseurProvider.createFournisseur({
       fournisseurId:1,
       nom: this.fournisseur.nom,
       prenom: this.fournisseur.prenom,
       telephone: this.fournisseur.telephone,
       email: this.fournisseur.email,
       //fournisseurId:0,
       type: this.fournisseur.type,
       userCreated:0,
       userLastModif: 0,
       dateCreated:"",
       dateLastModif:""

      
     });

     this.fournisseur = {} as Fournisseur;
     this.navCtrl.pop();

      }

}
