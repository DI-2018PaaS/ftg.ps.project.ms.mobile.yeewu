import { AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../../../providers/msmagasindomains/service/service.provider';
import { Service } from '../../../../models/msmagasindomains/service/service.model';


/**
 * Generated class for the ServiceCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-service-create',
  templateUrl: 'service-create.html',
})
export class ServiceCreatePage {

  serviceNew = {} as Service;
  serviceNewRef$ : AngularFireList<Service>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private serviceProvider : ServiceProvider) {
    
  }

  
  createNewService (){
     console.log(this.serviceNew);
     this.serviceProvider.createService({
       code: this.serviceNew.code,
       designation: this.serviceNew.designation,
       prixUnitaire: this.serviceNew.prixUnitaire,
       descriptionService: this.serviceNew.descriptionService,
       zoneGeographiqueId: 0
     });

     this.serviceNew = {} as Service;
     this.navCtrl.pop();

   }
}
