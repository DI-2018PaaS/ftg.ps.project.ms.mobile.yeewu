import { RoleOperation } from './../../../models/user/role-operation/role-operation.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the RoleOperationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoleOperationProvider {
  private dbPath = 'firebaseDecl';
 
  refRoleOperationRef: AngularFireList<RoleOperation> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello RoleOperationProvider Provider');
    this.refRoleOperationRef = this.db.list(this.dbPath);
  }

 
  createRoleOperation(p: RoleOperation): void {
    this.refRoleOperationRef.push(p);
  }
 
  updateRoleOperation(key: string, value: any): void {
    this.refRoleOperationRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteRoleOperation(key: string): void {
    this.refRoleOperationRef.remove(key).catch(error => this.handleError(error));
  }
 
  getRoleOperationList(): AngularFireList<RoleOperation> {
    return this.refRoleOperationRef;
  }
 
  deleteAll(): void {
    this.refRoleOperationRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
