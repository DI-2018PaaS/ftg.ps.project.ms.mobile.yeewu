import { DetailZonePage } from './..//detail-zone/detail-zone';
import { ZoneCreatePage } from './../zone-create/zone-create';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { ZoneProvider } from '../../../../providers/acteur/zone/zone.provider';
import { ZoneGeographique } from '../../../../models/acteur/zone/zone';

/**
 * Generated class for the ZoneListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-zone-list',
  templateUrl: 'zone-list.html',
})
export class ZoneListPage {

  zones : any;
  zone : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private zoneProvider: ZoneProvider) {
    
   
    this.zoneProvider.getZoneList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(zones => {
      this.zones = zones;
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZoneListPage');
  }

  addNewZone() {
    this.navCtrl.push(ZoneCreatePage);
  }

  editZone(p: ZoneGeographique) {
    this.navCtrl.push(DetailZonePage,{prod:p});
  }

  updateZone(isActive: boolean) {
    this.zoneProvider.updateZone(this.zone.key, { active: isActive });
  }

  deleteZone(key: string) {
    this.zoneProvider.deleteZone(key);
    this.navCtrl.push(ZoneListPage);
  } 
   
}
