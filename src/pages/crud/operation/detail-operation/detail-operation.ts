import { OperationListPage } from './../operation-list/operation-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OperationEditPage } from '../operation-edit/operation-edit';
import { OperationProvider } from '../../../../providers/user/operation/operation.provider';
/**
 * Generated class for the DetailOperationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-operation',
  templateUrl: 'detail-operation.html',
})
export class DetailOperationPage {
  operation: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public operationProvider: OperationProvider) {
    this.operation = navParams.get('prod'); 
  }
  
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad OperationEditPage');
  }

  updateOperation(key:string, isActive: boolean) {
    this.operationProvider.updateOperation(key, { active: isActive });
  }
 
  deleteOperation(key:string) {
    this.operationProvider.deleteOperation(key);
    this.navCtrl.push(OperationListPage);
  }

  editOperation()
  {
    this.navCtrl.push(OperationEditPage, {prod :  this.operation});
  }
}
