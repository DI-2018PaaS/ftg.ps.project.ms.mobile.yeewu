import { AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { ZoneProvider } from '../../../../providers/acteur/zone/zone.provider';
import { ZoneGeographique } from '../../../../models/acteur/zone/zone';


/**
 * Generated class for the ZoneCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-zone-create',
  templateUrl: 'zone-create.html',
})
export class ZoneCreatePage {

  zoneNew = {} as ZoneGeographique;
  zoneNewRef$ : AngularFireList<ZoneGeographique>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private zoneProvider : ZoneProvider) {
    
  }

  
  createNewZone (){
     console.log(this.zoneNew);
     this.zoneProvider.createZone({
	region: this.zoneNew.region,
	ville: this.zoneNew.ville,
	pays: this.zoneNew.pays,
	longitude: this.zoneNew.longitude,
	latitude: this.zoneNew.latitude
     });

     this.zoneNew = {} as ZoneGeographique;
     this.navCtrl.pop();

   }
}
