import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FournisseurProvider } from '../../../../../providers/acteur/fournisseur/fournisseur.provider';
import { DetailFournisseurPage } from '../detail-fournisseur/detail-fournisseur';
import { ListFournisseurPage } from '../list-fournisseur/list-fournisseur';

/**
 * Generated class for the EditFournisseurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-fournisseur',
  templateUrl: 'edit-fournisseur.html',
})
export class EditFournisseurPage {

  fournisseur: any;

 constructor(public navCtrl: NavController, public navParams: NavParams,public fournisseurProvider: FournisseurProvider) {
   this.fournisseur = navParams.get('four'); 
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad FournisseurEditPage');
 }

 updateFournisseur() {
   this.fournisseurProvider.updateFournisseur( this.fournisseur.key, { active: true });
   this.navCtrl.push(DetailFournisseurPage,{four: this.fournisseur});

 }

 deleteFournisseur(key:string) {
   this.fournisseurProvider.deleteFournisseur(key);
   this.navCtrl.push(ListFournisseurPage);
 }
 
}
