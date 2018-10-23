import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { GestionSuiviProduitsPage } from '../gestion-suivi-produits/gestion-suivi-produits';
import { ProduitEditPage } from '../../crud/produit/produit-edit/produit-edit';
import { TrierPage } from '../../common/trier/trier';

@Component({
  selector: 'page-gestion-suivi-devis',
  templateUrl: 'gestion-suivi-devis.html'
})
export class GestionSuiviDevisPage {
	
	datasdevis = [
    {
      id: '#1',
      nom: '#1FC8'
    },
    {
     id: '#2',
      nom: '#2FC8'
    },
    {
      id: '#3',
      nom: '#3FC8'
    },
    {
      id: '#4',
      nom: '#4FC8'
    },
    {
      id: '#5',
      nom: '#5FC8'
    },
    {
      id: '#6',
      nom: '#6FC8'
    },
    {
      id: '#7',
      nom: '#7FC8'
    },
    {
      id: '#8',
      nom: '#8FC8'
    }
  ]
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
    this.navCtrl.push(ProduitEditPage);
  }goToTrier(params){
    if (!params) params = {};
    this.navCtrl.push(TrierPage);
  }
}
