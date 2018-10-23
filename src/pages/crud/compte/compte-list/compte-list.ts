import { DetailComptePage } from './..//detail-compte/detail-compte';
import { CompteCreatePage } from './../compte-create/compte-create';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { UtilisateurProvider } from '../../../../providers/user/utilisateur/utilisateur.provider';
import { Utilisateur } from '../../../../models/user/utilisateur/utilisateur.model';
/**
 * Generated class for the CompteListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-compte-list',
  templateUrl: 'compte-list.html',
})
export class CompteListPage {

  comptes : any;
  compte : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private compteProvider: UtilisateurProvider) {
    
   
    this.compteProvider.getUtilisateurList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(comptes => {
      this.comptes = comptes;
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompteListPage');
  }

  addNewCompte() {
    this.navCtrl.push(CompteCreatePage);
  }

  editCompte(p: Utilisateur) {
    this.navCtrl.push(DetailComptePage,{prod:p});
  }

  updateCompte(isActive: boolean, acteurType:any) {
    this.compteProvider.updateUtilisateur(this.compte.key, { active: isActive },acteurType);
  }

  deleteCompte(key: string, acteurType:any) {
    this.compteProvider.deleteUtilisateur(key,acteurType);
    this.navCtrl.push(CompteListPage);
  } 
   
}
