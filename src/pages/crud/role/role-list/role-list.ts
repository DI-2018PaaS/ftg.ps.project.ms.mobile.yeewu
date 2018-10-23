import { DetailRolePage } from './..//detail-role/detail-role';
import { RoleCreatePage } from './../role-create/role-create';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { RoleProvider } from '../../../../providers/user/role/role.provider';
import { Role } from '../../../../models/user/role/role.model';

/**
 * Generated class for the RoleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-role-list',
  templateUrl: 'role-list.html',
})
export class RoleListPage {

  roles : any;
  role : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private roleProvider: RoleProvider) {
    
   
    this.roleProvider.getRoleList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(roles => {
      this.roles = roles;
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoleListPage');
  }

  addNewRole() {
    this.navCtrl.push(RoleCreatePage);
  }

  editRole(p: Role) {
    this.navCtrl.push(DetailRolePage,{prod:p});
  }

  updateRole(isActive: boolean) {
    this.roleProvider.updateRole(this.role.key, { active: isActive });
  }

  deleteRole(key: string) {
    this.roleProvider.deleteRole(key);
    this.navCtrl.push(RoleListPage);
  } 
   
}
