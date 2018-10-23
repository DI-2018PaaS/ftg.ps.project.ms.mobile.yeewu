import { DetailZonePage } from './../detail-zone/detail-zone';
import { ZoneListPage } from './../zone-list/zone-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZoneProvider } from '../../../../providers/acteur/zone/zone.provider';

/**
 * Generated class for the ZoneEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zone-edit',
  templateUrl: 'zone-edit.html',
})
export class ZoneEditPage {

   zone: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public zoneProvider: ZoneProvider) {
    this.zone = navParams.get('prod'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZoneEditPage');
  }


  updateZone() {
    this.zoneProvider.updateZone( this.zone.key, { active: true });
    this.navCtrl.push(DetailZonePage,{prod: this.zone});
  }
 

  deleteZone(key:string) {
    this.zoneProvider.deleteZone(key);
    this.navCtrl.push(ZoneListPage);
  }
  
}

