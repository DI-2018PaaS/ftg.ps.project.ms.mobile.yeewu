import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListFournisseurPage } from '../list-fournisseur/list-fournisseur';
import { EditFournisseurPage } from '../edit-fournisseur/edit-fournisseur';
import { FournisseurProvider } from '../../../../providers/acteur/fournisseur/fournisseur.provider';

/**
 * Generated class for the DetailFournisseurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-fournisseur',
  templateUrl: 'detail-fournisseur.html',
})
export class DetailFournisseurPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public FournisseurProvider: FournisseurProvider) {
    this.fournisseur = navParams.get('four'); 
  }
  
  fournisseur: any;


  ionViewDidLoad() {
    console.log('ionViewDidLoad FournisseurEditPage');
  }

  updateFournisseur(key:string, isActive: boolean) {
    this.FournisseurProvider.updateFournisseur(key, { active: isActive });
  }
 
  deleteFournisseur(key:string) {
    this.FournisseurProvider.deleteFournisseur(key);
    this.navCtrl.push(ListFournisseurPage);
  }

  editFounisseur()
  {
    this.navCtrl.push(EditFournisseurPage, {four :  this.fournisseur});
  }
}
