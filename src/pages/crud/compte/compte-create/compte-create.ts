import { AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { Utilisateur } from '../../../../models/user/utilisateur/utilisateur.model';
import { UtilisateurProvider } from '../../../../providers/user/utilisateur/utilisateur.provider';
import { ActeurGenericProvider } from '../../../../providers/acteur/acteur-generic/acteur-generic.provider';


/**
 * Generated class for the CompteCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-compte-create',
  templateUrl: 'compte-create.html',
})
export class CompteCreatePage {

  //compteNew = {} as Utilisateur;
  compteNew = {} as any;
  compteNewRef$ : AngularFireList<Utilisateur>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private compteProvider : UtilisateurProvider, private acteurGeneric :ActeurGenericProvider) 
  {
    
  }
  createNewCompte (acteurTypes:any)
  {
    console.log(this.compteNew);
    this.compteProvider.createUtilisateur
    (
       {
	       username: this.compteNew.username,
	       utilUniqueid: this.compteNew.utilUniqueid,
	       lastName: this.compteNew.lastName,
	       firstName: this.compteNew.firstName,
	       mail: this.compteNew.mail,
	       phoneNumber: this.compteNew.phoneNumber,
	       password: this.compteNew.password,
	       creationDateUser: this.compteNew.creationDateUser,
	       lastConnectionDate: this.compteNew.lastConnectionDate,
	       userActeurID: this.compteNew.userActeurID
      },
      acteurTypes
    );

     this.acteurGeneric.createActeurGeneric
     (
       {
          username: this.compteNew.username,
          utilUniqueid: this.compteNew.utilUniqueid,
          lastName: this.compteNew.lastName,
          firstName: this.compteNew.firstName,
          mail: this.compteNew.mail,
          phoneNumber: this.compteNew.phoneNumber,
          password: this.compteNew.password,
          creationDateUser: this.compteNew.creationDateUser,
          lastConnectionDate: this.compteNew.lastConnectionDate,
          userActeurID: this.compteNew.userActeurID
        }
        ,acteurTypes
      );
     //this.compteNew = {} as Utilisateur;
     this.compteNew = {} as any;
     this.navCtrl.pop();

   }
}
