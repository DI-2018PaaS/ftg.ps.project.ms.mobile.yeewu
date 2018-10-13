import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { GestionSuiviProduitsPage } from '../gestion-suivi-produits/gestion-suivi-produits';
import { EditerProduitPage } from '../../crud/editer-produit/editer-produit';
import { TrierPage } from '../../common/trier/trier';

@Component({
  selector: 'page-gestion-suivi-devis',
  templateUrl: 'gestion-suivi-devis.html'
})
export class GestionSuiviDevisPage {

  constructor(public navCtrl: NavController) {
  }
  goToFiltrer(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
  }goToGestionSuiviProduits(params){
    if (!params) params = {};
    this.navCtrl.push(GestionSuiviProduitsPage);
  }goToEditerProduit(params){
    if (!params) params = {};
    this.navCtrl.push(EditerProduitPage);
  }goToTrier(params){
    if (!params) params = {};
    this.navCtrl.push(TrierPage);
  }
}
