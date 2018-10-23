import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { DetailNotationPage } from '../detail-notation/detail-notation';

@Component({
  selector: 'page-gestion-suivi-notations',
  templateUrl: 'gestion-suivi-notations.html'
})
export class GestionSuiviNotationsPage {
  notations = [
    {
      nom: 'Alpha A',
      emetteur: 'Diop',
      vote_up:'10',
      vote_down: '3',
      average_rating:'4'
    },
    {
      nom: 'Alpha B',
      emetteur: 'Fall',
      vote_up:'40',
      vote_down: '3',
      average_rating:'2.5'
    },
    {
      nom: 'Alpha C',
      emetteur: 'Ba',
      vote_up:'15',
      vote_down: '6',
      average_rating:'4.5'
    }
  ]
  constructor(public navCtrl: NavController) {
  }
  goToFiltrer(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
  }goToDetailNotation(params){
    if (!params) params = {};
    this.navCtrl.push(DetailNotationPage);
  }
}
