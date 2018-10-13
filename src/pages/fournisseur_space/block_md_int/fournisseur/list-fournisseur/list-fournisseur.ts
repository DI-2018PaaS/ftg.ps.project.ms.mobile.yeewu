import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { FournisseurProvider } from '../../../../../providers/acteur/fournisseur/fournisseur.provider';
import { CreateFournisseurPage } from '../create-fournisseur/create-fournisseur';
import { Fournisseur } from './../../../../../models/acteur/fournisseur/fournisseur.model';
import { DetailFournisseurPage } from '../detail-fournisseur/detail-fournisseur';

/**
 * Generated class for the ListFournisseurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-fournisseur',
  templateUrl: 'list-fournisseur.html',
})
export class ListFournisseurPage {

  fournisseurs : any;
  fournisseur : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fournisseurProvider: FournisseurProvider) {
    

    this.fournisseurProvider.getFournisseurList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fournisseurs => {
      this.fournisseurs = fournisseurs;
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FournisseurListPage');
  }

  addNewFournisseur() {
    this.navCtrl.push(CreateFournisseurPage);
  }

  editFournisseur(p: Fournisseur) {
    this.navCtrl.push(DetailFournisseurPage,{four:p});
  }

  updateFournisseur(isActive: boolean) {
    this.fournisseurProvider.updateFournisseur(this.fournisseur.key, { active: isActive });
  }

  deleteFournisseur(key: string) {
    this.fournisseurProvider.deleteFournisseur(key);
    this.navCtrl.push(ListFournisseurPage);
  } 
   

}
