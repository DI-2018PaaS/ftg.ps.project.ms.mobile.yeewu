import { ServiceListPage } from './../service-list/service-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceEditPage } from '../service-edit/service-edit';
import { ServiceProvider } from '../../../../providers/msmagasindomains/service/service.provider';

/**
 * Generated class for the DetailServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-service',
  templateUrl: 'detail-service.html',
})
export class DetailServicePage {
  service: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public serviceProvider: ServiceProvider) {
    this.service = navParams.get('prod'); 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceEditPage');
  }

  updateService(key:string, isActive: boolean) {
    this.serviceProvider.updateService(key, { active: isActive });
  }
 
  deleteService(key:string) {
    this.serviceProvider.deleteService(key);
    this.navCtrl.push(ServiceListPage);
  }

  editService()
  {
    this.navCtrl.push(ServiceEditPage, {prod :  this.service});
  }
}
