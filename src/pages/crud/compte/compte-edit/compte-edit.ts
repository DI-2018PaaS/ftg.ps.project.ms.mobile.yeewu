import { DetailComptePage } from './../detail-compte/detail-compte';
import { CompteListPage } from './../compte-list/compte-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UtilisateurProvider } from '../../../../providers/user/utilisateur/utilisateur.provider';
import { ActeurGenericProvider } from '../../../../providers/acteur/acteur-generic/acteur-generic.provider';

/**
 * Generated class for the CompteEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compte-edit',
  templateUrl: 'compte-edit.html',
})
export class CompteEditPage {

   compte: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private compteProvider: UtilisateurProvider, private acteurGeneric :ActeurGenericProvider) {
    this.compte = navParams.get('prod'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompteEditPage');
  }


  updateCompte(acteurTypes:any) {
    this.compteProvider.updateUtilisateur( this.compte.key, { active: true },acteurTypes);
    this.acteurGeneric.updateActeurGeneric( this.compte.key, { active: true },acteurTypes);
    this.navCtrl.push(DetailComptePage,{prod: this.compte});
  }
 

  deleteCompte(key:string,acteurTypes:any) {
    this.compteProvider.deleteUtilisateur(key,acteurTypes);
    this.acteurGeneric.deleteActeurGeneric(key);
    this.navCtrl.push(CompteListPage);
  }
  
}

