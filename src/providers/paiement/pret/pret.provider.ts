import { Pret } from './../../../models/paiement/pret/pret.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the PretProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PretProvider {
  private dbPath = 'prets-db';
 
  refPretRef: AngularFireList<Pret> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello PretProvider Provider');
    this.refPretRef = this.db.list(this.dbPath);
  }

 
  createPret(p: Pret): void {
    this.refPretRef.push(p);
  }
 
  updatePret(key: string, value: any): void {
    this.refPretRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deletePret(key: string): void {
    this.refPretRef.remove(key).catch(error => this.handleError(error));
  }
 
  getPretList(): AngularFireList<Pret> {
    return this.refPretRef;
  }
 
  deleteAll(): void {
    this.refPretRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
