import { CompteListPage } from './../compte-list/compte-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompteEditPage } from '../compte-edit/compte-edit';
import { UtilisateurProvider } from '../../../../providers/user/utilisateur/utilisateur.provider';
/**
 * Generated class for the DetailComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-compte',
  templateUrl: 'detail-compte.html',
})
export class DetailComptePage {
  compte: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public compteProvider: UtilisateurProvider) {
    this.compte = navParams.get('prod'); 
  }
  
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad CompteEditPage');
  }

  updateCompte(key:string, isActive: boolean, acteurType:any) {
    this.compteProvider.updateUtilisateur(key, { active: isActive },acteurType);
  }
 
  deleteCompte(key:string, acteurType:any) {
    this.compteProvider.deleteUtilisateur(key,acteurType);
    this.navCtrl.push(CompteListPage);
  }

  editCompte()
  {
    this.navCtrl.push(CompteEditPage, {prod :  this.compte});
  }
}
