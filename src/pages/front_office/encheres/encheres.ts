import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncherePage } from '../enchere/enchere';

@Component({
  selector: 'page-encheres',
  templateUrl: 'encheres.html'
})
export class EncheresPage {

  constructor(public navCtrl: NavController) {
  }
  goToEnchere(params){
    if (!params) params = {};
    this.navCtrl.push(EncherePage);
  }
}
