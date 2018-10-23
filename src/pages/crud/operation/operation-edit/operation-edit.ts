import { DetailOperationPage } from './../detail-operation/detail-operation';
import { OperationListPage } from './../operation-list/operation-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OperationProvider } from '../../../../providers/user/operation/operation.provider';

/**
 * Generated class for the OperationEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-operation-edit',
  templateUrl: 'operation-edit.html',
})
export class OperationEditPage {

   operation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public operationProvider: OperationProvider) {
    this.operation = navParams.get('prod'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperationEditPage');
  }


  updateOperation() {
    this.operationProvider.updateOperation( this.operation.key, { active: true });
    this.navCtrl.push(DetailOperationPage,{prod: this.operation});
  }
 

  deleteOperation(key:string) {
    this.operationProvider.deleteOperation(key);
    this.navCtrl.push(OperationListPage);
  }
  
}

