import { DetailRolePage } from './../detail-role/detail-role';
import { RoleListPage } from './../role-list/role-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoleProvider } from '../../../../providers/user/role/role.provider';

/**
 * Generated class for the RoleEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-role-edit',
  templateUrl: 'role-edit.html',
})
export class RoleEditPage {

   role: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public roleProvider: RoleProvider) {
    this.role = navParams.get('prod'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoleEditPage');
  }


  updateRole() {
    this.roleProvider.updateRole( this.role.key, { active: true });
    this.navCtrl.push(DetailRolePage,{prod: this.role});
  }
 

  deleteRole(key:string) {
    this.roleProvider.deleteRole(key);
    this.navCtrl.push(RoleListPage);
  }
  
}

