import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-ajouter-prix-sur-produit-offre',
  templateUrl: 'ajouter-prix-sur-produit-offre.html'
})
export class AjouterPrixSurProduitOffrePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
