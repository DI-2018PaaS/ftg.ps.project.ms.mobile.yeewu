import { AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { RoleProvider } from '../../../../providers/user/role/role.provider';
import { Role } from '../../../../models/user/role/role.model';


/**
 * Generated class for the RoleCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-role-create',
  templateUrl: 'role-create.html',
})
export class RoleCreatePage {

  roleNew = {} as Role;
  roleNewRef$ : AngularFireList<Role>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private roleProvider : RoleProvider) {
    
  }

  
  createNewRole (){
     console.log(this.roleNew);
     this.roleProvider.createRole({
		roleUniqueID: this.roleNew.roleUniqueID,
		roleName: this.roleNew.roleName,
		acteurTypeID: this.roleNew.acteurTypeID
     });

     this.roleNew = {} as Role;
     this.navCtrl.pop();

   }
}
