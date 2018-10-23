import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-detail-commentaires',
  templateUrl: 'detail-commentaires.html'
})


export class DetailCommentairePage {
  commentaires = [
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
  
}
