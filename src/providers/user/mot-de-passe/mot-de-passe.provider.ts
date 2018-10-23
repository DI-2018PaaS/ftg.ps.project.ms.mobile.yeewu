import { MotDePasse } from './../../../models/user/mot-de-passe/mot-de-passe.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the MotDePasseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MotDePasseProvider {
  private dbPath = 'users-db';
 
  refMotDePasseRef: AngularFireList<MotDePasse> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello MotDePasseProvider Provider');
    this.refMotDePasseRef = this.db.list(this.dbPath);
  }

 
  createMotDePasse(p: MotDePasse): void {
    this.refMotDePasseRef.push(p);
  }
 
  updateMotDePasse(key: string, value: any): void {
    this.refMotDePasseRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteMotDePasse(key: string): void {
    this.refMotDePasseRef.remove(key).catch(error => this.handleError(error));
  }
 
  getMotDePasseList(): AngularFireList<MotDePasse> {
    return this.refMotDePasseRef;
  }
 
  deleteAll(): void {
    this.refMotDePasseRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
