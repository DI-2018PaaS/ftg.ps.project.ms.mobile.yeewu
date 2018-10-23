import {UserRole } from './../../../models/user/user-role/user-role';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the UserRoleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserRoleProvider {
  private dbPath = 'users-db';
 
  refUserRoleRef: AngularFireList<UserRole> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello UserRoleProvider Provider');
    this.refUserRoleRef = this.db.list(this.dbPath);
  }

 
  createUserRole(p: UserRole): void {
    this.refUserRoleRef.push(p);
  }
 
  updateUserRole(key: string, value: any): void {
    this.refUserRoleRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteUserRole(key: string): void {
    this.refUserRoleRef.remove(key).catch(error => this.handleError(error));
  }
 
  getUserRoleList(): AngularFireList<UserRole> {
    return this.refUserRoleRef;
  }
 
  deleteAll(): void {
    this.refUserRoleRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
