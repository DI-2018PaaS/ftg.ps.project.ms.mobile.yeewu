import { AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { OperationProvider } from '../../../../providers/user/operation/operation.provider';
import { Operation } from '../../../../models/user/operation/operation.model';


/**
 * Generated class for the OperationCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-operation-create',
  templateUrl: 'operation-create.html',
})
export class OperationCreatePage {

  operationNew = {} as Operation;
  operationNewRef$ : AngularFireList<Operation>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private operationProvider : OperationProvider) {
    
  }

  
  createNewOperation (){
     console.log(this.operationNew);
     this.operationProvider.createOperation({
	operationUniqueID: this.operationNew.operationUniqueID,
	operationName: this.operationNew.operationName,
	operationDescription: this.operationNew.operationDescription
     });

     this.operationNew = {} as Operation;
     this.navCtrl.pop();

   }
}
