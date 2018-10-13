import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-notification-envoi-offre',
  templateUrl: 'notification-envoi-offre.html'
})
export class NotificationEnvoiOffrePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
}
