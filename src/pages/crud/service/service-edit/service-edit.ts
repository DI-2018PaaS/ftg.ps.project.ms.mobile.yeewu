import { DetailServicePage } from './../detail-service/detail-service';
import { ServiceListPage } from './../service-list/service-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../../../providers/msmagasindomains/service/service.provider';

/**
 * Generated class for the ServiceEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-edit',
  templateUrl: 'service-edit.html',
})
export class ServiceEditPage {

   service: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public serviceProvider: ServiceProvider) {
    this.service = navParams.get('prod'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceEditPage');
  }


  updateService() {
    this.serviceProvider.updateService( this.service.key, { active: true });
    this.navCtrl.push(DetailServicePage,{prod: this.service});
  }
 

  deleteService(key:string) {
    this.serviceProvider.deleteService(key);
    this.navCtrl.push(ServiceListPage);
  }
  
}

