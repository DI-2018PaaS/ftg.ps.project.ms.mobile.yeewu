import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { ProduitEditPage } from '../../crud/produit/produit-edit/produit-edit';
import { TrierPage } from '../../common/trier/trier';

@Component({
  selector: 'page-gestion-suivi-produits',
  templateUrl: 'gestion-suivi-produits.html'
})
export class GestionSuiviProduitsPage {

  constructor(public navCtrl: NavController) {
  }
  goToFiltrer(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
  }goToEditerProduit(params){
    if (!params) params = {};
    this.navCtrl.push(ProduitEditPage);
  }goToTrier(params){
    if (!params) params = {};
    this.navCtrl.push(TrierPage);
  }
}
