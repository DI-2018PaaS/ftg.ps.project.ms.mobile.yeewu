import { Role } from './../../../models/user/role/role.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the RoleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoleProvider {
  private dbPath = 'users-db';
 
  refRoleRef: AngularFireList<Role> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello RoleProvider Provider');
    this.refRoleRef = this.db.list(this.dbPath);
  }

 
  createRole(p: Role): void {
    this.refRoleRef.push(p);
  }
 
  updateRole(key: string, value: any): void {
    this.refRoleRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteRole(key: string): void {
    this.refRoleRef.remove(key).catch(error => this.handleError(error));
  }
 
  getRoleList(): AngularFireList<Role> {
    return this.refRoleRef;
  }
 
  deleteAll(): void {
    this.refRoleRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
