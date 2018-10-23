import { Operation } from './../../../models/user/operation/operation.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the OperationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OperationProvider {
  private dbPath = 'users-db';
 
  refOperationRef: AngularFireList<Operation> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello OperationProvider Provider');
    this.refOperationRef = this.db.list(this.dbPath);
  }

 
  createOperation(p: Operation): void {
    this.refOperationRef.push(p);
  }
 
  updateOperation(key: string, value: any): void {
    this.refOperationRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteOperation(key: string): void {
    this.refOperationRef.remove(key).catch(error => this.handleError(error));
  }
 
  getOperationList(): AngularFireList<Operation> {
    return this.refOperationRef;
  }
 
  deleteAll(): void {
    this.refOperationRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
