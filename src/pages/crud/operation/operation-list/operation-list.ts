import { DetailOperationPage } from './..//detail-operation/detail-operation';
import { OperationCreatePage } from './../operation-create/operation-create';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { OperationProvider } from '../../../../providers/user/operation/operation.provider';
import { Operation } from '../../../../models/user/operation/operation.model';
/**
 * Generated class for the OperationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-operation-list',
  templateUrl: 'operation-list.html',
})
export class OperationListPage {

  operations : any;
  operation : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private operationProvider: OperationProvider) {
    
   
    this.operationProvider.getOperationList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(operations => {
      this.operations = operations;
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperationListPage');
  }

  addNewOperation() {
    this.navCtrl.push(OperationCreatePage);
  }

  editOperation(p: Operation) {
    this.navCtrl.push(DetailOperationPage,{prod:p});
  }

  updateOperation(isActive: boolean) {
    this.operationProvider.updateOperation(this.operation.key, { active: isActive });
  }

  deleteOperation(key: string) {
    this.operationProvider.deleteOperation(key);
    this.navCtrl.push(OperationListPage);
  } 
   
}
