import { ZoneListPage } from './../zone-list/zone-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZoneEditPage } from '../zone-edit/zone-edit';
import { ZoneProvider } from '../../../../providers/acteur/zone/zone.provider';

/**
 * Generated class for the DetailZonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-zone',
  templateUrl: 'detail-zone.html',
})
export class DetailZonePage {
  zone: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public zoneProvider: ZoneProvider) {
    this.zone = navParams.get('prod'); 
  }
  
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad ZoneEditPage');
  }

  updateZone(key:string, isActive: boolean) {
    this.zoneProvider.updateZone(key, { active: isActive });
  }
 
  deleteZone(key:string) {
    this.zoneProvider.deleteZone(key);
    this.navCtrl.push(ZoneListPage);
  }

  editZone()
  {
    this.navCtrl.push(ZoneEditPage, {prod :  this.zone});
  }
}
